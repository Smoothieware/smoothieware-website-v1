---
layout: default
title: "Raspberry Pi Zero carrier with Ethernet"
permalink: /extensions/historical-raspberry-pi-zero-ethernet
---

# Raspberry Pi Zero carrier with Ethernet

This companion-computer carrier adds an ENC28J60-I/ML SPI Ethernet controller to a Raspberry Pi Zero interface. The Ethernet controller belongs to the Pi-side circuit; it does not automatically become Smoothieware’s network interface.

## Compatibility

This guide describes the board in the [original Smoothieboard2 source files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/RPi%20zero%20with%20ethernet). It was designed for a host generation that predates Smoothieboard V2 Prime. Establish connector compatibility contact by contact.

## Power, signals and controls

P3 is the Pi 40-contact interface, P2/P5 break out its two rows. Pi SPI uses P3.19 MOSI, .21 MISO, .23 SCK and .22 CS; U2.3/.2/.4/.5 respectively. Pi serial is P3.8 HTXSRX and .10 HRXSTX. P4 is the old host connector, with serial on .4/.5. U1 is R-78HB5.0-0.5L; P1.1 is ground and .2 raw regulator input. The design names /Ground and GND separately: do not assume they are tied.

Note an important power distinction: **host P4.1 (`+3V3`) supplies the ENC28J60** at U2.11/.15/.16/.21/.24. The Pi's P3.1/.17 rail is named `/3v3-pi` and is a separate net; it is not the Ethernet supply on this board. The controller's ground pins return to host **P4.10 (`GND`)**, while the Pi header ground is `/Ground`. Their different net identities mean the board does not by itself complete the Pi-to-Ethernet signal-return path. Do not assume the 40-contact Pi header alone powers a working Ethernet interface, or bridge these nets without checking the complete assembly and power paths.

### Annotated connector and circuit reference

These functional sheets explain the connectors, jumpers and circuit components with numbered contact markers and pill callouts. They supplement the contact tables. They do not show fitted component identity or connector mating orientation. Follow the power and wiring limitations in this guide.

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-00-overview" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-con1-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-con1-1.png" title="Con1 1" alt="Con1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-con1-2" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-con1-2.png" title="Con1 2" alt="Con1 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-con1-3" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-con1-3.png" title="Con1 3" alt="Con1 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-con1-4" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-con1-4.png" title="Con1 4" alt="Con1 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p1-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p1-1.png" title="P1 1" alt="P1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p2-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p2-1.png" title="P2 1" alt="P2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p2-2" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p2-2.png" title="P2 2" alt="P2 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p2-3" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p2-3.png" title="P2 3" alt="P2 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p2-4" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p2-4.png" title="P2 4" alt="P2 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-1.png" title="P3 1" alt="P3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-2" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-2.png" title="P3 2" alt="P3 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-3" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-3.png" title="P3 3" alt="P3 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-4" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-4.png" title="P3 4" alt="P3 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-5" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-5.png" title="P3 5" alt="P3 5" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-6" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-6.png" title="P3 6" alt="P3 6" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-7" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-7.png" title="P3 7" alt="P3 7" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p3-8" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p3-8.png" title="P3 8" alt="P3 8" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p4-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p4-1.png" title="P4 1" alt="P4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p4-2" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p4-2.png" title="P4 2" alt="P4 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p4-3" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p4-3.png" title="P4 3" alt="P4 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p5-1" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p5-1.png" title="P5 1" alt="P5 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p5-2" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p5-2.png" title="P5 2" alt="P5 2" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p5-3" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p5-3.png" title="P5 3" alt="P5 3" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-compact-function-reader-p5-4" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/source-derived-reader-compact/reader-p5-4.png" title="P5 4" alt="P5 4" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact sheets and contact list</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-q1-instance-1-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/q1-instance-1-functions-01.png" title="Q1 · UART HIGH sinks LED return" alt="Q1 · UART HIGH sinks LED return" caption="Numbered contact positions and functional callouts." width=420 %}

<details>
<summary>All remaining connector, jumper and component-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-y1-instance-2-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/y1-instance-2-functions-01.png" title="Y1 · 25MHz Ethernet oscillator" alt="Y1 · 25MHz Ethernet oscillator" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r6-instance-4-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r6-instance-4-functions-01.png" title="R6 · 49.9Ω Ethernet termination" alt="R6 · 49.9Ω Ethernet termination" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c6-instance-5-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c6-instance-5-functions-01.png" title="C6 · 0.1uF circuit capacitor" alt="C6 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c8-instance-6-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c8-instance-6-functions-01.png" title="C8 · 0.1uF circuit capacitor" alt="C8 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-con1-instance-7-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/con1-instance-7-functions-01.png" title="CON1 · HR911105A Ethernet / LEDs" alt="CON1 · HR911105A Ethernet / LEDs" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-con1-instance-7-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/con1-instance-7-functions-02.png" title="CON1 · HR911105A Ethernet / LEDs" alt="CON1 · HR911105A Ethernet / LEDs" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-con1-instance-7-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/con1-instance-7-functions-03.png" title="CON1 · HR911105A Ethernet / LEDs" alt="CON1 · HR911105A Ethernet / LEDs" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-con1-instance-7-functions-04" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/con1-instance-7-functions-04.png" title="CON1 · HR911105A Ethernet / LEDs" alt="CON1 · HR911105A Ethernet / LEDs" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r5-instance-8-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r5-instance-8-functions-01.png" title="R5 · 49.9Ω Ethernet termination" alt="R5 · 49.9Ω Ethernet termination" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c12-instance-9-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c12-instance-9-functions-01.png" title="C12 · 0.1uF circuit capacitor" alt="C12 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r7-instance-10-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r7-instance-10-functions-01.png" title="R7 · 49.9Ω Ethernet termination" alt="R7 · 49.9Ω Ethernet termination" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-01.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-02.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-03.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-04" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-04.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-05" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-05.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-06" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-06.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-07" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-07.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-08" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-08.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u2-instance-11-functions-09" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u2-instance-11-functions-09.png" title="U2 · ENC28J60 Ethernet controller" alt="U2 · ENC28J60 Ethernet controller" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r4-instance-12-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r4-instance-12-functions-01.png" title="R4 · 49.9Ω Ethernet termination" alt="R4 · 49.9Ω Ethernet termination" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-u1-instance-13-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/u1-instance-13-functions-01.png" title="U1 · 5V supply regulator" alt="U1 · 5V supply regulator" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-m1-instance-14-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/m1-instance-14-functions-01.png" title="M1 · Board mounting" alt="M1 · Board mounting" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-m2-instance-15-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/m2-instance-15-functions-01.png" title="M2 · Board mounting" alt="M2 · Board mounting" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-m3-instance-16-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/m3-instance-16-functions-01.png" title="M3 · Board mounting" alt="M3 · Board mounting" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-m4-instance-17-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/m4-instance-17-functions-01.png" title="M4 · Board mounting" alt="M4 · Board mounting" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-d1-instance-18-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/d1-instance-18-functions-01.png" title="D1 · Schottky supply OR diode" alt="D1 · Schottky supply OR diode" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-d2-instance-19-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/d2-instance-19-functions-01.png" title="D2 · Schottky supply OR diode" alt="D2 · Schottky supply OR diode" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p1-instance-20-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p1-instance-20-functions-01.png" title="P1 · Regulator input supply" alt="P1 · Regulator input supply" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p2-instance-21-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p2-instance-21-functions-01.png" title="P2 · Pi GPIO breakout" alt="P2 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p2-instance-21-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p2-instance-21-functions-02.png" title="P2 · Pi GPIO breakout" alt="P2 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p2-instance-21-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p2-instance-21-functions-03.png" title="P2 · Pi GPIO breakout" alt="P2 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p2-instance-21-functions-04" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p2-instance-21-functions-04.png" title="P2 · Pi GPIO breakout" alt="P2 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-01.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-02.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-03.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-04" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-04.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-05" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-05.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-06" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-06.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-07" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-07.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p3-instance-22-functions-08" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p3-instance-22-functions-08.png" title="P3 · Pi GPIO breakout" alt="P3 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p4-instance-23-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p4-instance-23-functions-01.png" title="P4 · Host serial header" alt="P4 · Host serial header" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p4-instance-23-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p4-instance-23-functions-02.png" title="P4 · Host serial header" alt="P4 · Host serial header" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p4-instance-23-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p4-instance-23-functions-03.png" title="P4 · Host serial header" alt="P4 · Host serial header" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p5-instance-24-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p5-instance-24-functions-01.png" title="P5 · Pi GPIO breakout" alt="P5 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p5-instance-24-functions-02" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p5-instance-24-functions-02.png" title="P5 · Pi GPIO breakout" alt="P5 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p5-instance-24-functions-03" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p5-instance-24-functions-03.png" title="P5 · Pi GPIO breakout" alt="P5 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-p5-instance-24-functions-04" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/p5-instance-24-functions-04.png" title="P5 · Pi GPIO breakout" alt="P5 · Pi GPIO breakout" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c2-instance-25-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c2-instance-25-functions-01.png" title="C2 · 10uF circuit capacitor" alt="C2 · 10uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c3-instance-26-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c3-instance-26-functions-01.png" title="C3 · 18pF circuit capacitor" alt="C3 · 18pF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c4-instance-27-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c4-instance-27-functions-01.png" title="C4 · 18pF circuit capacitor" alt="C4 · 18pF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c5-instance-28-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c5-instance-28-functions-01.png" title="C5 · 1uF circuit capacitor" alt="C5 · 1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c7-instance-29-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c7-instance-29-functions-01.png" title="C7 · 0.1uF circuit capacitor" alt="C7 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c9-instance-30-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c9-instance-30-functions-01.png" title="C9 · 0.1uF circuit capacitor" alt="C9 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c11-instance-31-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c11-instance-31-functions-01.png" title="C11 · 0.1uF circuit capacitor" alt="C11 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-l1-instance-32-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/l1-instance-32-functions-01.png" title="L1 · Magnetics supply ferrite" alt="L1 · Magnetics supply ferrite" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r1-instance-33-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r1-instance-33-functions-01.png" title="R1 · 2.32k Ethernet bias" alt="R1 · 2.32k Ethernet bias" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r3-instance-34-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r3-instance-34-functions-01.png" title="R3 · 220Ω jack LED resistor" alt="R3 · 220Ω jack LED resistor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r2-instance-35-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r2-instance-35-functions-01.png" title="R2 · 220Ω jack LED resistor" alt="R2 · 220Ω jack LED resistor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c13-instance-36-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c13-instance-36-functions-01.png" title="C13 · 0.1uF circuit capacitor" alt="C13 · 0.1uF circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c10-instance-38-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c10-instance-38-functions-01.png" title="C10 · 10uF lowest circuit capacitor" alt="C10 · 10uF lowest circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-d3-instance-39-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/d3-instance-39-functions-01.png" title="D3 · UART level LED; HIGH lights" alt="D3 · UART level LED; HIGH lights" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-d4-instance-40-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/d4-instance-40-functions-01.png" title="D4 · UART level LED; HIGH lights" alt="D4 · UART level LED; HIGH lights" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-q2-instance-41-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/q2-instance-41-functions-01.png" title="Q2 · UART HIGH sinks LED return" alt="Q2 · UART HIGH sinks LED return" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r8-instance-42-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r8-instance-42-functions-01.png" title="R8 · 220Ω UART LED resistor" alt="R8 · 220Ω UART LED resistor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-r9-instance-43-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/r9-instance-43-functions-01.png" title="R9 · 220Ω UART LED resistor" alt="R9 · 220Ω UART LED resistor" caption="Numbered contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-raspberry-pi-zero-ethernet-reconstructed-c1-instance-44-functions-01" src="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/c1-instance-44-functions-01.png" title="C1 · 3.3uF/100V circuit capacitor" alt="C1 · 3.3uF/100V circuit capacitor" caption="Numbered contact positions and functional callouts." width=420 %}

</details>

[Drawing licence, attribution and modification notice](/images/extensions/historical-raspberry-pi-zero-ethernet/guides/reconstructed-reference/NOTICE.md). The SVG files are editable drawing sources; the design files and notices are available below.

[Download the design files, upstream licence and drawing notice](/images/extensions/historical-raspberry-pi-zero-ethernet/guides/native-contact-reference/native-source-and-notices.zip). Retain the included licence and notices with derivatives.

The contact list below gives the connections. Check physical cable orientation and continuity before wiring.

<details markdown="1">
<summary>Contact list</summary>

<div class="extension-contact-table" role="region" aria-label="Contact list; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
|---|---|---|
| P3 | CONN_02X20 | 1 → /3v3-pi; 2 → +5V; 3 → /GPIO02; 4 → +5V; 5 → /GPIO03; 6 → /Ground; 7 → /GPIO04; 8 → /HTXSRX; 9 → /Ground; 10 → /HRXSTX; 11 → /GPIO017; 12 → /GPIO018; 13 → /GPIO027; 14 → /Ground; 15 → /GPIO022; 16 → /GPIO023; 17 → /3v3-pi; 18 → /GPIO024; 19 → /MOSI; 20 → /Ground; 21 → /MISO; 22 → /CS; 23 → /SCK; 24 → /GPIO08; 25 → /Ground; 26 → /GPIO07; 27 → /ID_SD; 28 → /ID_SC; 29 → /GPIO05; 30 → /Ground; 31 → /GPIO06; 32 → /GPIO012; 33 → /GPIO013; 34 → /Ground; 35 → /GPIO019; 36 → /GPIO016; 37 → /GPIO026; 38 → /GPIO020; 39 → /Ground; 40 → /GPIO021 |
| P4 | CONN_02X05 | 1 → +3V3; 2 → Net-(D2-Pad2); 3 → /GPIO019; 4 → /HTXSRX; 5 → /HRXSTX; 6 → /GPIO021; 7 → /GPIO026; 8 → Net-(P4-Pad8); 9 → Net-(P4-Pad9); 10 → GND |
| P1 | CONN_01X02 | 1 → GND; 2 → Net-(C1-Pad1) |
| D1 | MBRA210LT3G | 1 → +5V; 2 → Net-(D1-Pad2) |
| P5 | CONN_01X20 | 1 → +5V; 2 → +5V; 3 → /Ground; 4 → /HTXSRX; 5 → /HRXSTX; 6 → /GPIO018; 7 → /Ground; 8 → /GPIO023; 9 → /GPIO024; 10 → /Ground; 11 → /CS; 12 → /GPIO08; 13 → /GPIO07; 14 → /ID_SC; 15 → /Ground; 16 → /GPIO012; 17 → /Ground; 18 → /GPIO016; 19 → /GPIO020; 20 → /GPIO021 |
| P2 | CONN_01X20 | 1 → /3v3-pi; 2 → /GPIO02; 3 → /GPIO03; 4 → /GPIO04; 5 → /Ground; 6 → /GPIO017; 7 → /GPIO027; 8 → /GPIO022; 9 → /3v3-pi; 10 → /MOSI; 11 → /MISO; 12 → /SCK; 13 → /Ground; 14 → /ID_SD; 15 → /GPIO05; 16 → /GPIO06; 17 → /GPIO013; 18 → /GPIO019; 19 → /GPIO026; 20 → /Ground |
| D2 | MBRA210LT3G | 1 → +5V; 2 → Net-(D2-Pad2) |
| D3 | HTX | 1 → Net-(D3-Pad1); 2 → +5V |
| D4 | HRX | 1 → Net-(D4-Pad1); 2 → +5V |

</div>

</details>

</details>

## Connect and try it

A practical goal is a network-connected Pi G-code sender using its UART link to Smoothie. The Ethernet supply originates at host P4.1, as described above. Establish its current budget, the Pi/controller ground-return connection and the Pi Ethernet driver before attempting network use. The crossover to Prime GB/J33 is listed below; an arbitrary ten-contact GPIO port cannot substitute. Keep independent supplies from backfeeding through D1/D2.

### Practical Prime wiring diagram

The serial directions require a crossover at the host connector:

| Direction | Smoothieboard V2 Prime | Carrier | Pi header |
|---|---|---|---|
| Prime sends to Pi | GB/J33 contact 4, PB9 TX | P4 contact 5, `/HRXSTX` | P3 physical contact 10, GPIO15 RX |
| Pi sends to Prime | GB/J33 contact 5, PH14 RX | P4 contact 4, `/HTXSRX` | P3 physical contact 8, GPIO14 TX |

**Do not use a same-numbered 4-to-4 / 5-to-5 cable:** that would join the two transmitters together. The [official Raspberry Pi UART documentation](https://www.raspberrypi.com/documentation/computers/configuration.html#configure-uarts) identifies GPIO14 as TX and GPIO15 as RX. These are 3.3 V logic signals, not RS-232 voltage levels.

This table gives the signal allocation, not a complete powered installation. P4 contact 10 is `GND`, while the Pi-header returns are `/Ground`; the board does not connect them. Resolve the actual return path, indicator loading and unpowered-device behavior first. P4 contact 2 feeds one diode path and the regulator feeds another into Pi +5 V: neither Prime power rail may be used on the strength of this table alone. Establish supply ownership, diode losses, current budget and backfeed behavior before connecting power.

## Smoothieware use

### Host setup still required

This carrier adds an ENC28J60 network interface for the Pi; that Linux-side interface is separate from the Prime UART command endpoint. The design files do not supply a matched Linux overlay, driver setup or sender configuration. It also distinguishes /Ground at Pi-header returns from GND at the Gadgeteer/ENC circuitry, so verify the actual return connection before any UART hookup. Do not copy a standard Pi pin-mux or ENC28J60 overlay command without matching the fitted board, interrupt/chip-select wiring and installed image.

The Pi needs its own ENC28J60 Linux support and sender software. The Prime console configuration below supplies the controller half; the carrier power/return and Pi/Linux setup are separate prerequisites.

### Configure the Prime serial command console

After the carrier’s return, power ownership and loaded logic levels are sorted out, reserve Prime UART channel 1 and PB9/PH14 for this connection. Merge this section into the controller configuration, keeping only one definition of the console:

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

With `console = true`, the UART is initialized by the [console task after startup](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L515-L520), rather than immediately while parsing this section. Let the controller finish starting before sending `version`. If no reply arrives, check the startup log for UART initialization errors and confirm the selected channel, crossed TX/RX, common ground and terminal line ending; silence alone does not identify a failed adapter.

The [console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) reads these seven settings. Channel 1 selects PB9 TX and PH14 RX in the UART HAL; it does not assign arbitrary GPIO. Use the crossed GB/J33 contacts in the table above. `console = false` would initialize an auxiliary UART without its command-console reader, so it is not the command-host setting shown here.

Configure the actual Pi model and installed Linux image to expose the corresponding UART, release any conflicting Linux serial console, and use 115200 bit/s, 8 data bits, no parity, one stop bit, with hardware flow control off. The primary UART differs between Pi Zero variants: do not assume `ttyAMA0` for all models. Once the electrical prerequisites are met, send `version` followed by LF (`\n`). CRLF also works; CR alone is ignored and does not dispatch the command. The [version command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) returns build information without requesting motion. Its response identifies the running build.

The firmware behavior described here refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Your installed firmware may differ.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
