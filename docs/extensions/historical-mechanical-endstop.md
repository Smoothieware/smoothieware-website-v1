---
layout: default
title: "Mechanical endstop"
permalink: /extensions/historical-mechanical-endstop
---

# Mechanical endstop

This is a powered three-wire mechanical limit-switch module with an indicator and signal filtering. The microswitch switches the signal between supply and ground. It is not the same circuit as a passive normally-closed two-wire switch.

Start with the [conditional three-wire evaluation](#connect-and-try-it) and the [non-motion input diagnostic](#read-the-input-before-enabling-homing). This powered switch module needs signal-voltage and contact-load checks before it can be used for homing; its complete wiring diagram is still unfinished.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/MechEndstop), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P1.1 is VCC, .2 ground and .3 /~SIG. SW1.1 is signal, .2 ground, .3 VCC; C1 is 100 nF from signal to ground. R2 is a 10 kΩ external pullup from VCC to signal; R1 is a 1 kΩ LED resistor. A firmware pulldown does not remove this external pullup. D1 and its resistor provide indication. Historical Readme.use explicitly requests pulldown and active-low operation. The switch’s physical NO/NC assignments and installed actuation state still need checking; do not infer cable-break protection.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These newly source-derived drawings retain the selected native outline, footprints, pads and graphics with function callouts. They are not a recovered canonical abstract or a verified mating view. The source switch connects COM to `~SIG`, NO to ground and NC to `VCC`; these are selected-source contact roles, not a guarantee about a replacement switch. No nominal VCC rating, Prime host allocation, fitted-switch compatibility or powered operation is established. Match the complete board overview and contact sheets before interpreting the switch.

### Board reference

These function-labelled views retain the selected native source geometry. They are newly source-derived references, not a verified mating view.

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-00-overview" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-c1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-c1-1.png" title="C1 1" alt="C1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-d1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-d1-1.png" title="D1 1" alt="D1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-m1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-m2-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-p1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-r1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-r1-1.png" title="R1 1" alt="R1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-r2-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-r2-1.png" title="R2 1" alt="R2 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-compact-function-reader-sw1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-reader/reader-sw1-1.png" title="Sw1 1" alt="Sw1 1 for the selected historical mechanical-endstop source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-00-overview" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/00-overview.png" title="Mechanical endstop source reference — 00 overview" alt="Mechanical endstop source reference — 00 overview" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-c1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/c1.png" title="Mechanical endstop source reference — c1" alt="Mechanical endstop source reference — c1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-d1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/d1.png" title="Mechanical endstop source reference — d1" alt="Mechanical endstop source reference — d1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-logo1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/logo1.png" title="Mechanical endstop source reference — logo1" alt="Mechanical endstop source reference — logo1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-m1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/m1.png" title="Mechanical endstop source reference — m1" alt="Mechanical endstop source reference — m1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-m2" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/m2.png" title="Mechanical endstop source reference — m2" alt="Mechanical endstop source reference — m2" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-p1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/p1.png" title="Mechanical endstop source reference — p1" alt="Mechanical endstop source reference — p1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-r1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/r1.png" title="Mechanical endstop source reference — r1" alt="Mechanical endstop source reference — r1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-r2" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/r2.png" title="Mechanical endstop source reference — r2" alt="Mechanical endstop source reference — r2" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-sw1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/sw1.png" title="Mechanical endstop source reference — sw1" alt="Mechanical endstop source reference — sw1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-c1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-c1-0.png" title="Mechanical endstop source reference — contact c1 0" alt="Mechanical endstop source reference — contact c1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-c1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-c1-1.png" title="Mechanical endstop source reference — contact c1 1" alt="Mechanical endstop source reference — contact c1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-d1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-d1-0.png" title="Mechanical endstop source reference — contact d1 0" alt="Mechanical endstop source reference — contact d1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-d1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-d1-1.png" title="Mechanical endstop source reference — contact d1 1" alt="Mechanical endstop source reference — contact d1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-m1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-m1-0.png" title="Mechanical endstop source reference — contact m1 0" alt="Mechanical endstop source reference — contact m1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-m2-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-m2-0.png" title="Mechanical endstop source reference — contact m2 0" alt="Mechanical endstop source reference — contact m2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-p1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-p1-0.png" title="Mechanical endstop source reference — contact p1 0" alt="Mechanical endstop source reference — contact p1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-p1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-p1-1.png" title="Mechanical endstop source reference — contact p1 1" alt="Mechanical endstop source reference — contact p1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-p1-2" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-p1-2.png" title="Mechanical endstop source reference — contact p1 2" alt="Mechanical endstop source reference — contact p1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-r1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-r1-0.png" title="Mechanical endstop source reference — contact r1 0" alt="Mechanical endstop source reference — contact r1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-r1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-r1-1.png" title="Mechanical endstop source reference — contact r1 1" alt="Mechanical endstop source reference — contact r1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-r2-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-r2-0.png" title="Mechanical endstop source reference — contact r2 0" alt="Mechanical endstop source reference — contact r2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-r2-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-r2-1.png" title="Mechanical endstop source reference — contact r2 1" alt="Mechanical endstop source reference — contact r2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-sw1-0" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-sw1-0.png" title="Mechanical endstop source reference — contact sw1 0" alt="Mechanical endstop source reference — contact sw1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-sw1-1" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-sw1-1.png" title="Mechanical endstop source reference — contact sw1 1" alt="Mechanical endstop source reference — contact sw1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-sw1-2" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-sw1-2.png" title="Mechanical endstop source reference — contact sw1 2" alt="Mechanical endstop source reference — contact sw1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-sw1-3" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-sw1-3.png" title="Mechanical endstop source reference — contact sw1 3" alt="Mechanical endstop source reference — contact sw1 3" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-source-derived-contact-sw1-4" src="/images/extensions/historical-mechanical-endstop/guides/source-derived-annotated/contact-sw1-4.png" title="Mechanical endstop source reference — contact sw1 4" alt="Mechanical endstop source reference — contact sw1 4" caption="Selected historical PCB; new source-derived front-coordinate reference. VCC rating, host mapping, switch mating and powered behavior remain unverified." width=420 %}


</details>

<details markdown="1">
<summary>Retained earlier functional references</summary>

### Annotated connector and component reference
{: #functional-contact-function-sheets style="scroll-margin-top: 6rem;"}

These sheets combine source-derived board artwork, native-coordinate contact keys and function pills. Read the external interfaces and controls first; circuit components and mounting details are available below. The canonical abstract, physical mating and actual viewer checks remain pending.

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-d1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/d1-functions-01.png" title="D1 — contact functions" alt="D1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-sw1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/sw1-functions-01.png" title="SW1 — contact functions" alt="SW1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-p1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/p1-functions-01.png" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-c1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/c1-functions-01.png" title="C1 — contact functions" alt="C1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-m1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-m2-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-r1-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/r1-functions-01.png" title="R1 — contact functions" alt="R1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-functional-r2-functions-01" src="/images/extensions/historical-mechanical-endstop/guides/functional-reference/r2-functions-01.png" title="R2 — contact functions" alt="R2 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

</details>

[Matching native source, licence and drawing notice](/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/native-source-and-notices.zip). Source-derived additions dated 2026-10-18; retain the included source licence and notices with derivatives.

<details>
<summary>Original pad locators and source comparison</summary>


</details>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-overview" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-overview.png" title="Legacy mechanical endstop" alt="Legacy mechanical endstop — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-p1-1-3" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-p1-1-3.png" title="P1 · Host signals" alt="P1 · Host signals — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-sw1-1-3" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-sw1-1-3.png" title="SW1 · Switch contacts" alt="SW1 · Switch contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-boundary" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-signal" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-signal.png" title="Signal pull-up / filtering" alt="Signal pull-up / filtering — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-indicator" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-indicator.png" title="Signal indication" alt="Signal indication — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-mechanical-endstop-reader-compact-mounts" src="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. Retain the included source licence and notices with derivatives.



</details>

The source-derived annotated sheets above supplement the retained pad locators. The revision-matched canonical abstract remains pending; a modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P1 | CONN_01X03 | 1 → VCC; 2 → GND; 3 → /~SIG |
| D1 | LED | 1 → /~SIG; 2 → Net-(D1-Pad2) |
| SW1 | Microswitch | 1 → /~SIG; 2 → GND; 3 → VCC |
| R1 | 1k | 1 → VCC; 2 → Net-(D1-Pad2) |
| R2 | 10k | 1 → VCC; 2 → /~SIG |


</details>

## Connect and try it

**Contact-load qualification is missing.** The retained bill of materials names an Omron **D2F-L-A** switch; do not assume it is the D2F-01 microload variant or that its contacts will operate reliably with this board’s small signal current. Confirm the actual fitted switch’s minimum applicable load and low-voltage suitability against its matching manufacturer data before using this board as an endstop. The 10 kΩ pull-up and 1 kΩ LED branch alone do not establish reliable switching.

The source-numbered evaluation proposal is Prime GF/J37.1 limited 3.3 V → P1.1, GF/J37.10 ground → P1.2 and P1.3 → GF/J37.3 PB1. This is **not a qualified powered recipe**: switch contact behaviour, controller thresholds, rail budget and physical cable orientation remain unresolved. Keep machine loads disabled; verify both switch states and signal voltage independently before any homing use. Do not substitute 5 V without proving host-input compatibility.

### Three-wire evaluation checklist

The following table records the source-numbered proposal. It does not resolve the switch's minimum contact load, actual supply/current budget or host input compatibility.

| Function | Proposed Prime contact | Historical module contact |
|---|---|---|
| Limited 3.3 V supply | J37.1 | P1.1 / VCC |
| Ground return | J37.10 | P1.2 / ground |
| Switched input | J37.3 / PB1 | P1.3 / ~SIG |

With power off, identify all three contacts from the selected source and fitted connector. Do not wire this module as a passive two-contact switch, substitute 5 V, or assume that the onboard indicator establishes a safe signal voltage. Resolve the fitted D2F-L-A switch's applicable contact load and the input-voltage checks before applying the proposed supply.

Once those electrical checks permit an evaluation, keep machine loads disabled and use the non-homing diagnostic below. Record the `M119` logical state with the switch released, actuated and the cable disconnected. The selected `!` inversion changes the reported logic; it does not change the switch wiring, remove the board's 10 kΩ pull-up or establish cable-break protection. A state that does not change calls for a wiring/signal check before any homing configuration is enabled.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### Read the input before enabling homing

Once the conditional wiring, signal voltage and PB1 ownership are verified, this **source-checked diagnostic candidate** registers the input without assigning a homing move or enabling limit-triggered halts. Keep machine loads disabled during this initial check. Merge it with the existing configuration; never register PB1 twice.

```ini
[endstops]
extension_test.enable = true
extension_test.pin = PB1!v
extension_test.axis = X
extension_test.homing_direction = none
extension_test.limit_enable = false
```

Send `M119` with the switch released and actuated. For this non-homing entry, inspect the `pins-` portion: `(X)` identifies its axis and the `PB1…:0` or `PB1…:1` suffix reports the logical state after pin inversion. It is not an `X_min` homing entry. Check the disconnected-cable state too; this does not prove cable-break protection. Replace this diagnostic entry with the complete machine-specific endstop configuration only after confirming polarity, direction, travel and rates.

The [pinned Endstops parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L130-L200) supports `homing_direction = none` and `limit_enable = false`. Its [M119 handler](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L1013-L1030) prints every registered input using the [Pin state formatter](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L289-L309). These are source behavior claims, not a tested controller session.


V2’s pin parser supports v for pulldown and ! for inversion. The historical intended input expression is therefore PB1!v for the proposed GF.3 connection. It is not a complete homing configuration: axis, direction and endstop module assignment must be selected for the machine, then tested with motors disabled.

The diagnostic parser and state-reporting claims above are bound to upstream V2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Source inspection is not a target build, flash, boot or hardware result. Where a required driver is absent, email **wolf.arthur@gamil.com**; unresolved wiring or untested support is not automatically evidence of absence.

## Remaining source questions

Actual microswitch common/NO/NC footprint correspondence; voltage limits, input indication and state reporting; final machine-specific endstop configuration. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
