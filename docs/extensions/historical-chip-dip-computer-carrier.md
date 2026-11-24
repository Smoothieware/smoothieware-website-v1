---
layout: default
title: "C.H.I.P. DIP computer carrier"
permalink: /extensions/historical-chip-dip-computer-carrier
---

# C.H.I.P. DIP computer carrier

This carrier connects a C.H.I.P. Linux computer to the older Smoothieboard2 interface and provides a regulator, serial activity indicators and two grounded pushbuttons. It is a companion-computer carrier, not a GPIO expander that Smoothieware can automatically enumerate.


**UART wiring warning:** Do not use a straight-through Prime UART cable: source contact P4.4 is module TX and P4.5 is module RX despite the host-oriented net labels. The direction-correct partial harness is not yet qualified.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/C.H.I.P-DIP), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

U1 is marked R-78HB5.0-0.5L. Its component name is not a board-wide input/current rating. P1.1 is ground and P1.2 the regulator input. The retained source routes P1.2 to regulator U1.1 (VIN), U1.2 to ground/P1.1, and U1.3 (VOUT) to D1 anode contact 2. Host P4.2 feeds D2 anode contact 2; their cathode contacts 1 join the downstream computer +5 V rail. Verify the actual fitted diode orientation before using this path. The [RECOM regulator datasheet](https://recom-power.com/pdf/Innoline/R-78HB-0.5.pdf) identifies this pin order and a nominal 5 V / 0.5 A regulator, but its 9–72 V input range is not a rating for the complete carrier, input connector or capacitors. Diode drop, actual computer startup voltage/current, host rail budget and reverse-current behavior remain to be qualified; diode combining is not ideal zero-leakage isolation. U2 is DS2431. U3 is the 80-contact computer footprint. The matching original computer symbol identifies SW1’s contact 10 as active-low power-on/reset and SW2’s contact 47 as active-low FEL; each button grounds its assigned input. Their effect still depends on the computer’s running software and power state. D3/D4 are HTX/HRX indicators.

The computer’s UART1 TX, U3.43, reaches host connector P4.4 on `/HTXSRX`; UART1 RX, U3.45, reaches P4.5 on `/HRXSTX`. Treat directions relative to the computer: P4.4 is driven by the computer, and P4.5 receives data for it. Reconcile these roles with the selected Prime UART connector before designing a cable; matching contact numbers alone do not establish a usable harness.

The computer symbol names U3.2 `CHG-IN`, and the carrier connects that contact to its +5 V rail. U3.3 and U3.42 are separately named `VCC-5V` outputs and retain distinct, otherwise unconnected source nets. Their names do not make them interchangeable power inputs. The DS2431 data contact U2.2 connects to computer U3.17, labelled LCD-D2 by the original symbol; no Smoothieware one-wire integration is established by that connection.

### Annotated selected-revision board reference

These annotated sheets retain the selected native contact positions, connector and component functions, and exact source net keys. They use a newly source-derived abstract, rather than recovered original canonical artwork. Use the contact keys to distinguish native net names from a proposed host assignment. Cable orientation, fitted parts and operating limits still require qualification. This is the historical C.H.I.P. DIP carrier. The reset/power abbreviation retains the source ~PWRON function; generic LCD net keys do not allocate a host bus. Rail sequencing and module mating remain unresolved.

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-00-overview" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-00-overview.svg" title="Board overview" alt="Board overview for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-00-mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p1-1.svg" title="P1 1" alt="P1 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p2-1.svg" title="P2 1" alt="P2 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p3-1.svg" title="P3 1" alt="P3 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-1.svg" title="P4 1" alt="P4 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-2.svg" title="P4 2" alt="P4 2 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-3.svg" title="P4 3" alt="P4 3 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-sw1-1.svg" title="Sw1 1" alt="Sw1 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-sw2-1.svg" title="Sw2 1" alt="Sw2 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-u2-1.svg" title="U2 1" alt="U2 1 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-u2-2.svg" title="U2 2" alt="U2 2 for the selected historical chip-dip-computer-carrier source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-00-overview" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/00-overview.svg" title="CHIP carrier reference" alt="CHIP carrier reference" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c1-1.svg" title="C1: source contacts" alt="C1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c2-1.svg" title="C2: source contacts" alt="C2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c5-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c5-1.svg" title="C5: source contacts" alt="C5: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c6-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c6-1.svg" title="C6: source contacts" alt="C6: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d1-1.svg" title="D1: source contacts" alt="D1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d2-1.svg" title="D2: source contacts" alt="D2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d3-1.svg" title="D3: source contacts" alt="D3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d4-1.svg" title="D4: source contacts" alt="D4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p1-1.svg" title="P1: source contacts" alt="P1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p2-1.svg" title="P2: source contacts" alt="P2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p3-1.svg" title="P3: source contacts" alt="P3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-1.svg" title="P4: source contacts" alt="P4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-2.svg" title="P4: source contacts" alt="P4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-3.svg" title="P4: source contacts" alt="P4: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-q1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/q1-1.svg" title="Q1: source contacts" alt="Q1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-q2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/q2-1.svg" title="Q2: source contacts" alt="Q2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-r8-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/r8-1.svg" title="R8: source contacts" alt="R8: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-r9-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/r9-1.svg" title="R9: source contacts" alt="R9: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-1.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-10.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-11.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-12.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-13.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-14.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-15.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-16.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-17.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-2.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-3.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-4.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-5.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-6.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-7.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-8.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-9.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/sw1-1.svg" title="SW1: source contacts" alt="SW1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/sw2-1.svg" title="SW2: source contacts" alt="SW2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u1-1.svg" title="U1: source contacts" alt="U1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u2-1.svg" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u2-2.svg" title="U2: source contacts" alt="U2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-1.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-10.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-11.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-12.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-13.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-14.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-15.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-16.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-17.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-2.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-3.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-4.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-5.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-6.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-7.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-8.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-9.svg" title="U3: source contacts" alt="U3: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c1-0.svg" title="C1.1: native pad" alt="C1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c1-1.svg" title="C1.2: native pad" alt="C1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c2-0.svg" title="C2.1: native pad" alt="C2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c2-1.svg" title="C2.2: native pad" alt="C2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c5-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c5-0.svg" title="C5.1: native pad" alt="C5.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c5-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c5-1.svg" title="C5.2: native pad" alt="C5.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c6-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c6-0.svg" title="C6.1: native pad" alt="C6.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c6-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c6-1.svg" title="C6.2: native pad" alt="C6.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d1-0.svg" title="D1.1: native pad" alt="D1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d1-1.svg" title="D1.2: native pad" alt="D1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d2-0.svg" title="D2.1: native pad" alt="D2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d2-1.svg" title="D2.2: native pad" alt="D2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d3-0.svg" title="D3.1: native pad" alt="D3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d3-1.svg" title="D3.2: native pad" alt="D3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d4-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d4-0.svg" title="D4.1: native pad" alt="D4.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d4-1.svg" title="D4.2: native pad" alt="D4.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p1-0.svg" title="P1.1: native pad" alt="P1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p1-1.svg" title="P1.2: native pad" alt="P1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p2-0.svg" title="P2.1: native pad" alt="P2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p3-0.svg" title="P3.1: native pad" alt="P3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-0.svg" title="P4.11: native pad" alt="P4.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-1.svg" title="P4.11: native pad" alt="P4.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-10.svg" title="P4.9: native pad" alt="P4.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-11.svg" title="P4.10: native pad" alt="P4.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-2.svg" title="P4.1: native pad" alt="P4.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-3.svg" title="P4.2: native pad" alt="P4.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-4.svg" title="P4.3: native pad" alt="P4.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-5.svg" title="P4.4: native pad" alt="P4.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-6.svg" title="P4.5: native pad" alt="P4.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-7.svg" title="P4.6: native pad" alt="P4.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-8.svg" title="P4.7: native pad" alt="P4.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-9.svg" title="P4.8: native pad" alt="P4.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-0.svg" title="Q1.1: native pad" alt="Q1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-1.svg" title="Q1.2: native pad" alt="Q1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-2.svg" title="Q1.3: native pad" alt="Q1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-0.svg" title="Q2.1: native pad" alt="Q2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-1.svg" title="Q2.2: native pad" alt="Q2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-2.svg" title="Q2.3: native pad" alt="Q2.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r8-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r8-0.svg" title="R8.1: native pad" alt="R8.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r8-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r8-1.svg" title="R8.2: native pad" alt="R8.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r9-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r9-0.svg" title="R9.1: native pad" alt="R9.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r9-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r9-1.svg" title="R9.2: native pad" alt="R9.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-0.svg" title="SW1.1: native pad" alt="SW1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-1.svg" title="SW1.1: native pad" alt="SW1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-2.svg" title="SW1.2: native pad" alt="SW1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-3.svg" title="SW1.2: native pad" alt="SW1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-0.svg" title="SW2.1: native pad" alt="SW2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-1.svg" title="SW2.1: native pad" alt="SW2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-2.svg" title="SW2.2: native pad" alt="SW2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-3.svg" title="SW2.2: native pad" alt="SW2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-0.svg" title="U1.1: native pad" alt="U1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-1.svg" title="U1.2: native pad" alt="U1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-2.svg" title="U1.3: native pad" alt="U1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-0.svg" title="U2.1: native pad" alt="U2.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-1.svg" title="U2.2: native pad" alt="U2.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-2.svg" title="U2.3: native pad" alt="U2.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-3.svg" title="U2.4: native pad" alt="U2.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-4.svg" title="U2.5: native pad" alt="U2.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-5.svg" title="U2.6: native pad" alt="U2.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-0.svg" title="U3.1: native pad" alt="U3.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-1.svg" title="U3.41: native pad" alt="U3.41: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-10.svg" title="U3.10: native pad" alt="U3.10: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-11.svg" title="U3.11: native pad" alt="U3.11: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-12.svg" title="U3.12: native pad" alt="U3.12: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-13.svg" title="U3.13: native pad" alt="U3.13: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-14.svg" title="U3.14: native pad" alt="U3.14: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-15.svg" title="U3.15: native pad" alt="U3.15: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-16.svg" title="U3.16: native pad" alt="U3.16: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-17.svg" title="U3.17: native pad" alt="U3.17: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-18" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-18.svg" title="U3.18: native pad" alt="U3.18: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-19" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-19.svg" title="U3.19: native pad" alt="U3.19: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-2.svg" title="U3.2: native pad" alt="U3.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-20" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-20.svg" title="U3.20: native pad" alt="U3.20: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-21" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-21.svg" title="U3.21: native pad" alt="U3.21: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-22" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-22.svg" title="U3.22: native pad" alt="U3.22: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-23" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-23.svg" title="U3.23: native pad" alt="U3.23: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-24" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-24.svg" title="U3.24: native pad" alt="U3.24: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-25" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-25.svg" title="U3.25: native pad" alt="U3.25: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-26" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-26.svg" title="U3.26: native pad" alt="U3.26: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-27" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-27.svg" title="U3.27: native pad" alt="U3.27: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-28" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-28.svg" title="U3.28: native pad" alt="U3.28: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-29" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-29.svg" title="U3.29: native pad" alt="U3.29: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-3.svg" title="U3.3: native pad" alt="U3.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-30" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-30.svg" title="U3.30: native pad" alt="U3.30: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-31" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-31.svg" title="U3.31: native pad" alt="U3.31: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-32" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-32.svg" title="U3.32: native pad" alt="U3.32: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-33" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-33.svg" title="U3.33: native pad" alt="U3.33: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-34" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-34.svg" title="U3.34: native pad" alt="U3.34: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-35" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-35.svg" title="U3.35: native pad" alt="U3.35: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-36" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-36.svg" title="U3.36: native pad" alt="U3.36: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-37" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-37.svg" title="U3.37: native pad" alt="U3.37: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-38" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-38.svg" title="U3.38: native pad" alt="U3.38: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-39" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-39.svg" title="U3.39: native pad" alt="U3.39: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-4.svg" title="U3.4: native pad" alt="U3.4: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-40" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-40.svg" title="U3.40: native pad" alt="U3.40: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-41" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-41.svg" title="U3.42: native pad" alt="U3.42: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-42" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-42.svg" title="U3.43: native pad" alt="U3.43: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-43" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-43.svg" title="U3.44: native pad" alt="U3.44: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-44" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-44.svg" title="U3.45: native pad" alt="U3.45: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-45" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-45.svg" title="U3.46: native pad" alt="U3.46: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-46" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-46.svg" title="U3.47: native pad" alt="U3.47: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-47" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-47.svg" title="U3.48: native pad" alt="U3.48: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-48" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-48.svg" title="U3.49: native pad" alt="U3.49: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-49" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-49.svg" title="U3.50: native pad" alt="U3.50: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-5.svg" title="U3.5: native pad" alt="U3.5: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-50" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-50.svg" title="U3.51: native pad" alt="U3.51: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-51" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-51.svg" title="U3.52: native pad" alt="U3.52: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-52" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-52.svg" title="U3.53: native pad" alt="U3.53: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-53" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-53.svg" title="U3.54: native pad" alt="U3.54: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-54" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-54.svg" title="U3.55: native pad" alt="U3.55: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-55" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-55.svg" title="U3.56: native pad" alt="U3.56: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-56" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-56.svg" title="U3.57: native pad" alt="U3.57: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-57" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-57.svg" title="U3.58: native pad" alt="U3.58: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-58" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-58.svg" title="U3.59: native pad" alt="U3.59: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-59" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-59.svg" title="U3.60: native pad" alt="U3.60: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-6.svg" title="U3.6: native pad" alt="U3.6: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-60" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-60.svg" title="U3.61: native pad" alt="U3.61: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-61" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-61.svg" title="U3.62: native pad" alt="U3.62: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-62" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-62.svg" title="U3.63: native pad" alt="U3.63: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-63" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-63.svg" title="U3.64: native pad" alt="U3.64: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-64" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-64.svg" title="U3.65: native pad" alt="U3.65: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-65" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-65.svg" title="U3.66: native pad" alt="U3.66: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-66" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-66.svg" title="U3.67: native pad" alt="U3.67: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-67" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-67.svg" title="U3.68: native pad" alt="U3.68: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-68" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-68.svg" title="U3.69: native pad" alt="U3.69: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-69" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-69.svg" title="U3.70: native pad" alt="U3.70: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-7.svg" title="U3.7: native pad" alt="U3.7: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-70" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-70.svg" title="U3.71: native pad" alt="U3.71: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-71" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-71.svg" title="U3.72: native pad" alt="U3.72: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-72" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-72.svg" title="U3.73: native pad" alt="U3.73: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-73" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-73.svg" title="U3.74: native pad" alt="U3.74: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-74" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-74.svg" title="U3.75: native pad" alt="U3.75: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-75" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-75.svg" title="U3.76: native pad" alt="U3.76: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-76" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-76.svg" title="U3.77: native pad" alt="U3.77: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-77" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-77.svg" title="U3.78: native pad" alt="U3.78: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-78" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-78.svg" title="U3.79: native pad" alt="U3.79: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-79" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-79.svg" title="U3.80: native pad" alt="U3.80: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-8.svg" title="U3.8: native pad" alt="U3.8: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-80" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-80.svg" title="U3.M: native pad" alt="U3.M: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-9.svg" title="U3.9: native pad" alt="U3.9: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Earlier functional references, contact inventory and original source download</summary>

### Source-derived board reference

These annotated references explain the selected historical circuit using its retained native pad, silk and footprint geometry. They are not populated smoothie-diagrams abstracts and do not establish mating-face orientation or copper continuity. Connector leaders identify parts; they are not electrical wires. The requested populated abstract remains unavailable.

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-01" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-01.svg" title="Connector functions 01" alt="Connector functions 01 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-02" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-02.svg" title="Connector functions 02" alt="Connector functions 02 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-03" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-03.svg" title="Connector functions 03" alt="Connector functions 03 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-04" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-04.svg" title="Connector functions 04" alt="Connector functions 04 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-05" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-05.svg" title="Connector functions 05" alt="Connector functions 05 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-06" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-06.svg" title="Connector functions 06" alt="Connector functions 06 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-07" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-07.svg" title="Connector functions 07" alt="Connector functions 07 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-08" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-08.svg" title="Connector functions 08" alt="Connector functions 08 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-circuit-notes" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/circuit-notes.svg" title="Circuit operation and limits" alt="Circuit operation and limits for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

<details markdown="1">
<summary>Enlarged native contact geometry and numbering</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-01" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-01.svg" title="Source contact geometry 01" alt="Source contact geometry 01 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-02" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-02.svg" title="Source contact geometry 02" alt="Source contact geometry 02 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-03" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-03.svg" title="Source contact geometry 03" alt="Source contact geometry 03 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-04" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-04.svg" title="Source contact geometry 04" alt="Source contact geometry 04 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-05" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-05.svg" title="Source contact geometry 05" alt="Source contact geometry 05 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-06" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-06.svg" title="Source contact geometry 06" alt="Source contact geometry 06 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-07" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-07.svg" title="Source contact geometry 07" alt="Source contact geometry 07 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-08" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-08.svg" title="Source contact geometry 08" alt="Source contact geometry 08 for the retained historical chip-dip-computer-carrier" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

</details>

 The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P1 | CONN_01X02 | 1 → GND; 2 → Net-(C1-Pad1) |
| D1 | MBRA210LT3G | 1 → +5V; 2 → Net-(D1-Pad2) |
| D2 | MBRA210LT3G | 1 → +5V; 2 → Net-(D2-Pad2) |
| D3 | HTX | 1 → Net-(D3-Pad1); 2 → +5V |
| D4 | HRX | 1 → Net-(D4-Pad1); 2 → +5V |
| SW2 | SW_PUSH | 1 → GND; 2 → Net-(SW2-Pad2) |
| SW1 | SW_PUSH | 1 → GND; 2 → Net-(SW1-Pad2) |
| P3 | CONN_01X01 | 1 → Net-(P3-Pad1) |
| P4 | CONN_02X05 | 1 → +3V3; 2 → Net-(D2-Pad2); 3 → Net-(P2-Pad1); 4 → /HTXSRX; 5 → /HRXSTX; 6 → Net-(P3-Pad1); 7 → Net-(P4-Pad7); 8 → Net-(P4-Pad8); 9 → Net-(P4-Pad9); 10 → GND |
| P2 | CONN_01X01 | 1 → Net-(P2-Pad1) |

</div>

</details>



</details>


</details>

## Connect and try it

An appropriate use is a separately powered serial G-code host. The source labels P4.4 HTXSRX and P4.5 HRXSTX; the computer uses U3.43/.45. Establish which device drives each wire before connection. Use a common reference and compatible 3.3 V UART levels; a ten-contact cable is not permission to connect an arbitrary Prime GPIO socket. P4.1 is host 3.3 V, P4.10 ground, while P4.2 is upstream of the host-power diode.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### Historical C.H.I.P. conditional UART console
The historical carrier has no device register protocol. The exact source direction is Prime GB/J33.4 PB9 TX to carrier P4.5 module UART1 RX, and carrier P4.4 module UART1 TX to Prime GB/J33.5 PH14 RX. This requires a crossover, unlike the modern buffered carrier. Qualify the common return, actual module logic levels, supply ownership and physical orientation separately; this is not a straight-through power cable.

Once those interface checks pass, configure the Prime console:

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

Enable UART1 using the actual C.H.I.P. Linux image's supported procedure; remove competing ownership and select the device exposed by that image. No universal Linux device pathname is established. Set the client to 115200/8N1, no hardware flow control. Send `version` followed by LF (`\n`); CRLF also works, CR alone does not dispatch. The reply is a non-motion communication test, not power or hardware acceptance. If matching Linux UART integration is unavailable email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining source questions

Computer revision and Linux image; regulator input range from matching datasheet; UART direction and Prime peripheral mapping; total power budget and diode behavior. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

[Download the editable historical diagram and native-source package](/images/extensions/historical-native-source-package-20261018.zip). It includes the exact selected source files, editable SVGs, layout scripts, the upstream CERN Open Hardware Licence v1.2, retained notices and dated modification descriptions. These illustrations use native source geometry rather than separately imported component artwork. Keep the included source and modification notices with redistributed derivatives.


The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here.

[All extension boards](/extension-boards)
