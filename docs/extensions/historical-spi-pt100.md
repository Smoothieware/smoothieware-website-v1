---
layout: default
title: "SPI PT100 interface"
permalink: /extensions/historical-spi-pt100
---

# SPI PT100 interface

The MAX31865_SSOP20 converts a platinum resistance sensor into a digital SPI measurement. A PT100 is a resistance sensor, not a thermocouple; a MAX31855 configuration cannot read it. This board is intended for accurate resistance-temperature measurement with an appropriately selected reference resistor.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPI%20PT100), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P1/P4 are parallel host connectors. Contact 1 supplies U1's VDD/DVDD; contact 10 is ground. The matching **SSOP20** symbol and retained netlist identify these SPI contacts:

| P1 and P4 contact | Converter connection | Signal direction |
|---|---|---|
| 6 | U1.16, active-low chip select (`nCS`) | Host → converter |
| 7 | U1.14, serial data input (`SDI` / host MOSI) | Host → converter |
| 8 | U1.17, serial data output (`SDO` / host MISO) | Converter → host |
| 9 | U1.15, serial clock (`SCLK`) | Host → converter |

Contacts 2–5 have no assigned converter function. These are module contact numbers, not an allocation to the same-numbered Prime socket contacts.

| Probe terminal | Converter connection |
|---|---|
| P3.1 | U1.8, FORCE+ |
| P3.2 | U1.10, RTDIN+ |
| P2.1 | U1.11, RTDIN− |
| P2.2 | U1.12, FORCE− |

R3 is specified as the **400 Ω reference resistor**. R4 joins FORCE+ and RTDIN+; R5 joins FORCE− and RTDIN− when those 0 Ω links are fitted. A four-wire probe therefore cannot be inferred from the four terminal contacts: the fitted link population and converter lead mode must agree. R2 is also specified as 0 Ω and R1 as NM (not mounted). Source values do not prove assembled population or calibration. The selected MAX31865 requires 3.0–3.6 V on VDD and DVDD; this is not a 5 V supply input. A complete Prime interface still needs review.

The specified population selects **two-wire operation**: R2 grounds FORCE2 while R1 is unpopulated; R4/R5 join each force/sense pair. For that population the two probe leads terminate at P3.2 (RTDIN+) and P2.1 (RTDIN−); P3.1 and P2.2 need no additional external leads. Verify the fitted links with power off. A four-wire conversion needs a deliberately reviewed population change, rather than simply attaching four leads.

The [MAX31865 datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf), retained revision 3, July 2015, gives a typical 100 nF input filter for a 100 Ω RTD and 10 nF for a 1 kΩ RTD. The historical source specifies C3 as 10 nF. That difference needs settling/noise review for a PT100; it is not by itself proof that the board cannot function. Reference-resistor tolerance and temperature coefficient are also unspecified, so no conversion-accuracy claim follows from its nominal 400 Ω value.

### Annotated connector and component reference

These newly source-derived drawings retain the selected native outline, footprints, pads and graphics. They are not a recovered canonical abstract or a verified mating view. Duplicate pad-11 instances on P1 and P4 remain separate and unassigned. MAX31865 SSOP20 roles follow the retained source adapter and netlist; RTD lead mode, R1/R2/R4/R5 fitted population and reference calibration remain unresolved. Host allocation, supply suitability, firmware and powered operation are unqualified.

### Board reference

These function-labelled views retain the selected native source geometry. They are newly source-derived references, not a verified mating view.

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-00-overview" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m3-1.png" title="M3 1" alt="M3 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m4-1.png" title="M4 1" alt="M4 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-2.png" title="P1 2" alt="P1 2 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-3.png" title="P1 3" alt="P1 3 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p3-1.png" title="P3 1" alt="P3 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-1.png" title="P4 1" alt="P4 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-2.png" title="P4 2" alt="P4 2 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-3.png" title="P4 3" alt="P4 3 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r1-1.png" title="R1 1" alt="R1 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r2-1.png" title="R2 1" alt="R2 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r3-1.png" title="R3 1" alt="R3 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r4-1.png" title="R4 1" alt="R4 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r5-1.png" title="R5 1" alt="R5 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-1.png" title="U1 1" alt="U1 1 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-2.png" title="U1 2" alt="U1 2 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-3.png" title="U1 3" alt="U1 3 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-4.png" title="U1 4" alt="U1 4 for the selected historical spi-pt100 source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-00-overview" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/00-overview.png" title="SPI PT100 source reference — 00 overview" alt="SPI PT100 source reference — 00 overview" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c1-1.png" title="SPI PT100 source reference — c1 1" alt="SPI PT100 source reference — c1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c2-1.png" title="SPI PT100 source reference — c2 1" alt="SPI PT100 source reference — c2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c3-1.png" title="SPI PT100 source reference — c3 1" alt="SPI PT100 source reference — c3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m1-1.png" title="SPI PT100 source reference — m1 1" alt="SPI PT100 source reference — m1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m2-1.png" title="SPI PT100 source reference — m2 1" alt="SPI PT100 source reference — m2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m3-1.png" title="SPI PT100 source reference — m3 1" alt="SPI PT100 source reference — m3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m4-1.png" title="SPI PT100 source reference — m4 1" alt="SPI PT100 source reference — m4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-1.png" title="SPI PT100 source reference — p1 1" alt="SPI PT100 source reference — p1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-2.png" title="SPI PT100 source reference — p1 2" alt="SPI PT100 source reference — p1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-3.png" title="SPI PT100 source reference — p1 3" alt="SPI PT100 source reference — p1 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p2-1.png" title="SPI PT100 source reference — p2 1" alt="SPI PT100 source reference — p2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p3-1.png" title="SPI PT100 source reference — p3 1" alt="SPI PT100 source reference — p3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-1.png" title="SPI PT100 source reference — p4 1" alt="SPI PT100 source reference — p4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-2.png" title="SPI PT100 source reference — p4 2" alt="SPI PT100 source reference — p4 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-3.png" title="SPI PT100 source reference — p4 3" alt="SPI PT100 source reference — p4 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r1-1.png" title="SPI PT100 source reference — r1 1" alt="SPI PT100 source reference — r1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r2-1.png" title="SPI PT100 source reference — r2 1" alt="SPI PT100 source reference — r2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r3-1.png" title="SPI PT100 source reference — r3 1" alt="SPI PT100 source reference — r3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r4-1.png" title="SPI PT100 source reference — r4 1" alt="SPI PT100 source reference — r4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r5-1.png" title="SPI PT100 source reference — r5 1" alt="SPI PT100 source reference — r5 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-1.png" title="SPI PT100 source reference — source net keys 1" alt="SPI PT100 source reference — source net keys 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-2.png" title="SPI PT100 source reference — source net keys 2" alt="SPI PT100 source reference — source net keys 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-3.png" title="SPI PT100 source reference — source net keys 3" alt="SPI PT100 source reference — source net keys 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-4.png" title="SPI PT100 source reference — source net keys 4" alt="SPI PT100 source reference — source net keys 4" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-1.png" title="SPI PT100 source reference — u1 1" alt="SPI PT100 source reference — u1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-2.png" title="SPI PT100 source reference — u1 2" alt="SPI PT100 source reference — u1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-3.png" title="SPI PT100 source reference — u1 3" alt="SPI PT100 source reference — u1 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-4.png" title="SPI PT100 source reference — u1 4" alt="SPI PT100 source reference — u1 4" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c1-0.png" title="SPI PT100 source reference — contact c1 0" alt="SPI PT100 source reference — contact c1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c1-1.png" title="SPI PT100 source reference — contact c1 1" alt="SPI PT100 source reference — contact c1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c2-0.png" title="SPI PT100 source reference — contact c2 0" alt="SPI PT100 source reference — contact c2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c2-1.png" title="SPI PT100 source reference — contact c2 1" alt="SPI PT100 source reference — contact c2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c3-0.png" title="SPI PT100 source reference — contact c3 0" alt="SPI PT100 source reference — contact c3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c3-1.png" title="SPI PT100 source reference — contact c3 1" alt="SPI PT100 source reference — contact c3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m1-0.png" title="SPI PT100 source reference — contact m1 0" alt="SPI PT100 source reference — contact m1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m2-0.png" title="SPI PT100 source reference — contact m2 0" alt="SPI PT100 source reference — contact m2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m3-0.png" title="SPI PT100 source reference — contact m3 0" alt="SPI PT100 source reference — contact m3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m4-0.png" title="SPI PT100 source reference — contact m4 0" alt="SPI PT100 source reference — contact m4 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-0.png" title="SPI PT100 source reference — contact p1 0" alt="SPI PT100 source reference — contact p1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-1.png" title="SPI PT100 source reference — contact p1 1" alt="SPI PT100 source reference — contact p1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-10.png" title="SPI PT100 source reference — contact p1 10" alt="SPI PT100 source reference — contact p1 10" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-11.png" title="SPI PT100 source reference — contact p1 11" alt="SPI PT100 source reference — contact p1 11" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-2.png" title="SPI PT100 source reference — contact p1 2" alt="SPI PT100 source reference — contact p1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-3.png" title="SPI PT100 source reference — contact p1 3" alt="SPI PT100 source reference — contact p1 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-4.png" title="SPI PT100 source reference — contact p1 4" alt="SPI PT100 source reference — contact p1 4" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-5.png" title="SPI PT100 source reference — contact p1 5" alt="SPI PT100 source reference — contact p1 5" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-6.png" title="SPI PT100 source reference — contact p1 6" alt="SPI PT100 source reference — contact p1 6" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-7.png" title="SPI PT100 source reference — contact p1 7" alt="SPI PT100 source reference — contact p1 7" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-8.png" title="SPI PT100 source reference — contact p1 8" alt="SPI PT100 source reference — contact p1 8" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-9.png" title="SPI PT100 source reference — contact p1 9" alt="SPI PT100 source reference — contact p1 9" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p2-0.png" title="SPI PT100 source reference — contact p2 0" alt="SPI PT100 source reference — contact p2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p2-1.png" title="SPI PT100 source reference — contact p2 1" alt="SPI PT100 source reference — contact p2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p3-0.png" title="SPI PT100 source reference — contact p3 0" alt="SPI PT100 source reference — contact p3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p3-1.png" title="SPI PT100 source reference — contact p3 1" alt="SPI PT100 source reference — contact p3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-0.png" title="SPI PT100 source reference — contact p4 0" alt="SPI PT100 source reference — contact p4 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-1.png" title="SPI PT100 source reference — contact p4 1" alt="SPI PT100 source reference — contact p4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-10.png" title="SPI PT100 source reference — contact p4 10" alt="SPI PT100 source reference — contact p4 10" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-11.png" title="SPI PT100 source reference — contact p4 11" alt="SPI PT100 source reference — contact p4 11" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-2.png" title="SPI PT100 source reference — contact p4 2" alt="SPI PT100 source reference — contact p4 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-3.png" title="SPI PT100 source reference — contact p4 3" alt="SPI PT100 source reference — contact p4 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-4.png" title="SPI PT100 source reference — contact p4 4" alt="SPI PT100 source reference — contact p4 4" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-5.png" title="SPI PT100 source reference — contact p4 5" alt="SPI PT100 source reference — contact p4 5" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-6.png" title="SPI PT100 source reference — contact p4 6" alt="SPI PT100 source reference — contact p4 6" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-7.png" title="SPI PT100 source reference — contact p4 7" alt="SPI PT100 source reference — contact p4 7" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-8.png" title="SPI PT100 source reference — contact p4 8" alt="SPI PT100 source reference — contact p4 8" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-9.png" title="SPI PT100 source reference — contact p4 9" alt="SPI PT100 source reference — contact p4 9" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r1-0.png" title="SPI PT100 source reference — contact r1 0" alt="SPI PT100 source reference — contact r1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r1-1.png" title="SPI PT100 source reference — contact r1 1" alt="SPI PT100 source reference — contact r1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r2-0.png" title="SPI PT100 source reference — contact r2 0" alt="SPI PT100 source reference — contact r2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r2-1.png" title="SPI PT100 source reference — contact r2 1" alt="SPI PT100 source reference — contact r2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r3-0.png" title="SPI PT100 source reference — contact r3 0" alt="SPI PT100 source reference — contact r3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r3-1.png" title="SPI PT100 source reference — contact r3 1" alt="SPI PT100 source reference — contact r3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r4-0.png" title="SPI PT100 source reference — contact r4 0" alt="SPI PT100 source reference — contact r4 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r4-1.png" title="SPI PT100 source reference — contact r4 1" alt="SPI PT100 source reference — contact r4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r5-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r5-0.png" title="SPI PT100 source reference — contact r5 0" alt="SPI PT100 source reference — contact r5 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r5-1.png" title="SPI PT100 source reference — contact r5 1" alt="SPI PT100 source reference — contact r5 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-0.png" title="SPI PT100 source reference — contact u1 0" alt="SPI PT100 source reference — contact u1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-1.png" title="SPI PT100 source reference — contact u1 1" alt="SPI PT100 source reference — contact u1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-10.png" title="SPI PT100 source reference — contact u1 10" alt="SPI PT100 source reference — contact u1 10" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-11.png" title="SPI PT100 source reference — contact u1 11" alt="SPI PT100 source reference — contact u1 11" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-12" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-12.png" title="SPI PT100 source reference — contact u1 12" alt="SPI PT100 source reference — contact u1 12" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-13" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-13.png" title="SPI PT100 source reference — contact u1 13" alt="SPI PT100 source reference — contact u1 13" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-14" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-14.png" title="SPI PT100 source reference — contact u1 14" alt="SPI PT100 source reference — contact u1 14" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-15" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-15.png" title="SPI PT100 source reference — contact u1 15" alt="SPI PT100 source reference — contact u1 15" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-16" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-16.png" title="SPI PT100 source reference — contact u1 16" alt="SPI PT100 source reference — contact u1 16" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-17" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-17.png" title="SPI PT100 source reference — contact u1 17" alt="SPI PT100 source reference — contact u1 17" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-18" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-18.png" title="SPI PT100 source reference — contact u1 18" alt="SPI PT100 source reference — contact u1 18" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-19" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-19.png" title="SPI PT100 source reference — contact u1 19" alt="SPI PT100 source reference — contact u1 19" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-2.png" title="SPI PT100 source reference — contact u1 2" alt="SPI PT100 source reference — contact u1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-3.png" title="SPI PT100 source reference — contact u1 3" alt="SPI PT100 source reference — contact u1 3" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-4.png" title="SPI PT100 source reference — contact u1 4" alt="SPI PT100 source reference — contact u1 4" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-5.png" title="SPI PT100 source reference — contact u1 5" alt="SPI PT100 source reference — contact u1 5" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-6.png" title="SPI PT100 source reference — contact u1 6" alt="SPI PT100 source reference — contact u1 6" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-7.png" title="SPI PT100 source reference — contact u1 7" alt="SPI PT100 source reference — contact u1 7" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-8.png" title="SPI PT100 source reference — contact u1 8" alt="SPI PT100 source reference — contact u1 8" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-9.png" title="SPI PT100 source reference — contact u1 9" alt="SPI PT100 source reference — contact u1 9" caption="Selected historical PCB; new source-derived front-coordinate reference. Population, calibration, host allocation, mating and powered behavior remain unverified." width=420 %}


</details>

<details markdown="1">
<summary>Retained earlier functional references</summary>

### Board functions and contact positions

These sheets identify the selected source components and explain their contacts. Start with the host and probe connectors; expand the circuit details for fitted links, filtering and mounting points. Native front-coordinate markers do not establish cable orientation or physical connector cavities.

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p3-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p3-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p2-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p2-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-u1-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/u1-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-u1-functions-02" src="/images/extensions/historical-spi-pt100/guides/functional-reference/u1-functions-02.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-u1-functions-03" src="/images/extensions/historical-spi-pt100/guides/functional-reference/u1-functions-03.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-u1-functions-04" src="/images/extensions/historical-spi-pt100/guides/functional-reference/u1-functions-04.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p1-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p1-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p1-functions-02" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p1-functions-02.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p1-functions-03" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p1-functions-03.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p4-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p4-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p4-functions-02" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p4-functions-02.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-p4-functions-03" src="/images/extensions/historical-spi-pt100/guides/functional-reference/p4-functions-03.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-r5-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/r5-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-c3-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/c3-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-c2-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/c2-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-c1-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/c1-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-r4-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/r4-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-r2-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/r2-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-r1-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/r1-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-m1-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/m1-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-m2-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/m2-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-m3-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/m3-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-m4-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/m4-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-function-r3-functions-01" src="/images/extensions/historical-spi-pt100/guides/functional-reference/r3-functions-01.png" title="spi-pt100 — Component side; back parts excluded — populated source-derived candidate" alt="spi-pt100 — Component side; back parts excluded — populated source-derived candidate — function callouts and source contact positions" caption="Source-derived component reference. Numbered markers locate native source contacts; this is not a cable mating view. Canonical artwork remains unverified." width=420 %}

</details>

<details>
<summary>Original pad locators and source comparison</summary>


</details>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-overview" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-overview.png" title="Legacy SPI PT100" alt="Legacy SPI PT100 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p1-1-5" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p1-1-5.png" title="P1 · Host serial bus" alt="P1 · Host serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p1-6-10" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p1-6-10.png" title="P1 · Host serial bus" alt="P1 · Host serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p1-11-11" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p1-11-11.png" title="P1 · Host serial bus" alt="P1 · Host serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p4-1-5" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p4-1-5.png" title="P4 · Parallel serial bus" alt="P4 · Parallel serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p4-6-10" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p4-6-10.png" title="P4 · Parallel serial bus" alt="P4 · Parallel serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p4-11-11" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p4-11-11.png" title="P4 · Parallel serial bus" alt="P4 · Parallel serial bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p2-1-2" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p2-1-2.png" title="P2 · Negative RTD side" alt="P2 · Negative RTD side — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-p3-1-2" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-p3-1-2.png" title="P3 · Positive RTD side" alt="P3 · Positive RTD side — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-converter" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-converter.png" title="MAX31865 conversion" alt="MAX31865 conversion — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-reference" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-reference.png" title="Reference resistor" alt="Reference resistor — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-positive" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-positive.png" title="Positive lead bridge" alt="Positive lead bridge — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-negative" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-negative.png" title="Negative lead bridge" alt="Negative lead bridge — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-force" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-force.png" title="Optional force network" alt="Optional force network — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-filter" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-filter.png" title="Sense filtering" alt="Sense filtering — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-mechanical" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-mechanical.png" title="Connector mechanical pads" alt="Connector mechanical pads — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-mounts" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-mounts.png" title="Native mounting holes" alt="Native mounting holes — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-reader-compact-boundary" src="/images/extensions/historical-spi-pt100/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-spi-pt100/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. Retain the included source licence and notices with derivatives.


The required annotated historical board diagram is not yet available. A modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P2 | Conn_1x02 | 1 → Net-(C3-Pad2); 2 → Net-(P2-Pad2) |
| P1 | Smoothie-teer-S | 1 → Net-(C1-Pad1); 2 → Net-(P1-Pad2); 3 → Net-(P1-Pad3); 4 → Net-(P1-Pad4); 5 → Net-(P1-Pad5); 6 → Net-(P1-Pad6); 7 → Net-(P1-Pad7); 8 → Net-(P1-Pad8); 9 → Net-(P1-Pad9); 10 → GND |
| P3 | Conn_1x02 | 1 → Net-(P3-Pad1); 2 → Net-(C3-Pad1) |
| P4 | Smoothie-teer-S | 1 → Net-(C1-Pad1); 2 → Net-(P1-Pad2); 3 → Net-(P1-Pad3); 4 → Net-(P1-Pad4); 5 → Net-(P1-Pad5); 6 → Net-(P1-Pad6); 7 → Net-(P1-Pad7); 8 → Net-(P1-Pad8); 9 → Net-(P1-Pad9); 10 → GND |
| R1 | NM | 1 → Net-(P3-Pad1); 2 → Net-(R1-Pad2) |
| R2 | 0 | 1 → GND; 2 → Net-(R1-Pad2) |
| R3 | 400 | 1 → Net-(R3-Pad1); 2 → Net-(R3-Pad2) |
| R4 | 0 | 1 → Net-(P3-Pad1); 2 → Net-(C3-Pad1) |
| R5 | 0 | 1 → Net-(P2-Pad2); 2 → Net-(C3-Pad2) |

</div>

</details>



</details>


</details>

## Connect and try it

The source population is intended for a two-wire resistance probe. Before a powered PT100 example can be completed, select the exact probe and check excitation current, duty cycle and self-heating against its datasheet, alongside the fitted links and filter. A nominal 3.3 V supply and 400 Ω reference alone do not establish a suitable probe current. The Prime SPI allocation, chip-select behavior and MAX31865 firmware integration also remain unresolved. Do not enable closed-loop heating while the sensor interpretation is unresolved.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

The inspected V2 TemperatureControl.cpp sensor factory selects thermistor or max31855, not max31865. This source revision therefore lacks the needed MAX31865 integration through that temperature-control path. Email wolf.arthur@gamil.com about the required firmware support. No made-up sensor setting or MAX31855 substitution is supplied.

The checked [V2 temperature-control factory](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L189) is pinned to upstream commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. An unrecognized sensor name selects a dummy sensor; `sensor = max31865` is not a working configuration for this source. Source inspection is not a target build, flash, boot or hardware result. Where a required driver is absent, email **wolf.arthur@gamil.com**; unresolved wiring or untested support is not automatically evidence of absence.

## Remaining source questions

Actual reference-resistor tolerance/calibration, fitted RTD links and lead mode, supply/interface limits, matching MAX31865 electrical specifications, driver integration and copper continuity. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here.

[All extension boards](/extension-boards)
