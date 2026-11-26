---
layout: default
title: "C.H.I.P. DIP computer carrier"
permalink: /extensions/historical-chip-dip-computer-carrier
---

# C.H.I.P. DIP computer carrier

This carrier connects a C.H.I.P. Linux computer to the older Smoothieboard2 interface and provides a regulator, serial activity indicators and two grounded pushbuttons. It is a companion-computer carrier, not a GPIO expander that Smoothieware can automatically enumerate.

**UART wiring warning:** Do not use a straight-through Prime UART cable: source contact P4.4 is module TX and P4.5 is module RX despite the host-oriented net labels.

## Origin and compatibility

This guide describes the [original Smoothieboard2 files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/C.H.I.P-DIP), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Check connector compatibility contact by contact.

## Power, signals and controls

U1 is marked R-78HB5.0-0.5L. Its component name is not a board-wide input/current rating. P1.1 is ground and P1.2 the regulator input. The board routes P1.2 to regulator U1.1 (VIN), U1.2 to ground/P1.1, and U1.3 (VOUT) to D1 anode contact 2. Host P4.2 feeds D2 anode contact 2; their cathode contacts 1 join the downstream computer +5 V rail. Verify the actual fitted diode orientation before using this path. The [RECOM regulator datasheet](https://recom-power.com/pdf/Innoline/R-78HB-0.5.pdf) identifies this pin order and a nominal 5 V / 0.5 A regulator, but its 9–72 V input range is not a rating for the complete carrier, input connector or capacitors. Check diode drop, computer startup voltage and current, host rail budget and reverse current; diode combining is not ideal zero-leakage isolation. U2 is DS2431. U3 is the 80-contact computer footprint. The matching original computer symbol identifies SW1’s contact 10 as active-low power-on/reset and SW2’s contact 47 as active-low FEL; each button grounds its assigned input. Their effect still depends on the computer’s running software and power state. D3/D4 are HTX/HRX indicators.

The computer’s UART1 TX, U3.43, reaches host connector P4.4 on `/HTXSRX`; UART1 RX, U3.45, reaches P4.5 on `/HRXSTX`. Treat directions relative to the computer: P4.4 is driven by the computer, and P4.5 receives data for it. Reconcile these roles with the selected Prime UART connector before designing a cable; matching contact numbers alone do not make a usable harness.

The computer symbol names U3.2 `CHG-IN`, and the carrier connects that contact to its +5 V rail. U3.3 and U3.42 are separately named `VCC-5V` outputs and retain distinct, otherwise unconnected source nets. Their names do not make them interchangeable power inputs. The DS2431 data contact U2.2 connects to computer U3.17, labelled LCD-D2 by the original symbol; that connection does not provide Smoothieware one-wire support.

### Annotated board reference

These annotated sheets show contact positions, connector and component functions, and net keys. Use the contact keys to distinguish net names from a host assignment. Check cable orientation, fitted parts and operating limits. This is the historical C.H.I.P. DIP carrier. The reset/power abbreviation stands for the ~PWRON function; generic LCD net keys do not allocate a host bus. Check rail sequencing and module mating.

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-00-overview" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Connection limits" alt="Connection limits" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p1-1.png" title="P1 1" alt="P1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p2-1.png" title="P2 1" alt="P2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p3-1.png" title="P3 1" alt="P3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-1.png" title="P4 1" alt="P4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-2.png" title="P4 2" alt="P4 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-p4-3.png" title="P4 3" alt="P4 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-sw1-1.png" title="Sw1 1" alt="Sw1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-sw2-1.png" title="Sw2 1" alt="Sw2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-u2-1.png" title="U2 1" alt="U2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-compact-function-reader-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-reader-compact/reader-u2-2.png" title="U2 2" alt="U2 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact keys and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-00-overview" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/00-overview.png" title="CHIP carrier reference" alt="CHIP carrier reference" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c1-1.png" title="C1: contacts" alt="C1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c2-1.png" title="C2: contacts" alt="C2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c5-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c5-1.png" title="C5: contacts" alt="C5: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-c6-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/c6-1.png" title="C6: contacts" alt="C6: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d1-1.png" title="D1: contacts" alt="D1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d2-1.png" title="D2: contacts" alt="D2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d3-1.png" title="D3: contacts" alt="D3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-d4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/d4-1.png" title="D4: contacts" alt="D4: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p1-1.png" title="P1: contacts" alt="P1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p2-1.png" title="P2: contacts" alt="P2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p3-1.png" title="P3: contacts" alt="P3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-1.png" title="P4: contacts" alt="P4: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-2.png" title="P4: contacts" alt="P4: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/p4-3.png" title="P4: contacts" alt="P4: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-q1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/q1-1.png" title="Q1: contacts" alt="Q1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-q2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/q2-1.png" title="Q2: contacts" alt="Q2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-r8-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/r8-1.png" title="R8: contacts" alt="R8: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-r9-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/r9-1.png" title="R9: contacts" alt="R9: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-1.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-10.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-11.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-12.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-13.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-14.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-15.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-16.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-17.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-2.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-3.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-4.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-5.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-6.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-7.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-8.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-source-net-keys-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/source-net-keys-9.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/sw1-1.png" title="SW1: contacts" alt="SW1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/sw2-1.png" title="SW2: contacts" alt="SW2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u1-1.png" title="U1: contacts" alt="U1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u2-1.png" title="U2: contacts" alt="U2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u2-2.png" title="U2: contacts" alt="U2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-1.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-10.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-11.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-12.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-13.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-14.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-15.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-16.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-17.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-2.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-3.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-4.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-5.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-6.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-7.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-8.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-u3-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/u3-9.png" title="U3: contacts" alt="U3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

</details>

<details markdown="1">
<summary>Individual contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c1-0.png" title="C1.1: pad" alt="C1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c1-1.png" title="C1.2: pad" alt="C1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c2-0.png" title="C2.1: pad" alt="C2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c2-1.png" title="C2.2: pad" alt="C2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c5-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c5-0.png" title="C5.1: pad" alt="C5.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c5-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c5-1.png" title="C5.2: pad" alt="C5.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c6-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c6-0.png" title="C6.1: pad" alt="C6.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-c6-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-c6-1.png" title="C6.2: pad" alt="C6.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d1-0.png" title="D1.1: pad" alt="D1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d1-1.png" title="D1.2: pad" alt="D1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d2-0.png" title="D2.1: pad" alt="D2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d2-1.png" title="D2.2: pad" alt="D2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d3-0.png" title="D3.1: pad" alt="D3.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d3-1.png" title="D3.2: pad" alt="D3.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d4-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d4-0.png" title="D4.1: pad" alt="D4.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-d4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-d4-1.png" title="D4.2: pad" alt="D4.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p1-0.png" title="P1.1: pad" alt="P1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p1-1.png" title="P1.2: pad" alt="P1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p2-0.png" title="P2.1: pad" alt="P2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p3-0.png" title="P3.1: pad" alt="P3.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-0.png" title="P4.11: pad" alt="P4.11: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-1.png" title="P4.11: pad" alt="P4.11: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-10.png" title="P4.9: pad" alt="P4.9: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-11.png" title="P4.10: pad" alt="P4.10: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-2.png" title="P4.1: pad" alt="P4.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-3.png" title="P4.2: pad" alt="P4.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-4.png" title="P4.3: pad" alt="P4.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-5.png" title="P4.4: pad" alt="P4.4: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-6.png" title="P4.5: pad" alt="P4.5: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-7.png" title="P4.6: pad" alt="P4.6: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-8.png" title="P4.7: pad" alt="P4.7: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-p4-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-p4-9.png" title="P4.8: pad" alt="P4.8: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-0.png" title="Q1.1: pad" alt="Q1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-1.png" title="Q1.2: pad" alt="Q1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q1-2.png" title="Q1.3: pad" alt="Q1.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-0.png" title="Q2.1: pad" alt="Q2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-1.png" title="Q2.2: pad" alt="Q2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-q2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-q2-2.png" title="Q2.3: pad" alt="Q2.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r8-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r8-0.png" title="R8.1: pad" alt="R8.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r8-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r8-1.png" title="R8.2: pad" alt="R8.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r9-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r9-0.png" title="R9.1: pad" alt="R9.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-r9-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-r9-1.png" title="R9.2: pad" alt="R9.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-0.png" title="SW1.1: pad" alt="SW1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-1.png" title="SW1.1: pad" alt="SW1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-2.png" title="SW1.2: pad" alt="SW1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw1-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw1-3.png" title="SW1.2: pad" alt="SW1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-0.png" title="SW2.1: pad" alt="SW2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-1.png" title="SW2.1: pad" alt="SW2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-2.png" title="SW2.2: pad" alt="SW2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-sw2-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-sw2-3.png" title="SW2.2: pad" alt="SW2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-0.png" title="U1.1: pad" alt="U1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-1.png" title="U1.2: pad" alt="U1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u1-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u1-2.png" title="U1.3: pad" alt="U1.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-0.png" title="U2.1: pad" alt="U2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-1.png" title="U2.2: pad" alt="U2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-2.png" title="U2.3: pad" alt="U2.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-3.png" title="U2.4: pad" alt="U2.4: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-4.png" title="U2.5: pad" alt="U2.5: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u2-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u2-5.png" title="U2.6: pad" alt="U2.6: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-0" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-0.png" title="U3.1: pad" alt="U3.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-1" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-1.png" title="U3.41: pad" alt="U3.41: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-10" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-10.png" title="U3.10: pad" alt="U3.10: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-11" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-11.png" title="U3.11: pad" alt="U3.11: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-12" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-12.png" title="U3.12: pad" alt="U3.12: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-13" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-13.png" title="U3.13: pad" alt="U3.13: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-14" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-14.png" title="U3.14: pad" alt="U3.14: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-15" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-15.png" title="U3.15: pad" alt="U3.15: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-16" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-16.png" title="U3.16: pad" alt="U3.16: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-17" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-17.png" title="U3.17: pad" alt="U3.17: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-18" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-18.png" title="U3.18: pad" alt="U3.18: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-19" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-19.png" title="U3.19: pad" alt="U3.19: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-2" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-2.png" title="U3.2: pad" alt="U3.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-20" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-20.png" title="U3.20: pad" alt="U3.20: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-21" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-21.png" title="U3.21: pad" alt="U3.21: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-22" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-22.png" title="U3.22: pad" alt="U3.22: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-23" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-23.png" title="U3.23: pad" alt="U3.23: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-24" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-24.png" title="U3.24: pad" alt="U3.24: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-25" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-25.png" title="U3.25: pad" alt="U3.25: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-26" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-26.png" title="U3.26: pad" alt="U3.26: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-27" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-27.png" title="U3.27: pad" alt="U3.27: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-28" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-28.png" title="U3.28: pad" alt="U3.28: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-29" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-29.png" title="U3.29: pad" alt="U3.29: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-3" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-3.png" title="U3.3: pad" alt="U3.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-30" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-30.png" title="U3.30: pad" alt="U3.30: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-31" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-31.png" title="U3.31: pad" alt="U3.31: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-32" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-32.png" title="U3.32: pad" alt="U3.32: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-33" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-33.png" title="U3.33: pad" alt="U3.33: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-34" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-34.png" title="U3.34: pad" alt="U3.34: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-35" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-35.png" title="U3.35: pad" alt="U3.35: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-36" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-36.png" title="U3.36: pad" alt="U3.36: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-37" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-37.png" title="U3.37: pad" alt="U3.37: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-38" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-38.png" title="U3.38: pad" alt="U3.38: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-39" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-39.png" title="U3.39: pad" alt="U3.39: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-4" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-4.png" title="U3.4: pad" alt="U3.4: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-40" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-40.png" title="U3.40: pad" alt="U3.40: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-41" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-41.png" title="U3.42: pad" alt="U3.42: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-42" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-42.png" title="U3.43: pad" alt="U3.43: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-43" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-43.png" title="U3.44: pad" alt="U3.44: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-44" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-44.png" title="U3.45: pad" alt="U3.45: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-45" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-45.png" title="U3.46: pad" alt="U3.46: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-46" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-46.png" title="U3.47: pad" alt="U3.47: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-47" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-47.png" title="U3.48: pad" alt="U3.48: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-48" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-48.png" title="U3.49: pad" alt="U3.49: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-49" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-49.png" title="U3.50: pad" alt="U3.50: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-5" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-5.png" title="U3.5: pad" alt="U3.5: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-50" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-50.png" title="U3.51: pad" alt="U3.51: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-51" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-51.png" title="U3.52: pad" alt="U3.52: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-52" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-52.png" title="U3.53: pad" alt="U3.53: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-53" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-53.png" title="U3.54: pad" alt="U3.54: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-54" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-54.png" title="U3.55: pad" alt="U3.55: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-55" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-55.png" title="U3.56: pad" alt="U3.56: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-56" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-56.png" title="U3.57: pad" alt="U3.57: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-57" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-57.png" title="U3.58: pad" alt="U3.58: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-58" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-58.png" title="U3.59: pad" alt="U3.59: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-59" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-59.png" title="U3.60: pad" alt="U3.60: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-6" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-6.png" title="U3.6: pad" alt="U3.6: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-60" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-60.png" title="U3.61: pad" alt="U3.61: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-61" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-61.png" title="U3.62: pad" alt="U3.62: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-62" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-62.png" title="U3.63: pad" alt="U3.63: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-63" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-63.png" title="U3.64: pad" alt="U3.64: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-64" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-64.png" title="U3.65: pad" alt="U3.65: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-65" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-65.png" title="U3.66: pad" alt="U3.66: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-66" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-66.png" title="U3.67: pad" alt="U3.67: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-67" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-67.png" title="U3.68: pad" alt="U3.68: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-68" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-68.png" title="U3.69: pad" alt="U3.69: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-69" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-69.png" title="U3.70: pad" alt="U3.70: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-7" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-7.png" title="U3.7: pad" alt="U3.7: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-70" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-70.png" title="U3.71: pad" alt="U3.71: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-71" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-71.png" title="U3.72: pad" alt="U3.72: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-72" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-72.png" title="U3.73: pad" alt="U3.73: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-73" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-73.png" title="U3.74: pad" alt="U3.74: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-74" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-74.png" title="U3.75: pad" alt="U3.75: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-75" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-75.png" title="U3.76: pad" alt="U3.76: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-76" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-76.png" title="U3.77: pad" alt="U3.77: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-77" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-77.png" title="U3.78: pad" alt="U3.78: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-78" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-78.png" title="U3.79: pad" alt="U3.79: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-79" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-79.png" title="U3.80: pad" alt="U3.80: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-8" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-8.png" title="U3.8: pad" alt="U3.8: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-80" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-80.png" title="U3.M: pad" alt="U3.M: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-annotated-contact-u3-9" src="/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/contact-u3-9.png" title="U3.9: pad" alt="U3.9: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-chip-dip-computer-carrier/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Functional references, contact inventory and source download</summary>

### Board reference

These annotated references explain the circuit using the pad, silk and footprint geometry. They do not show mating-face orientation or copper continuity. Connector leaders identify parts; they are not electrical wires.

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-01" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-01.png" title="Connector functions 01" alt="Connector functions 01" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-02" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-02.png" title="Connector functions 02" alt="Connector functions 02" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-03" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-03.png" title="Connector functions 03" alt="Connector functions 03" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-04" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-04.png" title="Connector functions 04" alt="Connector functions 04" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-05" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-05.png" title="Connector functions 05" alt="Connector functions 05" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-06" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-06.png" title="Connector functions 06" alt="Connector functions 06" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-07" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-07.png" title="Connector functions 07" alt="Connector functions 07" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-connector-reference-08" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/connector-reference-08.png" title="Connector functions 08" alt="Connector functions 08" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-circuit-notes" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/circuit-notes.png" title="Circuit operation and limits" alt="Circuit operation and limits" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

<details markdown="1">
<summary>Enlarged contact geometry and numbering</summary>

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-01" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-01.png" title="Contact geometry 01" alt="Contact geometry 01" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-02" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-02.png" title="Contact geometry 02" alt="Contact geometry 02" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-03" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-03.png" title="Contact geometry 03" alt="Contact geometry 03" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-04" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-04.png" title="Contact geometry 04" alt="Contact geometry 04" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-05" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-05.png" title="Contact geometry 05" alt="Contact geometry 05" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-06" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-06.png" title="Contact geometry 06" alt="Contact geometry 06" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-07" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-07.png" title="Contact geometry 07" alt="Contact geometry 07" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-chip-dip-computer-carrier-native-detail-08" src="/images/extensions/historical-chip-dip-computer-carrier/guides/retained-52ab340/native-detail-08.png" title="Contact geometry 08" alt="Contact geometry 08" caption="Geometric reference with numbered contacts. Annotation leaders are not wires. Check cable orientation and electrical limits." width=1000 %}

</details>

 The contact inventory below records schematic connectivity; check physical cable orientation and board continuity.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
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

An appropriate use is a separately powered serial G-code host. The board labels P4.4 HTXSRX and P4.5 HRXSTX; the computer uses U3.43/.45. Check which device drives each wire before connection. Use a common reference and compatible 3.3 V UART levels; a ten-contact cable is not permission to connect an arbitrary Prime GPIO socket. P4.1 is host 3.3 V, P4.10 ground, while P4.2 is upstream of the host-power diode.

Prime GF/J37 contacts: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### C.H.I.P. UART console
The carrier has no device register protocol. The signal direction is Prime GB/J33.4 PB9 TX to carrier P4.5 module UART1 RX, and carrier P4.4 module UART1 TX to Prime GB/J33.5 PH14 RX. This requires a crossover, unlike the modern buffered carrier. Check the common return, actual module logic levels, supply ownership and physical orientation separately; this is not a straight-through power cable.

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

Enable UART1 using your C.H.I.P. Linux image's supported procedure; remove competing ownership and select the device exposed by that image. There is no universal Linux device pathname. Set the client to 115200/8N1, no hardware flow control. Send `version` followed by LF (`\n`); CRLF also works, CR alone does not dispatch. The reply is a non-motion communication test, not a power or hardware test.

These instructions follow SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Before powering

Check your computer model and Linux image, the regulator input range in its datasheet, UART direction and Prime peripheral mapping, total power budget and diode behaviour.

## Original files and attribution

[Download the editable historical diagram and source package](/images/extensions/historical-native-source-package-20261018.zip). It includes the source files, editable SVGs, layout scripts, the upstream CERN Open Hardware Licence v1.2, notices and dated modification descriptions. These illustrations use the source geometry rather than separately imported component artwork. Keep the included source and modification notices with redistributed derivatives.

The linked original source folder contains the CAD, images, fabrication output and any author notes. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
