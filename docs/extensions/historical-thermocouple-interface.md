---
layout: default
title: "K-type thermocouple interface"
permalink: /extensions/historical-thermocouple-interface
---

# K-type thermocouple interface

A MAX31855KASA reads a K-type thermocouple and exposes temperature/fault data over a read-only SPI-style interface. It is for thermocouples, not thermistors or PT100 probes. A practical use is monitoring a K-type machine temperature before deciding whether to control a heater.

## Compatibility

This guide covers the [original Smoothieboard2 board files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Thermocouple). That host generation predates Smoothieboard V2 Prime, so check connector compatibility contact by contact.

## Power, signals and controls

Use a K-type thermocouple with **P1.1 = T−** and **P1.2 = T+**. The MAX31855 symbol identifies U1.2 as T− and U1.3 as T+; the netlist connects them to P1.1 and P1.2 respectively. C2 bridges these two signal nets as a differential filter; it is not a series connection. Do not infer polarity from cable colour without the probe manufacturer's colour standard.

P2.1 supplies +3.3 V and P2.10 is ground. P2.8 carries the U1.7 serial output toward the host. Clock enters P2.9 through D2 and chip select enters P2.6 through D1. In both 1N4148 symbols, contact 1 is the cathode on the host side; contact 2 is the anode on the MAX31855 side. R2 and R1 pull the chip-side clock and chip-select nets up to +3.3 V. These are diode/pull-up paths, not copper-equivalent direct wires: their low-level voltage and rise-time margin at the driver's fixed clock need checking. Do not power the board from 5 V.

The [MAX31855 data sheet](https://www.analog.com/media/en/technical-documentation/data-sheets/max31855.pdf) specifies a 3.0–3.6 V operating supply, a logic-low maximum of 0.8 V and logic-high minimum of 2.1 V. Its interface permits at most 200 ns clock rise/fall time and requires at least 100 ns high/low pulse widths. These are **chip requirements**; check that your assembled board meets them. Check the voltage at the chip-side diode anodes and the pull-up rise time, including board/cable capacitance; a 1 MHz host clock alone does not establish compliance.

### Annotated connector and component reference

These drawings show the board outline, footprints, pads and graphics with function callouts. They are not a cable mating view. The MAX31855 pin map identifies U1.5 as SCK and U1.6 as active-low CS: P2.9 reaches U1.5 through D2, and P2.6 reaches U1.6 through D1. 

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-00-overview" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-d1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-d1-1.png" title="D1 1" alt="D1 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-d2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-d2-1.png" title="D2 1" alt="D2 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-m1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-m1-1.png" title="M1 1" alt="M1 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-m2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-m2-1.png" title="M2 1" alt="M2 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-m3-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-m3-1.png" title="M3 1" alt="M3 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-m4-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-m4-1.png" title="M4 1" alt="M4 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-p1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-p1-1.png" title="P1 1" alt="P1 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-p2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-p2-1.png" title="P2 1" alt="P2 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-p2-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-p2-2.png" title="P2 2" alt="P2 2 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-p2-3" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-p2-3.png" title="P2 3" alt="P2 3 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-r1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-r1-1.png" title="R1 1" alt="R1 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-r2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-r2-1.png" title="R2 1" alt="R2 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-u1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-u1-1.png" title="U1 1" alt="U1 1 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-compact-function-reader-u1-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-reader-compact/reader-u1-2.png" title="U1 2" alt="U1 2 for the thermocouple interface" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact details and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-00-overview" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/00-overview.png" title="thermocouple interface reference — 00 overview" alt="thermocouple interface reference — 00 overview" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-c1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/c1-1.png" title="thermocouple interface reference — c1 1" alt="thermocouple interface reference — c1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-c2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/c2-1.png" title="thermocouple interface reference — c2 1" alt="thermocouple interface reference — c2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-d1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/d1-1.png" title="thermocouple interface reference — d1 1" alt="thermocouple interface reference — d1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-d2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/d2-1.png" title="thermocouple interface reference — d2 1" alt="thermocouple interface reference — d2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-m1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/m1-1.png" title="thermocouple interface reference — m1 1" alt="thermocouple interface reference — m1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-m2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/m2-1.png" title="thermocouple interface reference — m2 1" alt="thermocouple interface reference — m2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-m3-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/m3-1.png" title="thermocouple interface reference — m3 1" alt="thermocouple interface reference — m3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-m4-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/m4-1.png" title="thermocouple interface reference — m4 1" alt="thermocouple interface reference — m4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-p1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/p1-1.png" title="thermocouple interface reference — p1 1" alt="thermocouple interface reference — p1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-p2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/p2-1.png" title="thermocouple interface reference — p2 1" alt="thermocouple interface reference — p2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-p2-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/p2-2.png" title="thermocouple interface reference — p2 2" alt="thermocouple interface reference — p2 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-p2-3" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/p2-3.png" title="thermocouple interface reference — p2 3" alt="thermocouple interface reference — p2 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-r1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/r1-1.png" title="thermocouple interface reference — r1 1" alt="thermocouple interface reference — r1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-r2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/r2-1.png" title="thermocouple interface reference — r2 1" alt="thermocouple interface reference — r2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-source-net-keys-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/source-net-keys-1.png" title="thermocouple interface reference — net keys 1" alt="thermocouple interface reference — net keys 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-source-net-keys-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/source-net-keys-2.png" title="thermocouple interface reference — net keys 2" alt="thermocouple interface reference — net keys 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-u1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/u1-1.png" title="thermocouple interface reference — u1 1" alt="thermocouple interface reference — u1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-u1-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/u1-2.png" title="thermocouple interface reference — u1 2" alt="thermocouple interface reference — u1 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

<details markdown="1">
<summary>Individual contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-c1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-c1-0.png" title="thermocouple interface reference — contact c1 0" alt="thermocouple interface reference — contact c1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-c1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-c1-1.png" title="thermocouple interface reference — contact c1 1" alt="thermocouple interface reference — contact c1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-c2-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-c2-0.png" title="thermocouple interface reference — contact c2 0" alt="thermocouple interface reference — contact c2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-c2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-c2-1.png" title="thermocouple interface reference — contact c2 1" alt="thermocouple interface reference — contact c2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-d1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-d1-0.png" title="thermocouple interface reference — contact d1 0" alt="thermocouple interface reference — contact d1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-d1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-d1-1.png" title="thermocouple interface reference — contact d1 1" alt="thermocouple interface reference — contact d1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-d2-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-d2-0.png" title="thermocouple interface reference — contact d2 0" alt="thermocouple interface reference — contact d2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-d2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-d2-1.png" title="thermocouple interface reference — contact d2 1" alt="thermocouple interface reference — contact d2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-m1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-m1-0.png" title="thermocouple interface reference — contact m1 0" alt="thermocouple interface reference — contact m1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-m2-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-m2-0.png" title="thermocouple interface reference — contact m2 0" alt="thermocouple interface reference — contact m2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-m3-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-m3-0.png" title="thermocouple interface reference — contact m3 0" alt="thermocouple interface reference — contact m3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-m4-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-m4-0.png" title="thermocouple interface reference — contact m4 0" alt="thermocouple interface reference — contact m4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p1-0.png" title="thermocouple interface reference — contact p1 0" alt="thermocouple interface reference — contact p1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p1-1.png" title="thermocouple interface reference — contact p1 1" alt="thermocouple interface reference — contact p1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-0.png" title="thermocouple interface reference — contact p2 0" alt="thermocouple interface reference — contact p2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-1.png" title="thermocouple interface reference — contact p2 1" alt="thermocouple interface reference — contact p2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-10" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-10.png" title="thermocouple interface reference — contact p2 10" alt="thermocouple interface reference — contact p2 10" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-11" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-11.png" title="thermocouple interface reference — contact p2 11" alt="thermocouple interface reference — contact p2 11" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-2.png" title="thermocouple interface reference — contact p2 2" alt="thermocouple interface reference — contact p2 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-3" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-3.png" title="thermocouple interface reference — contact p2 3" alt="thermocouple interface reference — contact p2 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-4" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-4.png" title="thermocouple interface reference — contact p2 4" alt="thermocouple interface reference — contact p2 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-5" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-5.png" title="thermocouple interface reference — contact p2 5" alt="thermocouple interface reference — contact p2 5" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-6" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-6.png" title="thermocouple interface reference — contact p2 6" alt="thermocouple interface reference — contact p2 6" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-7" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-7.png" title="thermocouple interface reference — contact p2 7" alt="thermocouple interface reference — contact p2 7" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-8" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-8.png" title="thermocouple interface reference — contact p2 8" alt="thermocouple interface reference — contact p2 8" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-p2-9" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-p2-9.png" title="thermocouple interface reference — contact p2 9" alt="thermocouple interface reference — contact p2 9" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-r1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-r1-0.png" title="thermocouple interface reference — contact r1 0" alt="thermocouple interface reference — contact r1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-r1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-r1-1.png" title="thermocouple interface reference — contact r1 1" alt="thermocouple interface reference — contact r1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-r2-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-r2-0.png" title="thermocouple interface reference — contact r2 0" alt="thermocouple interface reference — contact r2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-r2-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-r2-1.png" title="thermocouple interface reference — contact r2 1" alt="thermocouple interface reference — contact r2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-0" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-0.png" title="thermocouple interface reference — contact u1 0" alt="thermocouple interface reference — contact u1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-1" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-1.png" title="thermocouple interface reference — contact u1 1" alt="thermocouple interface reference — contact u1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-2" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-2.png" title="thermocouple interface reference — contact u1 2" alt="thermocouple interface reference — contact u1 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-3" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-3.png" title="thermocouple interface reference — contact u1 3" alt="thermocouple interface reference — contact u1 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-4" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-4.png" title="thermocouple interface reference — contact u1 4" alt="thermocouple interface reference — contact u1 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-5" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-5.png" title="thermocouple interface reference — contact u1 5" alt="thermocouple interface reference — contact u1 5" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-6" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-6.png" title="thermocouple interface reference — contact u1 6" alt="thermocouple interface reference — contact u1 6" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-source-derived-contact-u1-7" src="/images/extensions/historical-thermocouple-interface/guides/source-derived-annotated/contact-u1-7.png" title="thermocouple interface reference — contact u1 7" alt="thermocouple interface reference — contact u1 7" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

</details>

<details markdown="1">
<summary>Functional references</summary>

### Board functions and contact positions

These sheets identify the board components and explain their contacts. Start with the host and probe connectors; expand the circuit details for fitted links, filtering and mounting points. Contact markers do not establish cable orientation or physical connector cavities.

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-p2-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/p2-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-p2-functions-02" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/p2-functions-02.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-p2-functions-03" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/p2-functions-03.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-d1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/d1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-d2-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/d2-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-p1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/p1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-u1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/u1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-u1-functions-02" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/u1-functions-02.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-c1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/c1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-r1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/r1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-r2-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/r2-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-c2-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/c2-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-m1-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/m1-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-m2-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/m2-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-m3-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/m3-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-function-m4-functions-01" src="/images/extensions/historical-thermocouple-interface/guides/functional-reference/m4-functions-01.png" title="thermocouple-interface — Component side; back parts excluded" alt="thermocouple-interface — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts; this is not a cable mating view." width=420 %}

</details>

### Contact reference

These locators show the pad positions and board outline, without component artwork. Use the focused sheets together.

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-overview" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-overview.png" title="Legacy thermocouple" alt="Legacy thermocouple — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-p1-1-2" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-p1-1-2.png" title="P1 · Thermocouple" alt="P1 · Thermocouple — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-p2-1-5" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-p2-1-5.png" title="P2 · Power and serial" alt="P2 · Power and serial — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-p2-6-10" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-p2-6-10.png" title="P2 · Power and serial" alt="P2 · Power and serial — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-converter" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-converter.png" title="MAX31855 sensor" alt="MAX31855 sensor — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-sensor" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-sensor.png" title="Thermocouple input" alt="Thermocouple input — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-select" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-select.png" title="Select diode path" alt="Select diode path — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-clock" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-clock.png" title="Clock diode path" alt="Clock diode path — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-mechanical" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-mechanical.png" title="Unnumbered connector pads" alt="Unnumbered connector pads — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-reader-compact-mounts" src="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

[Download the board source, upstream licence and drawing notice](/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below lists the board's connections; it does not show physical cable orientation. Host contacts 2–5 and 7 are unused: leave them unconnected.

| Reference | Value / role | Contact → net |
|---|---|---|
| P2 | Smoothie-teer-S | 1 → +3V3; 2 → Net-(P2-Pad2); 3 → Net-(P2-Pad3); 4 → Net-(P2-Pad4); 5 → Net-(P2-Pad5); 6 → Net-(D1-Pad1); 7 → Net-(P2-Pad7); 8 → Net-(P2-Pad8); 9 → Net-(D2-Pad1); 10 → GND |
| P1 | "2 PosTerm Block" | 1 → Net-(C2-Pad2); 2 → Net-(C2-Pad1) |
| D2 | 1N4148 | 1 → Net-(D2-Pad1); 2 → Net-(D2-Pad2) |
| D1 | 1N4148 | 1 → Net-(D1-Pad1); 2 → Net-(D1-Pad2) |

</details>

</details>

## Connect and try it

Check the diode/pull-up control paths and the physical cable orientation before using this connection; it is not a plug-in cable. Prime's GE/J36 header exposes the SPI1 signals used by firmware channel 0; the older S header is not interchangeable with arbitrary Prime headers.

| Prime V2 Prime GE/J36 contact | Board contact | Function and direction |
|---|---|---|
| 1, limited 3.3 V | P2.1 | Host supply → board; available current budget still needs checking |
| 10, ground | P2.10 | Common return |
| 8, PA6 / SPI1 CIPO | P2.8 | MAX31855 serial data → host |
| 9, PA5 / SPI1 clock | P2.9 | Host clock → D2/pull-up → U1.5 |
| 6, PD15 | P2.6 | Reserved host output → D1/pull-up → U1.6 active-low chip select |

Leave board P2.2–5 and P2.7 unused. No host-to-sensor data line is required. Reserve PD15 and the SPI1 bus against other configured users before choosing this allocation. Connector numbers refer to board contact numbers, not an assumed ribbon-cable stripe or mating-face view.

After electrical and orientation checks, start with an ambient-temperature probe and no heater connected. Verify plausible readings, then disconnect the probe and verify an invalid/fault response before relying on it. This is temperature monitoring, not a heater-control or safety system.

### Practical Prime wiring

The complete-board drawing below shows the seven-conductor installation: five host leads and two thermocouple leads. It uses GE/J36 and firmware SPI channel 0. Continuous drawn paths show the connections; check physical connector orientation and electrical timing. Enlarged keys identify the fine contacts.

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-wholeboard-wholeboard-wiring" src="/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/wholeboard-wiring.png" title="Complete-board thermocouple monitor wiring" alt="Complete-board thermocouple monitor wiring" caption="Seven continuous conductors connect the complete Prime and board drawings to a polarity-labelled K-type probe. Use the contact keys and mandatory limits." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-wholeboard-01-mandatory-limits" src="/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/01-mandatory-limits.png" title="Read before connecting" alt="Read before connecting" caption="Check electrical timing, supply budget, probe compatibility and physical mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-wholeboard-02-host-contact-key" src="/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/02-host-contact-key.png" title="Prime GE/J36 and board P2 contacts" alt="Prime GE/J36 and board P2 contacts" caption="Five host conductors; leave all other header contacts open. Contact numbers do not establish a mating-face orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-wholeboard-03-probe-and-internal-paths" src="/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/03-probe-and-internal-paths.png" title="Probe polarity and internal signal paths" alt="Probe polarity and internal signal paths" caption="P1.1 is T− and P1.2 is T+. T− is not ground. Chip-select and clock include diode and pull-up paths." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermocouple-interface-wholeboard-04-firmware-monitor" src="/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/04-firmware-monitor.png" title="Monitor-only firmware use" alt="Monitor-only firmware use" caption="Channel 0, PD15 selection and M105 reporting; the exact configuration appears below." width=1200 %}

[Download the matching monitor-only configuration](/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/firmware-example.ini). Retain the [source licence](/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/LICENSE.source-CERN-OHL-1.2.txt) and [drawing notice](/images/extensions/historical-thermocouple-interface/guides/wholeboard-monitor/NOTICE.txt) when reusing these drawings.

## Smoothieware use

The [V2 application source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/max31855.cpp) parses **`spi_select_pin`**, `spi_channel` and `readings_per_second`. The internal C++ identifier `spi_cs_pin_key` is not the configuration spelling. Its driver initializes 16-bit SPI mode 0 at 1 MHz and requires all MAX31855 instances to share one channel. The matching Prime HAL maps channel 0 to SPI1: PB5 output, PA6 input and PA5 clock.

After checking the connection above, use this **monitor-only configuration**. Check that the board works reliably at the 1 MHz clock:

```ini
[temperature control]
tc_monitor.enable = true
tc_monitor.sensor = max31855
tc_monitor.spi_channel = 0
tc_monitor.spi_select_pin = PD15
tc_monitor.readings_per_second = 20
tc_monitor.heater_pin = nc
tc_monitor.designator = TC
```

`heater_pin = nc` makes this instance read-only. Use a unique instance name and designator if other temperature sensors exist. Issue `M105` to request temperature reports. In this firmware, invalid/infinite sensor data is printed as `-100`; that sentinel is not a measured −100 °C temperature. Do not use a plausible-looking number alone as evidence that probe polarity, bus wiring or fault detection is correct.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. The project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
