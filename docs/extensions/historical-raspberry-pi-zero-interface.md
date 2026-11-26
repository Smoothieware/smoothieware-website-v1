---
layout: default
title: "Raspberry Pi Zero carrier interface"
permalink: /extensions/historical-raspberry-pi-zero-interface
---

# Raspberry Pi Zero carrier interface

This carrier connects a Pi Zero’s GPIO/UART to an earlier Smoothieboard2 host connector and provides a regulator and serial indicator circuitry. Unlike the separate Ethernet board, it does not contain the ENC28J60 Ethernet controller.

## Original design and compatibility

This board comes from the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Rpi-zero). The original host generation predates Smoothieboard V2 Prime; check connector compatibility contact by contact.

## Power, signals and controls

P3 is the 40-contact Pi interface; P2/P5 expose odd/even rows. P3.8/.10 are serial HTXSRX/HRXSTX, routed to P4.4/.5. P4.1 is /3v3-smoothie, while Pi supply is /3v3-pi; their differing net names must be respected. P1.1 is ground and .2 regulator input; U1 is R-78HB5.0-0.5L. D1/D2 form supply paths and D3/D4 the indicator circuitry. /Ground and GND are not automatically equivalent.

### Board functions and connector roles

Start with these views. The Pi header and GPIO breakouts share the Pi-side nets; the host connector has a separate ground and 3.3 V rail. Do not bridge the ground domains, and do not choose a power connection from these drawings alone. Read the power and wiring notes below.

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-00-overview" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-01-ground-domains" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-01-ground-domains.png" title="01 Ground Domains" alt="01 Ground Domains" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-02-uart-paths" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-02-uart-paths.png" title="02 Uart Paths" alt="02 Uart Paths" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-03-power-paths" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-03-power-paths.png" title="03 Power Paths" alt="03 Power Paths" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p2-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p2-2.png" title="P2 2" alt="P2 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p2-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p2-3.png" title="P2 3" alt="P2 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p2-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p2-4.png" title="P2 4" alt="P2 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-1.png" title="P3 1" alt="P3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-2.png" title="P3 2" alt="P3 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-3.png" title="P3 3" alt="P3 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-4.png" title="P3 4" alt="P3 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-5.png" title="P3 5" alt="P3 5" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-6.png" title="P3 6" alt="P3 6" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-7.png" title="P3 7" alt="P3 7" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p3-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p3-8.png" title="P3 8" alt="P3 8" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p4-1.png" title="P4 1" alt="P4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p4-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p4-2.png" title="P4 2" alt="P4 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p4-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p4-3.png" title="P4 3" alt="P4 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p5-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p5-1.png" title="P5 1" alt="P5 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p5-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p5-2.png" title="P5 2" alt="P5 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p5-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p5-3.png" title="P5 3" alt="P5 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-compact-function-reader-p5-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/reader-p5-4.png" title="P5 4" alt="P5 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Component and contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-00-overview" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/00-overview.png" title="Pi Zero reference" alt="Pi Zero reference" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-c1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/c1-1.png" title="C1: contacts" alt="C1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-c1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-c1-0.png" title="C1.1: pad" alt="C1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-c1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-c1-1.png" title="C1.2: pad" alt="C1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d1-0.png" title="D1.1: pad" alt="D1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d1-1.png" title="D1.2: pad" alt="D1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d2-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d2-0.png" title="D2.1: pad" alt="D2.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d2-1.png" title="D2.2: pad" alt="D2.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d3-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d3-0.png" title="D3.1: pad" alt="D3.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d3-1.png" title="D3.2: pad" alt="D3.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d4-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d4-0.png" title="D4.1: pad" alt="D4.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-d4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-d4-1.png" title="D4.2: pad" alt="D4.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-m1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-m1-0.png" title="M1.1: pad" alt="M1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-m2-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-m2-0.png" title="M2.1: pad" alt="M2.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-m3-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-m3-0.png" title="M3.1: pad" alt="M3.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-m4-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-m4-0.png" title="M4.1: pad" alt="M4.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p1-0.png" title="P1.1: pad" alt="P1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p1-1.png" title="P1.2: pad" alt="P1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-0.png" title="P2.1: pad" alt="P2.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-1.png" title="P2.2: pad" alt="P2.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-10.png" title="P2.11: pad" alt="P2.11: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-11.png" title="P2.12: pad" alt="P2.12: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-12" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-12.png" title="P2.13: pad" alt="P2.13: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-13" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-13.png" title="P2.14: pad" alt="P2.14: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-14" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-14.png" title="P2.15: pad" alt="P2.15: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-15.png" title="P2.16: pad" alt="P2.16: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-16" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-16.png" title="P2.17: pad" alt="P2.17: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-17" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-17.png" title="P2.18: pad" alt="P2.18: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-18" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-18.png" title="P2.19: pad" alt="P2.19: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-19" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-19.png" title="P2.20: pad" alt="P2.20: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-2.png" title="P2.3: pad" alt="P2.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-3.png" title="P2.4: pad" alt="P2.4: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-4.png" title="P2.5: pad" alt="P2.5: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-5.png" title="P2.6: pad" alt="P2.6: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-6.png" title="P2.7: pad" alt="P2.7: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-7.png" title="P2.8: pad" alt="P2.8: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-8.png" title="P2.9: pad" alt="P2.9: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p2-9" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p2-9.png" title="P2.10: pad" alt="P2.10: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-0.png" title="P3.1: pad" alt="P3.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-1.png" title="P3.2: pad" alt="P3.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-10.png" title="P3.11: pad" alt="P3.11: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-11.png" title="P3.12: pad" alt="P3.12: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-12" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-12.png" title="P3.13: pad" alt="P3.13: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-13" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-13.png" title="P3.14: pad" alt="P3.14: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-14" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-14.png" title="P3.15: pad" alt="P3.15: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-15.png" title="P3.16: pad" alt="P3.16: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-16" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-16.png" title="P3.17: pad" alt="P3.17: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-17" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-17.png" title="P3.18: pad" alt="P3.18: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-18" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-18.png" title="P3.19: pad" alt="P3.19: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-19" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-19.png" title="P3.20: pad" alt="P3.20: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-2.png" title="P3.3: pad" alt="P3.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-20" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-20.png" title="P3.21: pad" alt="P3.21: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-21" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-21.png" title="P3.22: pad" alt="P3.22: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-22" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-22.png" title="P3.23: pad" alt="P3.23: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-23" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-23.png" title="P3.24: pad" alt="P3.24: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-24" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-24.png" title="P3.25: pad" alt="P3.25: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-25" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-25.png" title="P3.26: pad" alt="P3.26: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-26" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-26.png" title="P3.27: pad" alt="P3.27: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-27" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-27.png" title="P3.28: pad" alt="P3.28: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-28" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-28.png" title="P3.29: pad" alt="P3.29: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-29" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-29.png" title="P3.30: pad" alt="P3.30: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-3.png" title="P3.4: pad" alt="P3.4: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-30" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-30.png" title="P3.31: pad" alt="P3.31: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-31" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-31.png" title="P3.32: pad" alt="P3.32: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-32" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-32.png" title="P3.33: pad" alt="P3.33: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-33" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-33.png" title="P3.34: pad" alt="P3.34: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-34" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-34.png" title="P3.35: pad" alt="P3.35: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-35" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-35.png" title="P3.36: pad" alt="P3.36: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-36" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-36.png" title="P3.37: pad" alt="P3.37: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-37" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-37.png" title="P3.38: pad" alt="P3.38: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-38" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-38.png" title="P3.39: pad" alt="P3.39: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-39" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-39.png" title="P3.40: pad" alt="P3.40: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-4.png" title="P3.5: pad" alt="P3.5: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-5.png" title="P3.6: pad" alt="P3.6: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-6.png" title="P3.7: pad" alt="P3.7: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-7.png" title="P3.8: pad" alt="P3.8: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-8.png" title="P3.9: pad" alt="P3.9: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p3-9" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p3-9.png" title="P3.10: pad" alt="P3.10: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-0.png" title="P4.11: pad" alt="P4.11: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-1.png" title="P4.11: pad" alt="P4.11: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-10.png" title="P4.9: pad" alt="P4.9: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-11.png" title="P4.10: pad" alt="P4.10: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-2.png" title="P4.1: pad" alt="P4.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-3.png" title="P4.2: pad" alt="P4.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-4.png" title="P4.3: pad" alt="P4.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-5.png" title="P4.4: pad" alt="P4.4: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-6.png" title="P4.5: pad" alt="P4.5: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-7.png" title="P4.6: pad" alt="P4.6: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-8.png" title="P4.7: pad" alt="P4.7: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p4-9" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p4-9.png" title="P4.8: pad" alt="P4.8: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-0.png" title="P5.1: pad" alt="P5.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-1.png" title="P5.2: pad" alt="P5.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-10.png" title="P5.11: pad" alt="P5.11: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-11.png" title="P5.12: pad" alt="P5.12: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-12" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-12.png" title="P5.13: pad" alt="P5.13: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-13" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-13.png" title="P5.14: pad" alt="P5.14: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-14" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-14.png" title="P5.15: pad" alt="P5.15: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-15.png" title="P5.16: pad" alt="P5.16: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-16" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-16.png" title="P5.17: pad" alt="P5.17: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-17" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-17.png" title="P5.18: pad" alt="P5.18: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-18" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-18.png" title="P5.19: pad" alt="P5.19: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-19" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-19.png" title="P5.20: pad" alt="P5.20: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-2.png" title="P5.3: pad" alt="P5.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-3.png" title="P5.4: pad" alt="P5.4: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-4.png" title="P5.5: pad" alt="P5.5: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-5.png" title="P5.6: pad" alt="P5.6: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-6.png" title="P5.7: pad" alt="P5.7: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-7.png" title="P5.8: pad" alt="P5.8: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-8.png" title="P5.9: pad" alt="P5.9: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-p5-9" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-p5-9.png" title="P5.10: pad" alt="P5.10: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q1-0.png" title="Q1.1: pad" alt="Q1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q1-1.png" title="Q1.2: pad" alt="Q1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q1-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q1-2.png" title="Q1.3: pad" alt="Q1.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q2-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q2-0.png" title="Q2.1: pad" alt="Q2.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q2-1.png" title="Q2.2: pad" alt="Q2.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-q2-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-q2-2.png" title="Q2.3: pad" alt="Q2.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r1-0.png" title="R1.1: pad" alt="R1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r1-1.png" title="R1.2: pad" alt="R1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r2-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r2-0.png" title="R2.1: pad" alt="R2.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r2-1.png" title="R2.2: pad" alt="R2.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r3-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r3-0.png" title="R3.1: pad" alt="R3.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r3-1.png" title="R3.2: pad" alt="R3.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r4-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r4-0.png" title="R4.1: pad" alt="R4.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-r4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-r4-1.png" title="R4.2: pad" alt="R4.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-u1-0" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-u1-0.png" title="U1.1: pad" alt="U1.1: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-u1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-u1-1.png" title="U1.2: pad" alt="U1.2: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-contact-u1-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/contact-u1-2.png" title="U1.3: pad" alt="U1.3: pad" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-d1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/d1-1.png" title="D1: contacts" alt="D1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-d2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/d2-1.png" title="D2: contacts" alt="D2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-d3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/d3-1.png" title="D3: contacts" alt="D3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-d4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/d4-1.png" title="D4: contacts" alt="D4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-m1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/m1-1.png" title="M1: contacts" alt="M1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-m2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/m2-1.png" title="M2: contacts" alt="M2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-m3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/m3-1.png" title="M3: contacts" alt="M3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-m4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/m4-1.png" title="M4: contacts" alt="M4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p1-1.png" title="P1: contacts" alt="P1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p2-1.png" title="P2: contacts" alt="P2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p2-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p2-2.png" title="P2: contacts" alt="P2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p2-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p2-3.png" title="P2: contacts" alt="P2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p2-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p2-4.png" title="P2: contacts" alt="P2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-1.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-2.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-3.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-4.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-5.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-6.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-7.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p3-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p3-8.png" title="P3: contacts" alt="P3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p4-1.png" title="P4: contacts" alt="P4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p4-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p4-2.png" title="P4: contacts" alt="P4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p4-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p4-3.png" title="P4: contacts" alt="P4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p5-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p5-1.png" title="P5: contacts" alt="P5: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p5-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p5-2.png" title="P5: contacts" alt="P5: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p5-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p5-3.png" title="P5: contacts" alt="P5: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-p5-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/p5-4.png" title="P5: contacts" alt="P5: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-q1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/q1-1.png" title="Q1: contacts" alt="Q1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-q2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/q2-1.png" title="Q2: contacts" alt="Q2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-r1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/r1-1.png" title="R1: contacts" alt="R1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-r2-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/r2-1.png" title="R2: contacts" alt="R2: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-r3-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/r3-1.png" title="R3: contacts" alt="R3: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-r4-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/r4-1.png" title="R4: contacts" alt="R4: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-1.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-10.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-11.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-12" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-12.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-2.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-3" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-3.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-4" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-4.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-5.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-6" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-6.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-7" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-7.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-8" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-8.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-source-net-keys-9" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/source-net-keys-9.png" title="Net keys" alt="Net keys" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-function-u1-1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/u1-1.png" title="U1: contacts" alt="U1: contacts" caption="Keep Pi and host grounds and 3.3 V domains separate. Leaders identify contacts; they are not installation wires." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-raspberry-pi-zero-interface/guides/source-derived-reader/NOTICE.md).

<details markdown="1">
<summary>Further references and CAD source download</summary>

### Annotated connector and circuit reference

These sheets explain the connectors, jumpers and circuit components with numbered contact markers and function labels. Check fitted component identity and connector mating orientation, and follow the power and wiring limits in this guide.

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-u1-instance-1-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/u1-instance-1-functions-01.png" title="U1 · 5V supply regulator" alt="U1 · 5V supply regulator — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

<details>
<summary>All remaining connector, jumper and component-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-m1-instance-2-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/m1-instance-2-functions-01.png" title="M1 · Board mounting" alt="M1 · Board mounting — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-m2-instance-3-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/m2-instance-3-functions-01.png" title="M2 · Board mounting" alt="M2 · Board mounting — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-m3-instance-4-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/m3-instance-4-functions-01.png" title="M3 · Board mounting" alt="M3 · Board mounting — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-m4-instance-5-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/m4-instance-5-functions-01.png" title="M4 · Board mounting" alt="M4 · Board mounting — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-c1-instance-6-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/c1-instance-6-functions-01.png" title="C1 · 3.3uF/100V circuit capacitor" alt="C1 · 3.3uF/100V circuit capacitor — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-d1-instance-7-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/d1-instance-7-functions-01.png" title="D1 · Schottky supply OR diode" alt="D1 · Schottky supply OR diode — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-d2-instance-8-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/d2-instance-8-functions-01.png" title="D2 · Schottky supply OR diode" alt="D2 · Schottky supply OR diode — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p1-instance-9-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p1-instance-9-functions-01.png" title="P1 · Regulator input supply" alt="P1 · Regulator input supply — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p2-instance-10-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p2-instance-10-functions-01.png" title="P2 · Original Pi GPIO breakout" alt="P2 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p2-instance-10-functions-02" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p2-instance-10-functions-02.png" title="P2 · Original Pi GPIO breakout" alt="P2 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p2-instance-10-functions-03" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p2-instance-10-functions-03.png" title="P2 · Original Pi GPIO breakout" alt="P2 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p2-instance-10-functions-04" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p2-instance-10-functions-04.png" title="P2 · Original Pi GPIO breakout" alt="P2 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-01.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-02" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-02.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-03" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-03.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-04" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-04.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-05" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-05.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-06" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-06.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-07" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-07.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p3-instance-11-functions-08" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p3-instance-11-functions-08.png" title="P3 · Original Pi GPIO breakout" alt="P3 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p4-instance-12-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p4-instance-12-functions-01.png" title="P4 · Original host serial header" alt="P4 · Original host serial header — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p4-instance-12-functions-02" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p4-instance-12-functions-02.png" title="P4 · Original host serial header" alt="P4 · Original host serial header — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p4-instance-12-functions-03" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p4-instance-12-functions-03.png" title="P4 · Original host serial header" alt="P4 · Original host serial header — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p5-instance-13-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p5-instance-13-functions-01.png" title="P5 · Original Pi GPIO breakout" alt="P5 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p5-instance-13-functions-02" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p5-instance-13-functions-02.png" title="P5 · Original Pi GPIO breakout" alt="P5 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p5-instance-13-functions-03" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p5-instance-13-functions-03.png" title="P5 · Original Pi GPIO breakout" alt="P5 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-p5-instance-13-functions-04" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/p5-instance-13-functions-04.png" title="P5 · Original Pi GPIO breakout" alt="P5 · Original Pi GPIO breakout — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-d3-instance-14-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/d3-instance-14-functions-01.png" title="D3 · UART level LED; HIGH lights" alt="D3 · UART level LED; HIGH lights — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-d4-instance-15-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/d4-instance-15-functions-01.png" title="D4 · UART level LED; HIGH lights" alt="D4 · UART level LED; HIGH lights — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-q1-instance-16-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/q1-instance-16-functions-01.png" title="Q1 · UART HIGH sinks LED return" alt="Q1 · UART HIGH sinks LED return — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-q2-instance-17-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/q2-instance-17-functions-01.png" title="Q2 · UART HIGH sinks LED return" alt="Q2 · UART HIGH sinks LED return — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-r1-instance-18-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/r1-instance-18-functions-01.png" title="R1 · 8.2k LED current resistor" alt="R1 · 8.2k LED current resistor — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-r2-instance-19-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/r2-instance-19-functions-01.png" title="R2 · 8.2k UART gate resistor" alt="R2 · 8.2k UART gate resistor — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-r3-instance-20-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/r3-instance-20-functions-01.png" title="R3 · 8.2k UART gate resistor" alt="R3 · 8.2k UART gate resistor — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reconstructed-r4-instance-21-functions-01" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/r4-instance-21-functions-01.png" title="R4 · 8.2k LED current resistor" alt="R4 · 8.2k LED current resistor — functional reference" caption="Numbered contact positions and function labels; check component fit and connector orientation." width=420 %}

</details>

[Drawing licence, attribution and modification notice](/images/extensions/historical-raspberry-pi-zero-interface/guides/reconstructed-reference/NOTICE.md). The SVG files are editable drawing sources; the matching CAD design and original notices remain available below.

<details>
<summary>Pad locators and CAD source download</summary>

### Pad locators

These locators show the pad positions and board outline, without component artwork.

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-overview" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-overview.png" title="Pi interface" alt="Pi interface — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p2-1-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p2-1-5.png" title="P2 · Pi odd-pin breakout" alt="P2 · Pi odd-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p2-6-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p2-6-10.png" title="P2 · Pi odd-pin breakout" alt="P2 · Pi odd-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p2-11-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p2-11-15.png" title="P2 · Pi odd-pin breakout" alt="P2 · Pi odd-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p2-16-20" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p2-16-20.png" title="P2 · Pi odd-pin breakout" alt="P2 · Pi odd-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-1-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-1-5.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-6-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-6-10.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-11-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-11-15.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-16-20" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-16-20.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-21-25" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-21-25.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-26-30" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-26-30.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-31-35" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-31-35.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p3-36-40" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p3-36-40.png" title="P3 · Pi40-pin connector" alt="P3 · Pi40-pin connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p5-1-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p5-1-5.png" title="P5 · Pi even-pin breakout" alt="P5 · Pi even-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p5-6-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p5-6-10.png" title="P5 · Pi even-pin breakout" alt="P5 · Pi even-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p5-11-15" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p5-11-15.png" title="P5 · Pi even-pin breakout" alt="P5 · Pi even-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p5-16-20" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p5-16-20.png" title="P5 · Pi even-pin breakout" alt="P5 · Pi even-pin breakout — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p1-1-2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p1-1-2.png" title="P1 · External DC input" alt="P1 · External DC input — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p4-1-5" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p4-1-5.png" title="P4 · Host connector" alt="P4 · Host connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p4-6-10" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p4-6-10.png" title="P4 · Host connector" alt="P4 · Host connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-p4-11-11" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-p4-11-11.png" title="P4 · Host connector" alt="P4 · Host connector — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-returns" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-returns.png" title="Return-path warning" alt="Return-path warning — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-power" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-power.png" title="Diode-combined5V" alt="Diode-combined5V — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-rails" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-rails.png" title="Separate3.3V domains" alt="Separate3.3V domains — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-serial" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-serial.png" title="Shared serial nodes" alt="Shared serial nodes — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-breakout" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-breakout.png" title="Breakout correspondence" alt="Breakout correspondence — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-mechanical" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-mechanical.png" title="Host mechanical pads" alt="Host mechanical pads — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-led1" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-led1.png" title="First serial indicator" alt="First serial indicator — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-led2" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-led2.png" title="Second serial indicator" alt="Second serial indicator — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-interface-reader-compact-mounts" src="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

[Download the CAD source, upstream licence and drawing notice](/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/native-source-and-notices.zip). Keep the included source licence and notices with derivatives.

The contact table below records connectivity; check physical cable orientation and routed-board continuity yourself.

<details markdown="1">
<summary>Connector contact table</summary>

<div class="extension-contact-table" role="region" aria-label="Connector contacts; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
|---|---|---|
| P3 | CONN_02X20 | 1 → /3v3-pi; 2 → +5V; 3 → /GPIO02; 4 → +5V; 5 → /GPIO03; 6 → /Ground; 7 → /GPIO04; 8 → /HTXSRX; 9 → /Ground; 10 → /HRXSTX; 11 → /GPIO017; 12 → /GPIO018; 13 → /GPIO027; 14 → /Ground; 15 → /GPIO022; 16 → /GPIO023; 17 → /3v3-pi; 18 → /GPIO024; 19 → /GPIO010; 20 → /Ground; 21 → /GPIO09; 22 → /GPIO025; 23 → /GPIO011; 24 → /GPIO08; 25 → /Ground; 26 → /GPIO07; 27 → /ID_SD; 28 → /ID_SC; 29 → /GPIO05; 30 → /Ground; 31 → /GPIO06; 32 → /GPIO012; 33 → /GPIO013; 34 → /Ground; 35 → /GPIO019; 36 → /GPIO016; 37 → /GPIO026; 38 → /GPIO020; 39 → /Ground; 40 → /GPIO021 |
| P4 | CONN_02X05 | 1 → /3v3-smoothie; 2 → Net-(D2-Pad2); 3 → /GPIO019; 4 → /HTXSRX; 5 → /HRXSTX; 6 → /GPIO021; 7 → /GPIO026; 8 → Net-(P4-Pad8); 9 → Net-(P4-Pad9); 10 → GND |
| P1 | CONN_01X02 | 1 → GND; 2 → Net-(C1-Pad1) |
| D1 | MBRA210LT3G | 1 → +5V; 2 → Net-(D1-Pad2) |
| P5 | CONN_01X20 | 1 → +5V; 2 → +5V; 3 → /Ground; 4 → /HTXSRX; 5 → /HRXSTX; 6 → /GPIO018; 7 → /Ground; 8 → /GPIO023; 9 → /GPIO024; 10 → /Ground; 11 → /GPIO025; 12 → /GPIO08; 13 → /GPIO07; 14 → /ID_SC; 15 → /Ground; 16 → /GPIO012; 17 → /Ground; 18 → /GPIO016; 19 → /GPIO020; 20 → /GPIO021 |
| P2 | CONN_01X20 | 1 → /3v3-pi; 2 → /GPIO02; 3 → /GPIO03; 4 → /GPIO04; 5 → /Ground; 6 → /GPIO017; 7 → /GPIO027; 8 → /GPIO022; 9 → /3v3-pi; 10 → /GPIO010; 11 → /GPIO09; 12 → /GPIO011; 13 → /Ground; 14 → /ID_SD; 15 → /GPIO05; 16 → /GPIO06; 17 → /GPIO013; 18 → /GPIO019; 19 → /GPIO026; 20 → /Ground |
| D2 | MBRA210LT3G | 1 → +5V; 2 → Net-(D2-Pad2) |
| D3 | LED | 1 → Net-(D3-Pad1); 2 → Net-(D3-Pad2) |
| D4 | LED | 1 → Net-(D4-Pad1); 2 → Net-(D4-Pad2) |

</div>

</details>

</details>

</details>

## Connect and try it

To use it as a serial G-code companion, first check rail separation, ground continuity and UART direction. Pi physical contact numbers are not STM32 pin names. Prime needs an explicitly selected UART pair and a custom cable; do not plug P4 into GF merely because the connector has ten contacts.

### Prime serial wiring

The serial lines require a crossover at the carrier host connector:

| Direction | Smoothieboard V2 Prime | Carrier | Pi header |
|---|---|---|---|
| Prime sends to Pi | GB/J33 contact 4, PB9 TX | P4 contact 5, `/HRXSTX` | P3 physical contact 10, GPIO15 RX |
| Pi sends to Prime | GB/J33 contact 5, PH14 RX | P4 contact 4, `/HTXSRX` | P3 physical contact 8, GPIO14 TX |

**Do not use a same-numbered 4-to-4 / 5-to-5 cable:** that would join the two transmitters together. The [official Raspberry Pi UART documentation](https://www.raspberrypi.com/documentation/computers/configuration.html#configure-uarts) identifies GPIO14 as TX and GPIO15 as RX. These are 3.3 V logic signals, not RS-232 voltage levels.

This table covers the signals only; it is not a complete powered installation. Do not power the connection from this table. P4 contact 10 is `GND`, while the Pi-header returns are `/Ground`; do not assume they are joined. Resolve the return path, indicator loading and unpowered-device behaviour first. P4 contact 2 feeds one diode path and the regulator feeds another into Pi +5 V: do not connect either Prime power rail on the basis of this table. Establish which side owns the supply, diode losses, current budget and backfeed behaviour before connecting power.

## Smoothieware use

### Host setup

The Prime UART console is the software endpoint. The serial lines cross over, and you must provide a common return and decide power ownership before making a cable. Pi-header grounds use /Ground while the Gadgeteer return is GND; do not assume they are joined. Then select the UART and client setup for your Pi model and Linux image; this board defines no /dev path or boot setting.

You need Linux sender software and a matching Smoothieware serial endpoint. The Prime console provides channel 1 on PB9 TX/PH14 RX with a configurable baud rate. Check loaded signal levels, return, power and indicator behaviour on your installation.

### Configure the Prime serial command console

After you have resolved the carrier’s return, power ownership and loaded logic levels, reserve Prime UART channel 1 and PB9/PH14 for this connection. Merge this section into the controller configuration, keeping only one definition of the console:

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

The [console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) reads these seven settings. Channel 1 selects PB9 TX and PH14 RX in the UART HAL; it does not assign arbitrary GPIO. Use the crossed GB/J33 contacts in the table above. `console = false` would initialize an auxiliary UART without its command-console reader, so it is not the command-host setting shown here.

Configure the actual Pi model and installed Linux image to expose the corresponding UART, release any conflicting Linux serial console, and use 115200 bit/s, 8 data bits, no parity, one stop bit, with hardware flow control off. The primary UART differs between Pi Zero variants: do not assume `ttyAMA0` for all models. Once the electrical prerequisites are met, send `version` followed by LF (`\n`). CRLF also works; CR alone is ignored and does not dispatch the command. The [registered version command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) returns build information without requesting motion. Its response identifies the running build; it does not check the carrier’s wiring.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
