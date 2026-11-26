---
layout: default
title: "SPI PT100 interface"
permalink: /extensions/historical-spi-pt100
---

# SPI PT100 interface

The MAX31865_SSOP20 converts a platinum resistance sensor into a digital SPI measurement. A PT100 is a resistance sensor, not a thermocouple; a MAX31855 configuration cannot read it. This board is intended for accurate resistance-temperature measurement with an appropriately selected reference resistor.

## Source and compatibility

This guide describes the board in the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPI%20PT100). The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact.

## Power, signals and controls

P1/P4 are parallel host connectors. Contact 1 supplies U1's VDD/DVDD; contact 10 is ground. The matching **SSOP20** symbol and netlist identify these SPI contacts:

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

R3 is specified as the **400 Ω reference resistor**. R4 joins FORCE+ and RTDIN+; R5 joins FORCE− and RTDIN− when those 0 Ω links are fitted. A four-wire probe therefore cannot be inferred from the four terminal contacts: the fitted link population and converter lead mode must agree. R2 is also specified as 0 Ω and R1 as NM (not mounted). Check the fitted parts and calibration on your board. The MAX31865 requires 3.0–3.6 V on VDD and DVDD; this is not a 5 V supply input.

The specified population selects **two-wire operation**: R2 grounds FORCE2 while R1 is unpopulated; R4/R5 join each force/sense pair. For that population the two probe leads terminate at P3.2 (RTDIN+) and P2.1 (RTDIN−); P3.1 and P2.2 need no additional external leads. Verify the fitted links with power off. A four-wire conversion needs a population change, not simply four attached leads.

The [MAX31865 datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf), July 2015, gives a typical 100 nF input filter for a 100 Ω RTD and 10 nF for a 1 kΩ RTD. The board specifies C3 as 10 nF. Check settling and noise with a PT100. Reference-resistor tolerance and temperature coefficient are also unspecified, which limits what its nominal 400 Ω value says about accuracy.

### Annotated connector and component reference

These drawings show the board outline, footprints and pads. Duplicate pad-11 instances on P1 and P4 are separate and unassigned. Check RTD lead mode, the fitted R1/R2/R4/R5 population, reference calibration, host allocation and supply suitability before powering the board.

### Board reference

These function-labelled views show the board geometry. Check cable orientation against the board.

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-00-overview" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m3-1.png" title="M3 1" alt="M3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-m4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-m4-1.png" title="M4 1" alt="M4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-2.png" title="P1 2" alt="P1 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p1-3.png" title="P1 3" alt="P1 3" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p3-1.png" title="P3 1" alt="P3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-1.png" title="P4 1" alt="P4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-2.png" title="P4 2" alt="P4 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-p4-3.png" title="P4 3" alt="P4 3" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r1-1.png" title="R1 1" alt="R1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r2-1.png" title="R2 1" alt="R2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r3-1.png" title="R3 1" alt="R3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r4-1.png" title="R4 1" alt="R4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-r5-1.png" title="R5 1" alt="R5 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-1.png" title="U1 1" alt="U1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-2.png" title="U1 2" alt="U1 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-3.png" title="U1 3" alt="U1 3" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-compact-function-reader-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-reader/reader-u1-4.png" title="U1 4" alt="U1 4" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

</details>

<details markdown="1">
<summary>Contact views and source files</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-00-overview" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/00-overview.png" title="SPI PT100 reference — 00 overview" alt="SPI PT100 reference — 00 overview" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c1-1.png" title="SPI PT100 reference — c1 1" alt="SPI PT100 reference — c1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c2-1.png" title="SPI PT100 reference — c2 1" alt="SPI PT100 reference — c2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-c3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/c3-1.png" title="SPI PT100 reference — c3 1" alt="SPI PT100 reference — c3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m1-1.png" title="SPI PT100 reference — m1 1" alt="SPI PT100 reference — m1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m2-1.png" title="SPI PT100 reference — m2 1" alt="SPI PT100 reference — m2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m3-1.png" title="SPI PT100 reference — m3 1" alt="SPI PT100 reference — m3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-m4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/m4-1.png" title="SPI PT100 reference — m4 1" alt="SPI PT100 reference — m4 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-1.png" title="SPI PT100 reference — p1 1" alt="SPI PT100 reference — p1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-2.png" title="SPI PT100 reference — p1 2" alt="SPI PT100 reference — p1 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p1-3.png" title="SPI PT100 reference — p1 3" alt="SPI PT100 reference — p1 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p2-1.png" title="SPI PT100 reference — p2 1" alt="SPI PT100 reference — p2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p3-1.png" title="SPI PT100 reference — p3 1" alt="SPI PT100 reference — p3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-1.png" title="SPI PT100 reference — p4 1" alt="SPI PT100 reference — p4 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-2.png" title="SPI PT100 reference — p4 2" alt="SPI PT100 reference — p4 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/p4-3.png" title="SPI PT100 reference — p4 3" alt="SPI PT100 reference — p4 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r1-1.png" title="SPI PT100 reference — r1 1" alt="SPI PT100 reference — r1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r2-1.png" title="SPI PT100 reference — r2 1" alt="SPI PT100 reference — r2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r3-1.png" title="SPI PT100 reference — r3 1" alt="SPI PT100 reference — r3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r4-1.png" title="SPI PT100 reference — r4 1" alt="SPI PT100 reference — r4 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/r5-1.png" title="SPI PT100 reference — r5 1" alt="SPI PT100 reference — r5 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-1.png" title="SPI PT100 reference — net keys 1" alt="SPI PT100 reference — net keys 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-2.png" title="SPI PT100 reference — net keys 2" alt="SPI PT100 reference — net keys 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-3.png" title="SPI PT100 reference — net keys 3" alt="SPI PT100 reference — net keys 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-source-net-keys-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/source-net-keys-4.png" title="SPI PT100 reference — net keys 4" alt="SPI PT100 reference — net keys 4" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-1.png" title="SPI PT100 reference — u1 1" alt="SPI PT100 reference — u1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-2.png" title="SPI PT100 reference — u1 2" alt="SPI PT100 reference — u1 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-3.png" title="SPI PT100 reference — u1 3" alt="SPI PT100 reference — u1 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/u1-4.png" title="SPI PT100 reference — u1 4" alt="SPI PT100 reference — u1 4" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c1-0.png" title="SPI PT100 reference — contact c1 0" alt="SPI PT100 reference — contact c1 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c1-1.png" title="SPI PT100 reference — contact c1 1" alt="SPI PT100 reference — contact c1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c2-0.png" title="SPI PT100 reference — contact c2 0" alt="SPI PT100 reference — contact c2 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c2-1.png" title="SPI PT100 reference — contact c2 1" alt="SPI PT100 reference — contact c2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c3-0.png" title="SPI PT100 reference — contact c3 0" alt="SPI PT100 reference — contact c3 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-c3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-c3-1.png" title="SPI PT100 reference — contact c3 1" alt="SPI PT100 reference — contact c3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m1-0.png" title="SPI PT100 reference — contact m1 0" alt="SPI PT100 reference — contact m1 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m2-0.png" title="SPI PT100 reference — contact m2 0" alt="SPI PT100 reference — contact m2 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m3-0.png" title="SPI PT100 reference — contact m3 0" alt="SPI PT100 reference — contact m3 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-m4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-m4-0.png" title="SPI PT100 reference — contact m4 0" alt="SPI PT100 reference — contact m4 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-0.png" title="SPI PT100 reference — contact p1 0" alt="SPI PT100 reference — contact p1 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-1.png" title="SPI PT100 reference — contact p1 1" alt="SPI PT100 reference — contact p1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-10.png" title="SPI PT100 reference — contact p1 10" alt="SPI PT100 reference — contact p1 10" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-11.png" title="SPI PT100 reference — contact p1 11" alt="SPI PT100 reference — contact p1 11" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-2.png" title="SPI PT100 reference — contact p1 2" alt="SPI PT100 reference — contact p1 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-3.png" title="SPI PT100 reference — contact p1 3" alt="SPI PT100 reference — contact p1 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-4.png" title="SPI PT100 reference — contact p1 4" alt="SPI PT100 reference — contact p1 4" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-5.png" title="SPI PT100 reference — contact p1 5" alt="SPI PT100 reference — contact p1 5" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-6.png" title="SPI PT100 reference — contact p1 6" alt="SPI PT100 reference — contact p1 6" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-7.png" title="SPI PT100 reference — contact p1 7" alt="SPI PT100 reference — contact p1 7" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-8.png" title="SPI PT100 reference — contact p1 8" alt="SPI PT100 reference — contact p1 8" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p1-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p1-9.png" title="SPI PT100 reference — contact p1 9" alt="SPI PT100 reference — contact p1 9" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p2-0.png" title="SPI PT100 reference — contact p2 0" alt="SPI PT100 reference — contact p2 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p2-1.png" title="SPI PT100 reference — contact p2 1" alt="SPI PT100 reference — contact p2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p3-0.png" title="SPI PT100 reference — contact p3 0" alt="SPI PT100 reference — contact p3 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p3-1.png" title="SPI PT100 reference — contact p3 1" alt="SPI PT100 reference — contact p3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-0.png" title="SPI PT100 reference — contact p4 0" alt="SPI PT100 reference — contact p4 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-1.png" title="SPI PT100 reference — contact p4 1" alt="SPI PT100 reference — contact p4 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-10.png" title="SPI PT100 reference — contact p4 10" alt="SPI PT100 reference — contact p4 10" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-11.png" title="SPI PT100 reference — contact p4 11" alt="SPI PT100 reference — contact p4 11" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-2.png" title="SPI PT100 reference — contact p4 2" alt="SPI PT100 reference — contact p4 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-3.png" title="SPI PT100 reference — contact p4 3" alt="SPI PT100 reference — contact p4 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-4.png" title="SPI PT100 reference — contact p4 4" alt="SPI PT100 reference — contact p4 4" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-5.png" title="SPI PT100 reference — contact p4 5" alt="SPI PT100 reference — contact p4 5" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-6.png" title="SPI PT100 reference — contact p4 6" alt="SPI PT100 reference — contact p4 6" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-7.png" title="SPI PT100 reference — contact p4 7" alt="SPI PT100 reference — contact p4 7" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-8.png" title="SPI PT100 reference — contact p4 8" alt="SPI PT100 reference — contact p4 8" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-p4-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-p4-9.png" title="SPI PT100 reference — contact p4 9" alt="SPI PT100 reference — contact p4 9" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r1-0.png" title="SPI PT100 reference — contact r1 0" alt="SPI PT100 reference — contact r1 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r1-1.png" title="SPI PT100 reference — contact r1 1" alt="SPI PT100 reference — contact r1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r2-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r2-0.png" title="SPI PT100 reference — contact r2 0" alt="SPI PT100 reference — contact r2 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r2-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r2-1.png" title="SPI PT100 reference — contact r2 1" alt="SPI PT100 reference — contact r2 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r3-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r3-0.png" title="SPI PT100 reference — contact r3 0" alt="SPI PT100 reference — contact r3 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r3-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r3-1.png" title="SPI PT100 reference — contact r3 1" alt="SPI PT100 reference — contact r3 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r4-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r4-0.png" title="SPI PT100 reference — contact r4 0" alt="SPI PT100 reference — contact r4 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r4-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r4-1.png" title="SPI PT100 reference — contact r4 1" alt="SPI PT100 reference — contact r4 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r5-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r5-0.png" title="SPI PT100 reference — contact r5 0" alt="SPI PT100 reference — contact r5 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-r5-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-r5-1.png" title="SPI PT100 reference — contact r5 1" alt="SPI PT100 reference — contact r5 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-0" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-0.png" title="SPI PT100 reference — contact u1 0" alt="SPI PT100 reference — contact u1 0" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-1" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-1.png" title="SPI PT100 reference — contact u1 1" alt="SPI PT100 reference — contact u1 1" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-10" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-10.png" title="SPI PT100 reference — contact u1 10" alt="SPI PT100 reference — contact u1 10" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-11" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-11.png" title="SPI PT100 reference — contact u1 11" alt="SPI PT100 reference — contact u1 11" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-12" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-12.png" title="SPI PT100 reference — contact u1 12" alt="SPI PT100 reference — contact u1 12" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-13" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-13.png" title="SPI PT100 reference — contact u1 13" alt="SPI PT100 reference — contact u1 13" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-14" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-14.png" title="SPI PT100 reference — contact u1 14" alt="SPI PT100 reference — contact u1 14" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-15" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-15.png" title="SPI PT100 reference — contact u1 15" alt="SPI PT100 reference — contact u1 15" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-16" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-16.png" title="SPI PT100 reference — contact u1 16" alt="SPI PT100 reference — contact u1 16" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-17" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-17.png" title="SPI PT100 reference — contact u1 17" alt="SPI PT100 reference — contact u1 17" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-18" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-18.png" title="SPI PT100 reference — contact u1 18" alt="SPI PT100 reference — contact u1 18" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-19" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-19.png" title="SPI PT100 reference — contact u1 19" alt="SPI PT100 reference — contact u1 19" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-2" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-2.png" title="SPI PT100 reference — contact u1 2" alt="SPI PT100 reference — contact u1 2" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-3" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-3.png" title="SPI PT100 reference — contact u1 3" alt="SPI PT100 reference — contact u1 3" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-4" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-4.png" title="SPI PT100 reference — contact u1 4" alt="SPI PT100 reference — contact u1 4" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-5" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-5.png" title="SPI PT100 reference — contact u1 5" alt="SPI PT100 reference — contact u1 5" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-6" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-6.png" title="SPI PT100 reference — contact u1 6" alt="SPI PT100 reference — contact u1 6" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-7" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-7.png" title="SPI PT100 reference — contact u1 7" alt="SPI PT100 reference — contact u1 7" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-8" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-8.png" title="SPI PT100 reference — contact u1 8" alt="SPI PT100 reference — contact u1 8" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-pt100-source-derived-contact-u1-9" src="/images/extensions/historical-spi-pt100/guides/source-derived-annotated/contact-u1-9.png" title="SPI PT100 reference — contact u1 9" alt="SPI PT100 reference — contact u1 9" caption="Front-view contact reference. Check population, calibration, host allocation and mating before powering the board." width=420 %}

</details>

[Download the unmodified native source, upstream licence and drawing notice](/images/extensions/historical-spi-pt100/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below records connectivity. Check cable orientation and continuity on the board.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
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

## Connect and try it

The fitted population is intended for a two-wire resistance probe. Before powering a PT100, select the exact probe and check excitation current, duty cycle and self-heating against its datasheet, alongside the fitted links and filter. A nominal 3.3 V supply and 400 Ω reference alone do not establish a suitable probe current. Do not enable closed-loop heating from this sensor without MAX31865 firmware support.

## Smoothieware use

The V2 temperature-control sensor factory selects thermistor or max31855, not max31865, so it does not read this board through that temperature-control path. Do not substitute a MAX31855 setting.

The [V2 temperature-control factory](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L189) selects a dummy sensor for an unrecognized sensor name; `sensor = max31865` is not a working configuration. 

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
