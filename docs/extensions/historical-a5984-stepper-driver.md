---
layout: default
title: "Three-channel A5984 stepper driver"
permalink: /extensions/historical-a5984-stepper-driver
---

# Three-channel A5984 stepper driver

Three A5984GLP driver ICs turn three independent step/direction streams into current-regulated bipolar motor winding currents. This is a complete power-driver board, not a passive external-driver cable adapter. A small three-axis mechanism is its intended practical application.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/A5984Breakout), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

The original use notes allow an input up to 36 V and require a 60 mm fan blowing on the underside. These are historical design instructions, not measured thermal qualification. P1.1 is the motor supply and P1.2 ground; never put motor voltage on C1/C4. C1 and C4 are parallel only on the named supply/signal nets: their contact 2 nets are separate, unused nets and must remain disconnected. RV1–RV3 adjust current reference. D0MS1–3, D1MS1–3 and D2MS1–3 select each driver’s microstep mode through solder/0603 bridges. The board mounting holes are grounded, while fan mounts are described as isolated.

### Driver limits and logic contacts

The [Allegro A5984 datasheet](https://www.allegromicro.com/-/media/files/datasheets/a5984-datasheet.pdf), electrical characteristics on page 6, specifies an 8–40 V operating motor supply, logic HIGH of at least 2 V and logic LOW of at most 0.8 V. These IC limits do not establish the assembled board’s voltage, current or thermal rating; retain the historical board’s 36 V maximum and resolve its component ratings before powering it.

For the selected 24-pin GLP package, pins 7 and 9 are RESET and SLEEP. The board ties both to the connector’s +3V3 net; they are control inputs, not VDD supply pins. The shared `/ENABLE` net reaches pin 23 on all three drivers. C1/C4 contact 3 is STEP0 and contact 4 is DIR0, followed by STEP1/DIR1 on 5/6 and STEP2/DIR2 on 7/8. This order differs from some passive driver adapters, so a same-number host cable is not an established connection recipe.

The retained capacitors have generic `C` or `CP` values without the capacitance and voltage ratings needed to qualify the charge pump and supply decoupling. The sense resistors are labelled `R05`; their fitted resistance, tolerance, power rating and current calibration still need confirmation. A motor wiring diagram alone would leave these power-stage requirements unresolved.

### Annotated selected-revision board reference

These annotated sheets retain the selected native contact positions, connector and component functions, and exact source net keys. They use a newly source-derived abstract, rather than recovered original canonical artwork. Use the contact keys to distinguish native net names from a proposed host assignment. Cable orientation, fitted parts and operating limits still require qualification. MOT1–3 are display abbreviations of the source MotorOutput references. ART47–54 distinguish repeated source references; pad geometry does not qualify mounting hardware. Current limits, microstep operation and motor phase assignments remain unqualified.

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-00-overview" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-c1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-c1-1.png" title="C1 1" alt="C1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-c1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-c1-2.png" title="C1 2" alt="C1 2 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-c4-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-c4-1.png" title="C4 1" alt="C4 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-c4-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-c4-2.png" title="C4 2" alt="C4 2 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d0ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d0ms1-1.png" title="D0Ms1 1" alt="D0Ms1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d0ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d0ms2-1.png" title="D0Ms2 1" alt="D0Ms2 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d0ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d0ms3-1.png" title="D0Ms3 1" alt="D0Ms3 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d1ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d1ms1-1.png" title="D1Ms1 1" alt="D1Ms1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d1ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d1ms2-1.png" title="D1Ms2 1" alt="D1Ms2 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d1ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d1ms3-1.png" title="D1Ms3 1" alt="D1Ms3 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d2ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d2ms1-1.png" title="D2Ms1 1" alt="D2Ms1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d2ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d2ms2-1.png" title="D2Ms2 1" alt="D2Ms2 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-d2ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-d2ms3-1.png" title="D2Ms3 1" alt="D2Ms3 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-mot1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-mot1-1.png" title="Mot1 1" alt="Mot1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-mot2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-mot2-1.png" title="Mot2 1" alt="Mot2 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-mot3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-mot3-1.png" title="Mot3 1" alt="Mot3 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-p1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-p1-1.png" title="P1 1" alt="P1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-rv1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-rv1-1.png" title="Rv1 1" alt="Rv1 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-rv2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-rv2-1.png" title="Rv2 1" alt="Rv2 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-compact-function-reader-rv3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-reader-compact/reader-rv3-1.png" title="Rv3 1" alt="Rv3 1 for the selected historical a5984-stepper-driver source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-00-overview" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/00-overview.png" title="A5984 driver reference" alt="A5984 driver reference" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art47-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art47-1.png" title="ART47: source contacts" alt="ART47: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art48-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art48-1.png" title="ART48: source contacts" alt="ART48: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art49-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art49-1.png" title="ART49: source contacts" alt="ART49: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art50-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art50-1.png" title="ART50: source contacts" alt="ART50: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art51-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art51-1.png" title="ART51: source contacts" alt="ART51: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art52-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art52-1.png" title="ART52: source contacts" alt="ART52: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art53-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art53-1.png" title="ART53: source contacts" alt="ART53: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-art54-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/art54-1.png" title="ART54: source contacts" alt="ART54: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c1-1.png" title="C1: source contacts" alt="C1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c1-2.png" title="C1: source contacts" alt="C1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c10-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c10-1.png" title="C10: source contacts" alt="C10: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c11-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c11-1.png" title="C11: source contacts" alt="C11: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c12-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c12-1.png" title="C12: source contacts" alt="C12: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c13-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c13-1.png" title="C13: source contacts" alt="C13: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c14-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c14-1.png" title="C14: source contacts" alt="C14: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c15-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c15-1.png" title="C15: source contacts" alt="C15: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c16-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c16-1.png" title="C16: source contacts" alt="C16: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c17-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c17-1.png" title="C17: source contacts" alt="C17: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c2-1.png" title="C2: source contacts" alt="C2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c3-1.png" title="C3: source contacts" alt="C3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c4-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c4-1.png" title="C4: source contacts" alt="C4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c4-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c4-2.png" title="C4: source contacts" alt="C4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c5-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c5-1.png" title="C5: source contacts" alt="C5: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c6-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c6-1.png" title="C6: source contacts" alt="C6: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c7-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c7-1.png" title="C7: source contacts" alt="C7: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c8-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c8-1.png" title="C8: source contacts" alt="C8: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-c9-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/c9-1.png" title="C9: source contacts" alt="C9: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d0ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d0ms1-1.png" title="D0MS1: source contacts" alt="D0MS1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d0ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d0ms2-1.png" title="D0MS2: source contacts" alt="D0MS2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d0ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d0ms3-1.png" title="D0MS3: source contacts" alt="D0MS3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d1ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d1ms1-1.png" title="D1MS1: source contacts" alt="D1MS1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d1ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d1ms2-1.png" title="D1MS2: source contacts" alt="D1MS2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d1ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d1ms3-1.png" title="D1MS3: source contacts" alt="D1MS3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d2ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d2ms1-1.png" title="D2MS1: source contacts" alt="D2MS1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d2ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d2ms2-1.png" title="D2MS2: source contacts" alt="D2MS2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-d2ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/d2ms3-1.png" title="D2MS3: source contacts" alt="D2MS3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-mot1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/mot1-1.png" title="MOT1: source contacts" alt="MOT1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-mot2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/mot2-1.png" title="MOT2: source contacts" alt="MOT2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-mot3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/mot3-1.png" title="MOT3: source contacts" alt="MOT3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-p1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/p1-1.png" title="P1: source contacts" alt="P1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r1-1.png" title="R1: source contacts" alt="R1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r10-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r10-1.png" title="R10: source contacts" alt="R10: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r11-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r11-1.png" title="R11: source contacts" alt="R11: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r12-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r12-1.png" title="R12: source contacts" alt="R12: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r2-1.png" title="R2: source contacts" alt="R2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r3-1.png" title="R3: source contacts" alt="R3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r4-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r4-1.png" title="R4: source contacts" alt="R4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r5-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r5-1.png" title="R5: source contacts" alt="R5: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r6-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r6-1.png" title="R6: source contacts" alt="R6: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r7-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r7-1.png" title="R7: source contacts" alt="R7: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r8-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r8-1.png" title="R8: source contacts" alt="R8: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-r9-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/r9-1.png" title="R9: source contacts" alt="R9: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-rv1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/rv1-1.png" title="RV1: source contacts" alt="RV1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-rv2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/rv2-1.png" title="RV2: source contacts" alt="RV2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-rv3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/rv3-1.png" title="RV3: source contacts" alt="RV3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-1.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-10" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-10.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-11" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-11.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-12" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-12.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-13" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-13.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-14" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-14.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-15" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-15.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-16" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-16.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-17" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-17.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-18" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-18.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-19" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-19.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-2.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-20" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-20.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-3.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-4.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-5.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-6.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-7.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-8.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-source-net-keys-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/source-net-keys-9.png" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u1-1.png" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u1-2.png" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u1-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u1-3.png" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u1-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u1-4.png" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u1-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u1-5.png" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u2-1.png" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u2-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u2-2.png" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u2-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u2-3.png" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u2-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u2-4.png" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u2-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u2-5.png" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u3-1.png" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u3-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u3-2.png" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u3-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u3-3.png" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u3-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u3-4.png" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-u3-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/u3-5.png" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art47-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art47-0.png" title="ART47.M: native pad" alt="ART47.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art48-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art48-0.png" title="ART48.M: native pad" alt="ART48.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art49-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art49-0.png" title="ART49.M: native pad" alt="ART49.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art50-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art50-0.png" title="ART50.M: native pad" alt="ART50.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art51-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art51-0.png" title="ART51.M: native pad" alt="ART51.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art52-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art52-0.png" title="ART52.M: native pad" alt="ART52.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art53-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art53-0.png" title="ART53.M: native pad" alt="ART53.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-art54-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-art54-0.png" title="ART54.M: native pad" alt="ART54.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-0.png" title="C1.1: native pad" alt="C1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-1.png" title="C1.2: native pad" alt="C1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-2.png" title="C1.3: native pad" alt="C1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-3.png" title="C1.4: native pad" alt="C1.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-4.png" title="C1.5: native pad" alt="C1.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-5.png" title="C1.6: native pad" alt="C1.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-6.png" title="C1.7: native pad" alt="C1.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-7.png" title="C1.8: native pad" alt="C1.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-8.png" title="C1.9: native pad" alt="C1.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c1-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c1-9.png" title="C1.10: native pad" alt="C1.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c10-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c10-0.png" title="C10.1: native pad" alt="C10.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c10-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c10-1.png" title="C10.2: native pad" alt="C10.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c11-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c11-0.png" title="C11.1: native pad" alt="C11.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c11-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c11-1.png" title="C11.2: native pad" alt="C11.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c12-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c12-0.png" title="C12.1: native pad" alt="C12.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c12-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c12-1.png" title="C12.2: native pad" alt="C12.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c13-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c13-0.png" title="C13.1: native pad" alt="C13.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c13-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c13-1.png" title="C13.2: native pad" alt="C13.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c14-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c14-0.png" title="C14.1: native pad" alt="C14.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c14-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c14-1.png" title="C14.2: native pad" alt="C14.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c15-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c15-0.png" title="C15.1: native pad" alt="C15.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c15-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c15-1.png" title="C15.2: native pad" alt="C15.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c16-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c16-0.png" title="C16.1: native pad" alt="C16.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c16-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c16-1.png" title="C16.2: native pad" alt="C16.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c17-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c17-0.png" title="C17.1: native pad" alt="C17.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c17-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c17-1.png" title="C17.2: native pad" alt="C17.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c2-0.png" title="C2.1: native pad" alt="C2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c2-1.png" title="C2.2: native pad" alt="C2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c3-0.png" title="C3.1: native pad" alt="C3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c3-1.png" title="C3.2: native pad" alt="C3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-0.png" title="C4.1: native pad" alt="C4.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-1.png" title="C4.2: native pad" alt="C4.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-2.png" title="C4.3: native pad" alt="C4.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-3.png" title="C4.4: native pad" alt="C4.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-4.png" title="C4.5: native pad" alt="C4.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-5.png" title="C4.6: native pad" alt="C4.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-6.png" title="C4.7: native pad" alt="C4.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-7.png" title="C4.8: native pad" alt="C4.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-8.png" title="C4.9: native pad" alt="C4.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c4-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c4-9.png" title="C4.10: native pad" alt="C4.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c5-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c5-0.png" title="C5.1: native pad" alt="C5.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c5-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c5-1.png" title="C5.2: native pad" alt="C5.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c6-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c6-0.png" title="C6.1: native pad" alt="C6.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c6-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c6-1.png" title="C6.2: native pad" alt="C6.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c7-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c7-0.png" title="C7.1: native pad" alt="C7.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c7-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c7-1.png" title="C7.2: native pad" alt="C7.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c8-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c8-0.png" title="C8.1: native pad" alt="C8.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c8-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c8-1.png" title="C8.2: native pad" alt="C8.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c9-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c9-0.png" title="C9.1: native pad" alt="C9.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-c9-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-c9-1.png" title="C9.2: native pad" alt="C9.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms1-0.png" title="D0MS1.1: native pad" alt="D0MS1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms1-1.png" title="D0MS1.2: native pad" alt="D0MS1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms2-0.png" title="D0MS2.1: native pad" alt="D0MS2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms2-1.png" title="D0MS2.2: native pad" alt="D0MS2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms3-0.png" title="D0MS3.1: native pad" alt="D0MS3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d0ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d0ms3-1.png" title="D0MS3.2: native pad" alt="D0MS3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms1-0.png" title="D1MS1.1: native pad" alt="D1MS1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms1-1.png" title="D1MS1.2: native pad" alt="D1MS1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms2-0.png" title="D1MS2.1: native pad" alt="D1MS2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms2-1.png" title="D1MS2.2: native pad" alt="D1MS2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms3-0.png" title="D1MS3.1: native pad" alt="D1MS3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d1ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d1ms3-1.png" title="D1MS3.2: native pad" alt="D1MS3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms1-0.png" title="D2MS1.1: native pad" alt="D2MS1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms1-1.png" title="D2MS1.2: native pad" alt="D2MS1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms2-0.png" title="D2MS2.1: native pad" alt="D2MS2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms2-1.png" title="D2MS2.2: native pad" alt="D2MS2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms3-0.png" title="D2MS3.1: native pad" alt="D2MS3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-d2ms3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-d2ms3-1.png" title="D2MS3.2: native pad" alt="D2MS3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot1-0.png" title="MOT1.1: native pad" alt="MOT1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot1-1.png" title="MOT1.2: native pad" alt="MOT1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot1-2.png" title="MOT1.3: native pad" alt="MOT1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot1-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot1-3.png" title="MOT1.4: native pad" alt="MOT1.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot2-0.png" title="MOT2.1: native pad" alt="MOT2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot2-1.png" title="MOT2.2: native pad" alt="MOT2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot2-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot2-2.png" title="MOT2.3: native pad" alt="MOT2.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot2-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot2-3.png" title="MOT2.4: native pad" alt="MOT2.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot3-0.png" title="MOT3.1: native pad" alt="MOT3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot3-1.png" title="MOT3.2: native pad" alt="MOT3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot3-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot3-2.png" title="MOT3.3: native pad" alt="MOT3.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-mot3-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-mot3-3.png" title="MOT3.4: native pad" alt="MOT3.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-p1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-p1-0.png" title="P1.2: native pad" alt="P1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-p1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-p1-1.png" title="P1.1: native pad" alt="P1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r1-0.png" title="R1.1: native pad" alt="R1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r1-1.png" title="R1.2: native pad" alt="R1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r10-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r10-0.png" title="R10.1: native pad" alt="R10.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r10-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r10-1.png" title="R10.2: native pad" alt="R10.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r11-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r11-0.png" title="R11.1: native pad" alt="R11.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r11-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r11-1.png" title="R11.2: native pad" alt="R11.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r12-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r12-0.png" title="R12.1: native pad" alt="R12.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r12-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r12-1.png" title="R12.2: native pad" alt="R12.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r2-0.png" title="R2.1: native pad" alt="R2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r2-1.png" title="R2.2: native pad" alt="R2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r3-0.png" title="R3.1: native pad" alt="R3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r3-1.png" title="R3.2: native pad" alt="R3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r4-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r4-0.png" title="R4.1: native pad" alt="R4.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r4-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r4-1.png" title="R4.2: native pad" alt="R4.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r5-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r5-0.png" title="R5.1: native pad" alt="R5.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r5-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r5-1.png" title="R5.2: native pad" alt="R5.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r6-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r6-0.png" title="R6.1: native pad" alt="R6.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r6-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r6-1.png" title="R6.2: native pad" alt="R6.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r7-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r7-0.png" title="R7.1: native pad" alt="R7.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r7-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r7-1.png" title="R7.2: native pad" alt="R7.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r8-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r8-0.png" title="R8.1: native pad" alt="R8.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r8-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r8-1.png" title="R8.2: native pad" alt="R8.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r9-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r9-0.png" title="R9.1: native pad" alt="R9.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-r9-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-r9-1.png" title="R9.2: native pad" alt="R9.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv1-0.png" title="RV1.1: native pad" alt="RV1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv1-1.png" title="RV1.2: native pad" alt="RV1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv1-2.png" title="RV1.3: native pad" alt="RV1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv2-0.png" title="RV2.1: native pad" alt="RV2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv2-1.png" title="RV2.2: native pad" alt="RV2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv2-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv2-2.png" title="RV2.3: native pad" alt="RV2.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv3-0.png" title="RV3.1: native pad" alt="RV3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv3-1.png" title="RV3.2: native pad" alt="RV3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-rv3-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-rv3-2.png" title="RV3.3: native pad" alt="RV3.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-0.png" title="U1.1: native pad" alt="U1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-1.png" title="U1.2: native pad" alt="U1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-10" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-10.png" title="U1.11: native pad" alt="U1.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-11" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-11.png" title="U1.12: native pad" alt="U1.12: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-12" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-12.png" title="U1.13: native pad" alt="U1.13: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-13" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-13.png" title="U1.14: native pad" alt="U1.14: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-14" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-14.png" title="U1.15: native pad" alt="U1.15: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-15" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-15.png" title="U1.16: native pad" alt="U1.16: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-16" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-16.png" title="U1.17: native pad" alt="U1.17: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-17" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-17.png" title="U1.18: native pad" alt="U1.18: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-18" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-18.png" title="U1.19: native pad" alt="U1.19: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-19" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-19.png" title="U1.20: native pad" alt="U1.20: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-2.png" title="U1.3: native pad" alt="U1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-20" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-20.png" title="U1.21: native pad" alt="U1.21: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-21" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-21.png" title="U1.22: native pad" alt="U1.22: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-22" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-22.png" title="U1.23: native pad" alt="U1.23: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-23" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-23.png" title="U1.24: native pad" alt="U1.24: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-24" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-24.png" title="U1.25: native pad" alt="U1.25: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-3.png" title="U1.4: native pad" alt="U1.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-4.png" title="U1.5: native pad" alt="U1.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-5.png" title="U1.6: native pad" alt="U1.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-6.png" title="U1.7: native pad" alt="U1.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-7.png" title="U1.8: native pad" alt="U1.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-8.png" title="U1.9: native pad" alt="U1.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u1-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u1-9.png" title="U1.10: native pad" alt="U1.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-0.png" title="U2.1: native pad" alt="U2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-1.png" title="U2.2: native pad" alt="U2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-10" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-10.png" title="U2.11: native pad" alt="U2.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-11" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-11.png" title="U2.12: native pad" alt="U2.12: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-12" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-12.png" title="U2.13: native pad" alt="U2.13: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-13" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-13.png" title="U2.14: native pad" alt="U2.14: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-14" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-14.png" title="U2.15: native pad" alt="U2.15: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-15" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-15.png" title="U2.16: native pad" alt="U2.16: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-16" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-16.png" title="U2.17: native pad" alt="U2.17: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-17" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-17.png" title="U2.18: native pad" alt="U2.18: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-18" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-18.png" title="U2.19: native pad" alt="U2.19: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-19" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-19.png" title="U2.20: native pad" alt="U2.20: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-2.png" title="U2.3: native pad" alt="U2.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-20" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-20.png" title="U2.21: native pad" alt="U2.21: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-21" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-21.png" title="U2.22: native pad" alt="U2.22: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-22" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-22.png" title="U2.23: native pad" alt="U2.23: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-23" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-23.png" title="U2.24: native pad" alt="U2.24: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-24" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-24.png" title="U2.25: native pad" alt="U2.25: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-3.png" title="U2.4: native pad" alt="U2.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-4.png" title="U2.5: native pad" alt="U2.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-5.png" title="U2.6: native pad" alt="U2.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-6.png" title="U2.7: native pad" alt="U2.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-7.png" title="U2.8: native pad" alt="U2.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-8.png" title="U2.9: native pad" alt="U2.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u2-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u2-9.png" title="U2.10: native pad" alt="U2.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-0" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-0.png" title="U3.1: native pad" alt="U3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-1" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-1.png" title="U3.2: native pad" alt="U3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-10" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-10.png" title="U3.11: native pad" alt="U3.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-11" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-11.png" title="U3.12: native pad" alt="U3.12: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-12" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-12.png" title="U3.13: native pad" alt="U3.13: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-13" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-13.png" title="U3.14: native pad" alt="U3.14: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-14" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-14.png" title="U3.15: native pad" alt="U3.15: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-15" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-15.png" title="U3.16: native pad" alt="U3.16: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-16" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-16.png" title="U3.17: native pad" alt="U3.17: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-17" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-17.png" title="U3.18: native pad" alt="U3.18: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-18" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-18.png" title="U3.19: native pad" alt="U3.19: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-19" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-19.png" title="U3.20: native pad" alt="U3.20: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-2" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-2.png" title="U3.3: native pad" alt="U3.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-20" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-20.png" title="U3.21: native pad" alt="U3.21: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-21" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-21.png" title="U3.22: native pad" alt="U3.22: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-22" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-22.png" title="U3.23: native pad" alt="U3.23: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-23" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-23.png" title="U3.24: native pad" alt="U3.24: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-24" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-24.png" title="U3.25: native pad" alt="U3.25: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-3" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-3.png" title="U3.4: native pad" alt="U3.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-4" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-4.png" title="U3.5: native pad" alt="U3.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-5" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-5.png" title="U3.6: native pad" alt="U3.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-6" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-6.png" title="U3.7: native pad" alt="U3.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-7" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-7.png" title="U3.8: native pad" alt="U3.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-8" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-8.png" title="U3.9: native pad" alt="U3.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-annotated-contact-u3-9" src="/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/contact-u3-9.png" title="U3.10: native pad" alt="U3.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-a5984-stepper-driver/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Earlier functional references, contact inventory and original source download</summary>

### Source-derived board reference

These annotated references explain the selected historical circuit using its retained native pad, silk and footprint geometry. They are not populated smoothie-diagrams abstracts and do not establish mating-face orientation or copper continuity. Connector leaders identify parts; they are not electrical wires. The requested populated abstract remains unavailable.

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-01" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-01.png" title="Connector functions 01" alt="Connector functions 01 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-02" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-02.png" title="Connector functions 02" alt="Connector functions 02 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-03" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-03.png" title="Connector functions 03" alt="Connector functions 03 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-04" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-04.png" title="Connector functions 04" alt="Connector functions 04 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-05" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-05.png" title="Connector functions 05" alt="Connector functions 05 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-06" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-06.png" title="Connector functions 06" alt="Connector functions 06 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-07" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-07.png" title="Connector functions 07" alt="Connector functions 07 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-08" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-08.png" title="Connector functions 08" alt="Connector functions 08 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-connector-reference-09" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/connector-reference-09.png" title="Connector functions 09" alt="Connector functions 09 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-circuit-notes" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/circuit-notes.png" title="Circuit operation and limits" alt="Circuit operation and limits for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

<details markdown="1">
<summary>Enlarged native contact geometry and numbering</summary>

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-01" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-01.png" title="Source contact geometry 01" alt="Source contact geometry 01 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-02" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-02.png" title="Source contact geometry 02" alt="Source contact geometry 02 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-03" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-03.png" title="Source contact geometry 03" alt="Source contact geometry 03 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-04" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-04.png" title="Source contact geometry 04" alt="Source contact geometry 04 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-05" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-05.png" title="Source contact geometry 05" alt="Source contact geometry 05 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-06" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-06.png" title="Source contact geometry 06" alt="Source contact geometry 06 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-07" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-07.png" title="Source contact geometry 07" alt="Source contact geometry 07 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-08" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-08.png" title="Source contact geometry 08" alt="Source contact geometry 08 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-a5984-stepper-driver-native-detail-09" src="/images/extensions/historical-a5984-stepper-driver/guides/retained-52ab340/native-detail-09.png" title="Source contact geometry 09" alt="Source contact geometry 09 for the retained historical a5984-stepper-driver" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

</details>

 The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 1 PCB-only nodes. The extra PCB node is the unnumbered grounded BoardMount pad, consistent with the author’s grounded-mount note.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| C1 | Gadgeteer | 1 → +3V3; 2 → Net-(C1-Pad2); 3 → /STEP0; 4 → /DIR0; 5 → /STEP1; 6 → /DIR1; 7 → /STEP2; 8 → /DIR2; 9 → /ENABLE; 10 → GND |
| D0MS1 | 0 | 1 → +3V3; 2 → /MS1 |
| D0MS2 | 0 | 1 → +3V3; 2 → /MS2 |
| D0MS3 | 0 | 1 → +3V3; 2 → /MS3 |
| RV1 | 50K | 1 → Net-(R7-Pad2); 2 → /Reference; 3 → GND |
| C4 | Gadgeteer | 1 → +3V3; 2 → Net-(C4-Pad2); 3 → /STEP0; 4 → /DIR0; 5 → /STEP1; 6 → /DIR1; 7 → /STEP2; 8 → /DIR2; 9 → /ENABLE; 10 → GND |
| MotorOutput1 | CONN_01X04 | 1 → /OUT1B; 2 → /OUT1A; 3 → /OUT2A; 4 → /OUT2B |
| P1 | CONN_01X02 | 1 → +36V; 2 → GND |
| D1MS1 | 0 | 1 → +3V3; 2 → Net-(D1MS1-Pad2) |
| D1MS2 | 0 | 1 → +3V3; 2 → Net-(D1MS2-Pad2) |
| D1MS3 | 0 | 1 → +3V3; 2 → Net-(D1MS3-Pad2) |
| RV2 | 50K | 1 → Net-(R2-Pad2); 2 → Net-(RV2-Pad2); 3 → GND |
| MotorOutput2 | CONN_01X04 | 1 → Net-(MotorOutput2-Pad1); 2 → Net-(MotorOutput2-Pad2); 3 → Net-(MotorOutput2-Pad3); 4 → Net-(MotorOutput2-Pad4) |
| D2MS1 | 0 | 1 → +3V3; 2 → Net-(D2MS1-Pad2) |
| D2MS2 | 0 | 1 → +3V3; 2 → Net-(D2MS2-Pad2) |
| D2MS3 | 0 | 1 → +3V3; 2 → Net-(D2MS3-Pad2) |
| RV3 | 50K | 1 → Net-(R3-Pad2); 2 → Net-(RV3-Pad2); 3 → GND |
| MotorOutput3 | CONN_01X04 | 1 → Net-(MotorOutput3-Pad1); 2 → Net-(MotorOutput3-Pad2); 3 → Net-(MotorOutput3-Pad3); 4 → Net-(MotorOutput3-Pad4) |

</div>

</details>



</details>


</details>

## Connect and try it

For a single unloaded motor, use MotorOutput1 contacts 1/2 for one winding (OUT1B/OUT1A), and 3/4 for the other (OUT2A/OUT2B), after identifying winding pairs with power removed. The other channels connect driver pins 15/18/19/22 to their respective motor contacts 1/2/3/4. C1.3/.4 carry STEP0/DIR0, .5/.6 STEP1/DIR1, .7/.8 STEP2/DIR2, and .9 is a shared active-low enable. A custom V2 Prime cable can map these to GF contacts 3–9, but contact 2 must be omitted. GF’s pin identities are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2; this is a wiring candidate, not an accepted motor configuration.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### Channel-zero bare-shaft bench

Use one [STEPPERONLINE 17HS19-2004S1](https://www.omc-stepperonline.com/nema-17-bipolar-59ncm-84oz-in-2a-42x48mm-4-wires-w-1m-cable-connector-17hs19-2004s1) bipolar motor: 1.8° full steps, 2 A rated phase current, Black/Green winding A and Red/Blue winding B. Secure the bare motor with no mechanical load. This procedure retains the historical channel-zero selector population; do not copy the modern board's mode, contact order or VREF value.

### Matching source and example setup

The retained native source at legacy snapshot `52ab340de33180a975b25f856c161993488e6ace` contains U1 A5984GLP on channel zero. Its R5/R6 are each R05 (0.05 Ω). R11/R12 belong to channel two and are not channel-zero measurement references. A chosen 0.5 A trip-current limit therefore requires **0.200 V at RV1.2 /Reference relative to ground**, from I_TRIPMAX = VREF/(8 R_S). This is a deliberately reduced example current, not a rated-torque or thermal claim. Verify the actual sense resistors, reference and fitted driver before motor power.

U1.7 RESET and .9 SLEEP connect directly to +3V3. D0MS1, D0MS2 and D0MS3 are 0 Ω links from +3V3 to the three mode inputs. **With all three actually fitted, MS3/MS2/MS1 = 111 selects eighth-step**, per A5984 Table 1. The mode truth table is not a generic binary microstep progression. R1 0 Ω grounds ROSC for APFD operation. Do not assume fitted continuity from this source schedule; check it before selecting this procedure. No link removal or board alteration is requested.

Use the historical guide's source-derived cable orientation. C1.1 is +3V3, .3 STEP0, .4 DIR0, .9 shared ENABLE and .10 GND. A deliberate GF/J37 matching allocation is PB1 STEP, PJ4 DIR and PJ2 active-low ENABLE. C1.2 is not a motor supply. Other axis contacts .5–.8 must have no competing host output or accidental motion owner. Motor power is a separate P1.1 +36V source net/P1.2 GND; **the net name is not a qualified supply recommendation**. Choose and qualify an actual supply against fitted capacitors, driver and board limits before proceeding; that unresolved electrical qualification remains outside this software recipe. Never power a motor from the Gadgeteer rails.

Channel-zero MotorOutput1 is ordered **1 OUT1B, 2 OUT1A, 3 OUT2A, 4 OUT2B**. For the named motor's winding pairs, connect Green to1, Black to2, Red to3 and Blue to4, subject to confirming the actual motor winding pairs and connector orientation with power removed. Leave channels one/two motor connectors empty and all other machine actuators disconnected. Do not change motor connections while powered.

### Firmware procedure

In a valid Prime base configuration with alpha registered as X, reserve these pins exclusively and merge:

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PB1
alpha.dir_pin = PJ4
alpha.en_pin = PJ2!
beta.en_pin = nc
gamma.en_pin = nc
```

Alpha owns the **shared** enable. This deliberately is a one-motor bench: M17 enables all configured drivers and the shared line cannot independently disable three channels. Do not use M18 X as a per-channel isolation policy for a shared-enable installation. The `external` driver does not program the A5984 mode or current limit.

After confirming the exact mode/reference/power setup above and configuration startup, send `M18`, then `M17`, wait at least five seconds, and issue:

```text
test pulse x 8
M18
```

At eighth-step mode the source requests eight rising edges, nominally one 1.8° full-step angle for this named motor, over about eighty seconds. Each STEP assertion is five seconds HIGH then five seconds LOW; no DIR change or steps_per_mm conversion occurs. Energization may first align the rotor. No rapid jog, homing, torque or position accuracy claim follows. Leave the shaft unloaded and accessible only for observation. Do not substitute the experimental `test raw` path.

The retained source exposes U1 fault only as Net-(U1-Pad4); no host fault interlock is established. For required missing board-specific fault handling email **wolf.arthur@gamil.com**. Generic external STEP/DIR support exists, so hardware/current/cable qualifications must not be called a missing firmware driver.

This is a complete named slow-step **software** procedure conditional on the explicit selected-source hardware prerequisites. Actual supply qualification, complete powered-wiring drawing, mating orientation, target execution, hardware and viewer gates remain unaccepted. The uncertain historical +36V supply population is intentionally not filled with an invented voltage.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining source questions

Fitted sense-resistor ratings and actual installed microstep bridges; missing charge-pump and supply-capacitor specifications; current-reference adjustment/calibration; minimum pulse timing; final shared-enable configuration; PCB/netlist parity and thermal limits. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

### Exact conditional channel mapping

The selected board’s contact order differs from the pinned `external-drivers.ini` example. For individually verified GF/J37-to-C1 same-number signal leads, the source mapping is:

| Actuator | Driver mode | STEP setting | DIR setting |
|---|---|---|---|
| `alpha` | `external` | `PB1` | `PJ4` |
| `beta` | `external` | `PA4` | `PG0` |
| `gamma` | `external` | `PJ3` | `PG1` |

The A5984 enable input is active LOW. Assign the shared line once: `alpha.en_pin = PJ2!`, `beta.en_pin = nc`, and `gamma.en_pin = nc` in `[actuator]`. The `!` inversion makes logical enable drive the physical line LOW. This shared line enables all connected channels together.

These are pin substitutions, **not a complete runnable motor configuration**. They do not supply steps per millimetre, axis scaling, motion limits, drive current or a qualified pulse timing/receiver interface. Sense resistor/fitted ratings, VREF/current, capacitor values, supply/winding, pulse timing and assembled protection remain unqualified. The one-motor slow diagnostic above does not qualify this three-channel machine allocation.

## Original files and attribution

[Download the editable historical diagram and native-source package](/images/extensions/historical-native-source-package-20261018.zip). It includes the exact selected source files, editable SVGs, layout scripts, the upstream CERN Open Hardware Licence v1.2, retained notices and dated modification descriptions. These illustrations use native source geometry rather than separately imported component artwork. Keep the included source and modification notices with redistributed derivatives.


The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here.

[All extension boards](/extension-boards)
