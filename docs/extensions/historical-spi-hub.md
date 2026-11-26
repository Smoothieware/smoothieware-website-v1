---
layout: default
title: "SPI hub"
permalink: /extensions/historical-spi-hub
---

# SPI hub

This passive hub shares one SPI clock/data bus among four peripherals and gives each peripheral its own chip-select wire. It does not decode addresses or create extra independent SPI controllers. Typical use is several compatible SPI sensors on one bus.

## Source and compatibility

This guide describes the board in the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIHub). The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact.

## Power, signals and controls

P1 is upstream. Its contacts 7/8/9 are MOSI/MISO/SCK; contacts 3/4/5/6 are CS5/CS3/CS4/CS2. P2–P5 share bus and rails, with their own CS on contact 6. Contacts 3–5 on each downstream connector are separate unused nets. D1–D4 are status indicators. Do not connect two actively driven MISO outputs simultaneously.

### Annotated connector and component reference

These references show the board outline, footprints and pads. Read the connector sheets and net keys together: CS2–CS5 are separate nets, and downstream contacts 3–5 have individual unassigned nets. GPIO/GPIO! are generic symbol labels, not assigned firmware functions. Check peripheral compatibility, MISO arbitration, powered-off release behaviour, supply ratings and physical mating before connecting.

### Board reference

Use the overview to locate each connector, then open the function sheets for pin roles. Check cable orientation against the board before connecting.

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-00-overview" src="/images/extensions/historical-spi-hub/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-01-selects" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-01-selects.png" title="01 Selects" alt="01 Selects" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p1-2" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p1-2.png" title="P1 2" alt="P1 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p2-2" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p2-2.png" title="P2 2" alt="P2 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p3-1.png" title="P3 1" alt="P3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p3-2" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p3-2.png" title="P3 2" alt="P3 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p4-1.png" title="P4 1" alt="P4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p4-2" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p4-2.png" title="P4 2" alt="P4 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p5-1" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p5-1.png" title="P5 1" alt="P5 1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-compact-function-reader-p5-2" src="/images/extensions/historical-spi-hub/guides/source-derived-reader/reader-p5-2.png" title="P5 2" alt="P5 2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

</details>

<details markdown="1">
<summary>Contact views and source files</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-00-overview" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/00-overview.png" title="SPI hub reference — 00 overview" alt="SPI hub reference — 00 overview" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-d1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/d1-1.png" title="SPI hub reference — d1 1" alt="SPI hub reference — d1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-d2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/d2-1.png" title="SPI hub reference — d2 1" alt="SPI hub reference — d2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-d3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/d3-1.png" title="SPI hub reference — d3 1" alt="SPI hub reference — d3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-d4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/d4-1.png" title="SPI hub reference — d4 1" alt="SPI hub reference — d4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-m1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/m1-1.png" title="SPI hub reference — m1 1" alt="SPI hub reference — m1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-m2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/m2-1.png" title="SPI hub reference — m2 1" alt="SPI hub reference — m2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-m3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/m3-1.png" title="SPI hub reference — m3 1" alt="SPI hub reference — m3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-m4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/m4-1.png" title="SPI hub reference — m4 1" alt="SPI hub reference — m4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p1-1.png" title="SPI hub reference — p1 1" alt="SPI hub reference — p1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p1-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p1-2.png" title="SPI hub reference — p1 2" alt="SPI hub reference — p1 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p2-1.png" title="SPI hub reference — p2 1" alt="SPI hub reference — p2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p2-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p2-2.png" title="SPI hub reference — p2 2" alt="SPI hub reference — p2 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p3-1.png" title="SPI hub reference — p3 1" alt="SPI hub reference — p3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p3-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p3-2.png" title="SPI hub reference — p3 2" alt="SPI hub reference — p3 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p4-1.png" title="SPI hub reference — p4 1" alt="SPI hub reference — p4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p4-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p4-2.png" title="SPI hub reference — p4 2" alt="SPI hub reference — p4 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p5-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p5-1.png" title="SPI hub reference — p5 1" alt="SPI hub reference — p5 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-p5-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/p5-2.png" title="SPI hub reference — p5 2" alt="SPI hub reference — p5 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-r1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/r1-1.png" title="SPI hub reference — r1 1" alt="SPI hub reference — r1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-r2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/r2-1.png" title="SPI hub reference — r2 1" alt="SPI hub reference — r2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-r3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/r3-1.png" title="SPI hub reference — r3 1" alt="SPI hub reference — r3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-r4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/r4-1.png" title="SPI hub reference — r4 1" alt="SPI hub reference — r4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-1.png" title="SPI hub reference — net keys 1" alt="SPI hub reference — net keys 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-2.png" title="SPI hub reference — net keys 2" alt="SPI hub reference — net keys 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-3.png" title="SPI hub reference — net keys 3" alt="SPI hub reference — net keys 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-4.png" title="SPI hub reference — net keys 4" alt="SPI hub reference — net keys 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-5.png" title="SPI hub reference — net keys 5" alt="SPI hub reference — net keys 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-source-net-keys-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/source-net-keys-6.png" title="SPI hub reference — net keys 6" alt="SPI hub reference — net keys 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d1-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d1-0.png" title="SPI hub reference — contact d1 0" alt="SPI hub reference — contact d1 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d1-1.png" title="SPI hub reference — contact d1 1" alt="SPI hub reference — contact d1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d2-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d2-0.png" title="SPI hub reference — contact d2 0" alt="SPI hub reference — contact d2 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d2-1.png" title="SPI hub reference — contact d2 1" alt="SPI hub reference — contact d2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d3-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d3-0.png" title="SPI hub reference — contact d3 0" alt="SPI hub reference — contact d3 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d3-1.png" title="SPI hub reference — contact d3 1" alt="SPI hub reference — contact d3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d4-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d4-0.png" title="SPI hub reference — contact d4 0" alt="SPI hub reference — contact d4 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-d4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-d4-1.png" title="SPI hub reference — contact d4 1" alt="SPI hub reference — contact d4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-m1-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-m1-0.png" title="SPI hub reference — contact m1 0" alt="SPI hub reference — contact m1 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-m2-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-m2-0.png" title="SPI hub reference — contact m2 0" alt="SPI hub reference — contact m2 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-m3-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-m3-0.png" title="SPI hub reference — contact m3 0" alt="SPI hub reference — contact m3 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-m4-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-m4-0.png" title="SPI hub reference — contact m4 0" alt="SPI hub reference — contact m4 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-0.png" title="SPI hub reference — contact p1 0" alt="SPI hub reference — contact p1 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-1.png" title="SPI hub reference — contact p1 1" alt="SPI hub reference — contact p1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-2.png" title="SPI hub reference — contact p1 2" alt="SPI hub reference — contact p1 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-3.png" title="SPI hub reference — contact p1 3" alt="SPI hub reference — contact p1 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-4.png" title="SPI hub reference — contact p1 4" alt="SPI hub reference — contact p1 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-5.png" title="SPI hub reference — contact p1 5" alt="SPI hub reference — contact p1 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-6.png" title="SPI hub reference — contact p1 6" alt="SPI hub reference — contact p1 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-7" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-7.png" title="SPI hub reference — contact p1 7" alt="SPI hub reference — contact p1 7" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-8" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-8.png" title="SPI hub reference — contact p1 8" alt="SPI hub reference — contact p1 8" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p1-9" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p1-9.png" title="SPI hub reference — contact p1 9" alt="SPI hub reference — contact p1 9" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-0.png" title="SPI hub reference — contact p2 0" alt="SPI hub reference — contact p2 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-1.png" title="SPI hub reference — contact p2 1" alt="SPI hub reference — contact p2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-2.png" title="SPI hub reference — contact p2 2" alt="SPI hub reference — contact p2 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-3.png" title="SPI hub reference — contact p2 3" alt="SPI hub reference — contact p2 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-4.png" title="SPI hub reference — contact p2 4" alt="SPI hub reference — contact p2 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-5.png" title="SPI hub reference — contact p2 5" alt="SPI hub reference — contact p2 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-6.png" title="SPI hub reference — contact p2 6" alt="SPI hub reference — contact p2 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-7" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-7.png" title="SPI hub reference — contact p2 7" alt="SPI hub reference — contact p2 7" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-8" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-8.png" title="SPI hub reference — contact p2 8" alt="SPI hub reference — contact p2 8" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p2-9" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p2-9.png" title="SPI hub reference — contact p2 9" alt="SPI hub reference — contact p2 9" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-0.png" title="SPI hub reference — contact p3 0" alt="SPI hub reference — contact p3 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-1.png" title="SPI hub reference — contact p3 1" alt="SPI hub reference — contact p3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-2.png" title="SPI hub reference — contact p3 2" alt="SPI hub reference — contact p3 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-3.png" title="SPI hub reference — contact p3 3" alt="SPI hub reference — contact p3 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-4.png" title="SPI hub reference — contact p3 4" alt="SPI hub reference — contact p3 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-5.png" title="SPI hub reference — contact p3 5" alt="SPI hub reference — contact p3 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-6.png" title="SPI hub reference — contact p3 6" alt="SPI hub reference — contact p3 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-7" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-7.png" title="SPI hub reference — contact p3 7" alt="SPI hub reference — contact p3 7" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-8" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-8.png" title="SPI hub reference — contact p3 8" alt="SPI hub reference — contact p3 8" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p3-9" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p3-9.png" title="SPI hub reference — contact p3 9" alt="SPI hub reference — contact p3 9" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-0.png" title="SPI hub reference — contact p4 0" alt="SPI hub reference — contact p4 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-1.png" title="SPI hub reference — contact p4 1" alt="SPI hub reference — contact p4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-2.png" title="SPI hub reference — contact p4 2" alt="SPI hub reference — contact p4 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-3.png" title="SPI hub reference — contact p4 3" alt="SPI hub reference — contact p4 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-4.png" title="SPI hub reference — contact p4 4" alt="SPI hub reference — contact p4 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-5.png" title="SPI hub reference — contact p4 5" alt="SPI hub reference — contact p4 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-6.png" title="SPI hub reference — contact p4 6" alt="SPI hub reference — contact p4 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-7" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-7.png" title="SPI hub reference — contact p4 7" alt="SPI hub reference — contact p4 7" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-8" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-8.png" title="SPI hub reference — contact p4 8" alt="SPI hub reference — contact p4 8" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p4-9" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p4-9.png" title="SPI hub reference — contact p4 9" alt="SPI hub reference — contact p4 9" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-0.png" title="SPI hub reference — contact p5 0" alt="SPI hub reference — contact p5 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-1.png" title="SPI hub reference — contact p5 1" alt="SPI hub reference — contact p5 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-2" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-2.png" title="SPI hub reference — contact p5 2" alt="SPI hub reference — contact p5 2" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-3" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-3.png" title="SPI hub reference — contact p5 3" alt="SPI hub reference — contact p5 3" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-4" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-4.png" title="SPI hub reference — contact p5 4" alt="SPI hub reference — contact p5 4" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-5" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-5.png" title="SPI hub reference — contact p5 5" alt="SPI hub reference — contact p5 5" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-6" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-6.png" title="SPI hub reference — contact p5 6" alt="SPI hub reference — contact p5 6" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-7" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-7.png" title="SPI hub reference — contact p5 7" alt="SPI hub reference — contact p5 7" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-8" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-8.png" title="SPI hub reference — contact p5 8" alt="SPI hub reference — contact p5 8" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-p5-9" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-p5-9.png" title="SPI hub reference — contact p5 9" alt="SPI hub reference — contact p5 9" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r1-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r1-0.png" title="SPI hub reference — contact r1 0" alt="SPI hub reference — contact r1 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r1-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r1-1.png" title="SPI hub reference — contact r1 1" alt="SPI hub reference — contact r1 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r2-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r2-0.png" title="SPI hub reference — contact r2 0" alt="SPI hub reference — contact r2 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r2-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r2-1.png" title="SPI hub reference — contact r2 1" alt="SPI hub reference — contact r2 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r3-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r3-0.png" title="SPI hub reference — contact r3 0" alt="SPI hub reference — contact r3 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r3-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r3-1.png" title="SPI hub reference — contact r3 1" alt="SPI hub reference — contact r3 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r4-0" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r4-0.png" title="SPI hub reference — contact r4 0" alt="SPI hub reference — contact r4 0" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-hub-source-derived-contact-r4-1" src="/images/extensions/historical-spi-hub/guides/source-derived-annotated/contact-r4-1.png" title="SPI hub reference — contact r4 1" alt="SPI hub reference — contact r4 1" caption="Front-view contact reference. Check host allocation, bus arbitration, supply ratings and physical mating before connecting." width=420 %}

</details>

[Download the unmodified native source, upstream licence and drawing notice](/images/extensions/historical-spi-hub/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below records connectivity. Check cable orientation and continuity on the board.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
|---|---|---|
| P1 | Smoothie-teer-S | 1 → +3V3; 2 → +5V; 3 → /CS5; 4 → /CS3; 5 → /CS4; 6 → /CS2; 7 → /MOSI; 8 → /MISO; 9 → /SCK; 10 → GND |
| D1 | LED | 1 → Net-(D1-Pad1); 2 → +3V3 |
| D2 | LED | 1 → Net-(D2-Pad1); 2 → +3V3 |
| D3 | LED | 1 → Net-(D3-Pad1); 2 → +3V3 |
| D4 | LED | 1 → Net-(D4-Pad1); 2 → +3V3 |
| P2 | Smoothie-teer-S | 1 → +3V3; 2 → +5V; 3 → Net-(P2-Pad3); 4 → Net-(P2-Pad4); 5 → Net-(P2-Pad5); 6 → /CS2; 7 → /MOSI; 8 → /MISO; 9 → /SCK; 10 → GND |
| P3 | Smoothie-teer-S | 1 → +3V3; 2 → +5V; 3 → Net-(P3-Pad3); 4 → Net-(P3-Pad4); 5 → Net-(P3-Pad5); 6 → /CS3; 7 → /MOSI; 8 → /MISO; 9 → /SCK; 10 → GND |
| P4 | Smoothie-teer-S | 1 → +3V3; 2 → +5V; 3 → Net-(P4-Pad3); 4 → Net-(P4-Pad4); 5 → Net-(P4-Pad5); 6 → /CS4; 7 → /MOSI; 8 → /MISO; 9 → /SCK; 10 → GND |
| P5 | Smoothie-teer-S | 1 → +3V3; 2 → +5V; 3 → Net-(P5-Pad3); 4 → Net-(P5-Pad4); 5 → Net-(P5-Pad5); 6 → /CS5; 7 → /MOSI; 8 → /MISO; 9 → /SCK; 10 → GND |

</div>

</details>

</details>

## Connect and try it

For two sensors, attach them to P2 and P3 and arrange independent CS2/CS3 control while sharing MOSI/MISO/SCK and ground. Match logic voltage, SPI mode, clock rate and inactive tri-state behavior. The hub’s older S-socket pinout must be mapped to a Prime hardware SPI port; GF’s GPIO map is not an SPI peripheral mapping.

## Smoothieware use

The hub itself needs no driver. Each sensor still requires a supported firmware driver and independent chip select. Choose the `spi_channel` value that matches the Prime SPI bus you wire it to.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
