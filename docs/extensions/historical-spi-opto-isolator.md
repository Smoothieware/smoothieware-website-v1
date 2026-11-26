---
layout: default
title: "SPI opto-isolator"
permalink: /extensions/historical-spi-opto-isolator
---

# SPI opto-isolator

Seven 6N137 optocouplers transport six host-to-peripheral signals and one return signal across separate power domains. This is a directional SPI/interface isolator, not an arbitrary bidirectional GPIO cable.

## Documented source and compatibility

This guide describes the [Smoothieboard2 design source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIOpto). Check connector compatibility contact by contact.

## Power, signals and controls

The netlist calls the host/external connectors C2/C6, but the PCB labels them Conn1/Conn2. All ten signal/power net names correspond after that explicit reference rename; do not look for a physical capacitor C2 as the host socket. Host signals CS/MOSI/SCK/GPIO0/GPIO1/GPIO2 drive U1/U2/U3/U5/U6/U7; U4 carries MISO back. Host supply is +5V/GND, external supply External5V/ExternalGND. P1.1/.2 expose host ground/5 V; P2.1/.2 external ground/5 V. Check the six forward and one reverse paths for inversion and 3.3 V compatibility. In particular, the returned MISO net is pulled to host +5V through R8 (330 Ω); do not treat it as a 3.3 V Prime input. Connecting the grounds and 5 V rails defeats galvanic separation; the board has no isolation voltage or safety rating.

### Exact optocoupler and logic-drive limits

The bill of materials names **Lite-On 6N137S-TA1**. The [manufacturer-authored 6N137 Series datasheet](https://media.digikey.com/pdf/Data%20Sheets/Lite-On%20PDFs/6N137%20Series.pdf), transfer table on page 9, gives a maximum input threshold of 5 mA under its stated supply, enable and output-load conditions. A nominal `(3.3 V − typical LED voltage) / 330 Ω` calculation does not guarantee that current across loaded Prime output voltage, resistor tolerance and temperature.

The same table specifies output LOW at up to 0.6 V under a 13 mA load and 5 mA input test condition. Check the 330 Ω output pull-ups against the rail, tolerance and receiver load. In particular, the host MISO pull-up remains connected to +5 V: do not connect that return directly to a Prime GPIO on the strength of the nominal SPI net names. A complete interface circuit has to handle signal inversion, enable bias, timing and both isolated power domains.

### Board functions and contact reference

These sheets explain both connectors, all seven optocoupler channels and their supply and return contacts. All seven channels invert when enabled. The host MISO pull-up is 5 V; do not connect it directly to Prime. Read every sheet for the component concerned.

### Board reference

These function-labelled views show the board.

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-00-overview" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-conn1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-conn1-1.png" title="Conn1 1" alt="Conn1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-conn1-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-conn1-2.png" title="Conn1 2" alt="Conn1 2" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-conn2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-conn2-1.png" title="Conn2 1" alt="Conn2 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-conn2-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-conn2-2.png" title="Conn2 2" alt="Conn2 2" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-p1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-p2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-r8-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-r8-1.png" title="R8 1" alt="R8 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-u4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-u4-1.png" title="U4 1" alt="U4 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-compact-function-reader-u4-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-reader/reader-u4-2.png" title="U4 2" alt="U4 2" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact audits and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-conn1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/conn1-functions-01.png" title="CONN1 functions and contacts" alt="CONN1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-conn1-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/conn1-functions-02.png" title="CONN1 functions and contacts" alt="CONN1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-p1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/p1-functions-01.png" title="P1 functions and contacts" alt="P1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-p2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/p2-functions-01.png" title="P2 functions and contacts" alt="P2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u1-functions-01.png" title="U1 functions and contacts" alt="U1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u1-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u1-functions-02.png" title="U1 functions and contacts" alt="U1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u2-functions-01.png" title="U2 functions and contacts" alt="U2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u2-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u2-functions-02.png" title="U2 functions and contacts" alt="U2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u3-functions-01.png" title="U3 functions and contacts" alt="U3 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u3-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u3-functions-02.png" title="U3 functions and contacts" alt="U3 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u4-functions-01.png" title="U4 functions and contacts" alt="U4 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u4-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u4-functions-02.png" title="U4 functions and contacts" alt="U4 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u5-functions-01.png" title="U5 functions and contacts" alt="U5 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u5-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u5-functions-02.png" title="U5 functions and contacts" alt="U5 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u6-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u6-functions-01.png" title="U6 functions and contacts" alt="U6 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u6-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u6-functions-02.png" title="U6 functions and contacts" alt="U6 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u7-functions-01.png" title="U7 functions and contacts" alt="U7 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-u7-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/u7-functions-02.png" title="U7 functions and contacts" alt="U7 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-conn2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/conn2-functions-01.png" title="CONN2 functions and contacts" alt="CONN2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-conn2-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/conn2-functions-02.png" title="CONN2 functions and contacts" alt="CONN2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

<details markdown="1">
<summary>Resistors, bypass capacitors and mounting contacts</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c1-functions-01.png" title="C1 functions and contacts" alt="C1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c3-functions-01.png" title="C3 functions and contacts" alt="C3 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c4-functions-01.png" title="C4 functions and contacts" alt="C4 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c5-functions-01.png" title="C5 functions and contacts" alt="C5 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c7-functions-01.png" title="C7 functions and contacts" alt="C7 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c8-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c8-functions-01.png" title="C8 functions and contacts" alt="C8 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-c9-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/c9-functions-01.png" title="C9 functions and contacts" alt="C9 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r1-functions-01.png" title="R1 functions and contacts" alt="R1 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r2-functions-01.png" title="R2 functions and contacts" alt="R2 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r3-functions-01.png" title="R3 functions and contacts" alt="R3 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r4-functions-01.png" title="R4 functions and contacts" alt="R4 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r5-functions-01.png" title="R5 functions and contacts" alt="R5 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r6-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r6-functions-01.png" title="R6 functions and contacts" alt="R6 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r7-functions-01.png" title="R7 functions and contacts" alt="R7 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r8-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r8-functions-01.png" title="R8 functions and contacts" alt="R8 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r9-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r9-functions-01.png" title="R9 functions and contacts" alt="R9 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r10-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r10-functions-01.png" title="R10 functions and contacts" alt="R10 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r11-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r11-functions-01.png" title="R11 functions and contacts" alt="R11 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r12-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r12-functions-01.png" title="R12 functions and contacts" alt="R12 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r13-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r13-functions-01.png" title="R13 functions and contacts" alt="R13 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-r14-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/r14-functions-01.png" title="R14 functions and contacts" alt="R14 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-mount-instance-33-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/mount-instance-33-functions-01.png" title="MOUNT-INSTANCE-33 functions and contacts" alt="MOUNT-INSTANCE-33 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-mount-instance-34-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/mount-instance-34-functions-01.png" title="MOUNT-INSTANCE-34 functions and contacts" alt="MOUNT-INSTANCE-34 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-mount-instance-35-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/mount-instance-35-functions-01.png" title="MOUNT-INSTANCE-35 functions and contacts" alt="MOUNT-INSTANCE-35 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-function-mount-instance-36-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/function-reference/mount-instance-36-functions-01.png" title="MOUNT-INSTANCE-36 functions and contacts" alt="MOUNT-INSTANCE-36 contacts with numbered function callouts" caption="Dotted leaders locate parts, not wiring." width=600 %}

</details>

<details markdown="1">
<summary>Pad locators</summary>

### Annotated board reference

These annotated sheets show contact positions, connector and component functions, and net keys. Use the contact keys to distinguish net names from a host assignment. The board silk describes a 5 V and ground connection that bypasses isolation. The warning sheet explains this limitation; it is not a connection instruction. Keep the two power domains separate.

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-00-overview" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/00-overview.png" title="SPI opto reference" alt="SPI opto reference" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-isolation-warning" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-isolation-warning.png" title="Board silk warning" alt="Board silk warning" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-art32-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/art32-1.png" title="ART32: source contacts" alt="ART32: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-art33-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/art33-1.png" title="ART33: source contacts" alt="ART33: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-art34-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/art34-1.png" title="ART34: source contacts" alt="ART34: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-art35-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/art35-1.png" title="ART35: source contacts" alt="ART35: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c1-1.png" title="C1: source contacts" alt="C1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c3-1.png" title="C3: source contacts" alt="C3: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c4-1.png" title="C4: source contacts" alt="C4: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c5-1.png" title="C5: source contacts" alt="C5: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c7-1.png" title="C7: source contacts" alt="C7: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c8-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c8-1.png" title="C8: source contacts" alt="C8: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-c9-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/c9-1.png" title="C9: source contacts" alt="C9: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-conn1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/conn1-1.png" title="Conn1: source contacts" alt="Conn1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-conn1-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/conn1-2.png" title="Conn1: source contacts" alt="Conn1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-conn2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/conn2-1.png" title="Conn2: source contacts" alt="Conn2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-conn2-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/conn2-2.png" title="Conn2: source contacts" alt="Conn2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-p1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/p1-1.png" title="P1: source contacts" alt="P1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-p2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/p2-1.png" title="P2: source contacts" alt="P2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r1-1.png" title="R1: source contacts" alt="R1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r10-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r10-1.png" title="R10: source contacts" alt="R10: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r11-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r11-1.png" title="R11: source contacts" alt="R11: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r12-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r12-1.png" title="R12: source contacts" alt="R12: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r13-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r13-1.png" title="R13: source contacts" alt="R13: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r14-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r14-1.png" title="R14: source contacts" alt="R14: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r2-1.png" title="R2: source contacts" alt="R2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r3-1.png" title="R3: source contacts" alt="R3: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r4-1.png" title="R4: source contacts" alt="R4: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r5-1.png" title="R5: source contacts" alt="R5: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r6-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r6-1.png" title="R6: source contacts" alt="R6: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r7-1.png" title="R7: source contacts" alt="R7: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r8-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r8-1.png" title="R8: source contacts" alt="R8: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-r9-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/r9-1.png" title="R9: source contacts" alt="R9: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-1.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-10" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-10.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-11" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-11.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-12" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-12.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-13" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-13.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-2.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-3.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-4.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-5.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-6.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-7.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-8" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-8.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-source-net-keys-9" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/source-net-keys-9.png" title="Source net keys" alt="Source net keys" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u1-1.png" title="U1: source contacts" alt="U1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u1-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u1-2.png" title="U1: source contacts" alt="U1: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u2-1.png" title="U2: source contacts" alt="U2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u2-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u2-2.png" title="U2: source contacts" alt="U2: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u3-1.png" title="U3: source contacts" alt="U3: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u3-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u3-2.png" title="U3: source contacts" alt="U3: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u4-1.png" title="U4: source contacts" alt="U4: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u4-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u4-2.png" title="U4: source contacts" alt="U4: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u5-1.png" title="U5: source contacts" alt="U5: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u5-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u5-2.png" title="U5: source contacts" alt="U5: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u6-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u6-1.png" title="U6: source contacts" alt="U6: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u6-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u6-2.png" title="U6: source contacts" alt="U6: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u7-1.png" title="U7: source contacts" alt="U7: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-u7-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/u7-2.png" title="U7: source contacts" alt="U7: source contacts" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

</details>

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-art32-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-art32-0.png" title="ART32.1: native pad" alt="ART32.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-art33-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-art33-0.png" title="ART33.1: native pad" alt="ART33.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-art34-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-art34-0.png" title="ART34.1: native pad" alt="ART34.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-art35-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-art35-0.png" title="ART35.1: native pad" alt="ART35.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c1-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c1-0.png" title="C1.1: native pad" alt="C1.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c1-1.png" title="C1.2: native pad" alt="C1.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c3-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c3-0.png" title="C3.1: native pad" alt="C3.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c3-1.png" title="C3.2: native pad" alt="C3.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c4-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c4-0.png" title="C4.1: native pad" alt="C4.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c4-1.png" title="C4.2: native pad" alt="C4.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c5-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c5-0.png" title="C5.1: native pad" alt="C5.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c5-1.png" title="C5.2: native pad" alt="C5.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c7-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c7-0.png" title="C7.1: native pad" alt="C7.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c7-1.png" title="C7.2: native pad" alt="C7.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c8-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c8-0.png" title="C8.1: native pad" alt="C8.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c8-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c8-1.png" title="C8.2: native pad" alt="C8.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c9-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c9-0.png" title="C9.1: native pad" alt="C9.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-c9-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-c9-1.png" title="C9.2: native pad" alt="C9.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-0.png" title="Conn1.1: native pad" alt="Conn1.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-1.png" title="Conn1.2: native pad" alt="Conn1.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-2.png" title="Conn1.3: native pad" alt="Conn1.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-3.png" title="Conn1.4: native pad" alt="Conn1.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-4.png" title="Conn1.5: native pad" alt="Conn1.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-5.png" title="Conn1.6: native pad" alt="Conn1.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-6.png" title="Conn1.7: native pad" alt="Conn1.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-7.png" title="Conn1.8: native pad" alt="Conn1.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-8" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-8.png" title="Conn1.9: native pad" alt="Conn1.9: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn1-9" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn1-9.png" title="Conn1.10: native pad" alt="Conn1.10: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-0.png" title="Conn2.1: native pad" alt="Conn2.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-1.png" title="Conn2.2: native pad" alt="Conn2.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-2.png" title="Conn2.3: native pad" alt="Conn2.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-3.png" title="Conn2.4: native pad" alt="Conn2.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-4.png" title="Conn2.5: native pad" alt="Conn2.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-5.png" title="Conn2.6: native pad" alt="Conn2.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-6.png" title="Conn2.7: native pad" alt="Conn2.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-7.png" title="Conn2.8: native pad" alt="Conn2.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-8" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-8.png" title="Conn2.9: native pad" alt="Conn2.9: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-conn2-9" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-conn2-9.png" title="Conn2.10: native pad" alt="Conn2.10: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-p1-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-p1-0.png" title="P1.1: native pad" alt="P1.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-p1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-p1-1.png" title="P1.2: native pad" alt="P1.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-p2-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-p2-0.png" title="P2.1: native pad" alt="P2.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-p2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-p2-1.png" title="P2.2: native pad" alt="P2.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r1-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r1-0.png" title="R1.1: native pad" alt="R1.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r1-1.png" title="R1.2: native pad" alt="R1.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r10-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r10-0.png" title="R10.1: native pad" alt="R10.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r10-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r10-1.png" title="R10.2: native pad" alt="R10.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r11-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r11-0.png" title="R11.1: native pad" alt="R11.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r11-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r11-1.png" title="R11.2: native pad" alt="R11.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r12-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r12-0.png" title="R12.1: native pad" alt="R12.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r12-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r12-1.png" title="R12.2: native pad" alt="R12.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r13-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r13-0.png" title="R13.1: native pad" alt="R13.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r13-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r13-1.png" title="R13.2: native pad" alt="R13.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r14-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r14-0.png" title="R14.1: native pad" alt="R14.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r14-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r14-1.png" title="R14.2: native pad" alt="R14.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r2-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r2-0.png" title="R2.1: native pad" alt="R2.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r2-1.png" title="R2.2: native pad" alt="R2.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r3-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r3-0.png" title="R3.1: native pad" alt="R3.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r3-1.png" title="R3.2: native pad" alt="R3.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r4-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r4-0.png" title="R4.1: native pad" alt="R4.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r4-1.png" title="R4.2: native pad" alt="R4.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r5-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r5-0.png" title="R5.1: native pad" alt="R5.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r5-1.png" title="R5.2: native pad" alt="R5.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r6-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r6-0.png" title="R6.1: native pad" alt="R6.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r6-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r6-1.png" title="R6.2: native pad" alt="R6.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r7-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r7-0.png" title="R7.1: native pad" alt="R7.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r7-1.png" title="R7.2: native pad" alt="R7.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r8-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r8-0.png" title="R8.1: native pad" alt="R8.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r8-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r8-1.png" title="R8.2: native pad" alt="R8.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r9-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r9-0.png" title="R9.1: native pad" alt="R9.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-r9-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-r9-1.png" title="R9.2: native pad" alt="R9.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-0.png" title="U1.1: native pad" alt="U1.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-1.png" title="U1.2: native pad" alt="U1.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-2.png" title="U1.3: native pad" alt="U1.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-3.png" title="U1.4: native pad" alt="U1.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-4.png" title="U1.5: native pad" alt="U1.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-5.png" title="U1.6: native pad" alt="U1.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-6.png" title="U1.7: native pad" alt="U1.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u1-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u1-7.png" title="U1.8: native pad" alt="U1.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-0.png" title="U2.1: native pad" alt="U2.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-1.png" title="U2.2: native pad" alt="U2.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-2.png" title="U2.3: native pad" alt="U2.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-3.png" title="U2.4: native pad" alt="U2.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-4.png" title="U2.5: native pad" alt="U2.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-5.png" title="U2.6: native pad" alt="U2.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-6.png" title="U2.7: native pad" alt="U2.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u2-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u2-7.png" title="U2.8: native pad" alt="U2.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-0.png" title="U3.1: native pad" alt="U3.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-1.png" title="U3.2: native pad" alt="U3.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-2.png" title="U3.3: native pad" alt="U3.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-3.png" title="U3.4: native pad" alt="U3.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-4.png" title="U3.5: native pad" alt="U3.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-5.png" title="U3.6: native pad" alt="U3.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-6.png" title="U3.7: native pad" alt="U3.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u3-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u3-7.png" title="U3.8: native pad" alt="U3.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-0.png" title="U4.1: native pad" alt="U4.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-1.png" title="U4.2: native pad" alt="U4.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-2.png" title="U4.3: native pad" alt="U4.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-3.png" title="U4.4: native pad" alt="U4.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-4.png" title="U4.5: native pad" alt="U4.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-5.png" title="U4.6: native pad" alt="U4.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-6.png" title="U4.7: native pad" alt="U4.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u4-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u4-7.png" title="U4.8: native pad" alt="U4.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-0.png" title="U5.1: native pad" alt="U5.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-1.png" title="U5.2: native pad" alt="U5.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-2.png" title="U5.3: native pad" alt="U5.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-3.png" title="U5.4: native pad" alt="U5.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-4.png" title="U5.5: native pad" alt="U5.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-5.png" title="U5.6: native pad" alt="U5.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-6.png" title="U5.7: native pad" alt="U5.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u5-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u5-7.png" title="U5.8: native pad" alt="U5.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-0.png" title="U6.1: native pad" alt="U6.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-1.png" title="U6.2: native pad" alt="U6.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-2.png" title="U6.3: native pad" alt="U6.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-3.png" title="U6.4: native pad" alt="U6.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-4.png" title="U6.5: native pad" alt="U6.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-5.png" title="U6.6: native pad" alt="U6.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-6.png" title="U6.7: native pad" alt="U6.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u6-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u6-7.png" title="U6.8: native pad" alt="U6.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-0" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-0.png" title="U7.1: native pad" alt="U7.1: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-1" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-1.png" title="U7.2: native pad" alt="U7.2: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-2" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-2.png" title="U7.3: native pad" alt="U7.3: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-3" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-3.png" title="U7.4: native pad" alt="U7.4: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-4" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-4.png" title="U7.5: native pad" alt="U7.5: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-5" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-5.png" title="U7.6: native pad" alt="U7.6: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-6" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-6.png" title="U7.7: native pad" alt="U7.7: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-annotated-contact-u7-7" src="/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/contact-u7-7.png" title="U7.8: native pad" alt="U7.8: native pad" caption="Board geometry and contact roles. Callout leaders are not wires." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-spi-opto-isolator/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Functional references, contact inventory and design download</summary>

### Annotated connector and circuit reference

These functional sheets explain the connectors, jumpers and circuit components with numbered contact markers and pill callouts. They supplement the contact tables. Follow the power and wiring limitations in this guide.

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-conn1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/conn1-functions-01.png" title="Conn1 · Controller-side cable" alt="Conn1 · Controller-side cable — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

<details>
<summary>All remaining connector, jumper and component-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-conn1-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/conn1-functions-02.png" title="Conn1 · Controller-side cable" alt="Conn1 · Controller-side cable — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c1-functions-01.png" title="C1 · Optocoupler bypass filter" alt="C1 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c3-functions-01.png" title="C3 · Optocoupler bypass filter" alt="C3 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c4-functions-01.png" title="C4 · Optocoupler bypass filter" alt="C4 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c5-functions-01.png" title="C5 · Optocoupler bypass filter" alt="C5 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c7-functions-01.png" title="C7 · Optocoupler bypass filter" alt="C7 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c8-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c8-functions-01.png" title="C8 · Optocoupler bypass filter" alt="C8 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-c9-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/c9-functions-01.png" title="C9 · Optocoupler bypass filter" alt="C9 · Optocoupler bypass filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-p1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/p1-functions-01.png" title="P1 · Controller-side supply" alt="P1 · Controller-side supply — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-p2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/p2-functions-01.png" title="P2 · External-side supply" alt="P2 · External-side supply — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r1-functions-01.png" title="R1 · Input LED series resistor" alt="R1 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r2-functions-01.png" title="R2 · Input LED series resistor" alt="R2 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r3-functions-01.png" title="R3 · Input LED series resistor" alt="R3 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r4-functions-01.png" title="R4 · Input LED series resistor" alt="R4 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r5-functions-01.png" title="R5 · Output pull-up resistor" alt="R5 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r6-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r6-functions-01.png" title="R6 · Output pull-up resistor" alt="R6 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r7-functions-01.png" title="R7 · Output pull-up resistor" alt="R7 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r8-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r8-functions-01.png" title="R8 · Output pull-up resistor" alt="R8 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r9-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r9-functions-01.png" title="R9 · Input LED series resistor" alt="R9 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r10-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r10-functions-01.png" title="R10 · Input LED series resistor" alt="R10 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r11-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r11-functions-01.png" title="R11 · Input LED series resistor" alt="R11 · Input LED series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r12-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r12-functions-01.png" title="R12 · Output pull-up resistor" alt="R12 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r13-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r13-functions-01.png" title="R13 · Output pull-up resistor" alt="R13 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-r14-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/r14-functions-01.png" title="R14 · Output pull-up resistor" alt="R14 · Output pull-up resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u1-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u1-functions-01.png" title="U1 · CS outward optocoupler" alt="U1 · CS outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u1-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u1-functions-02.png" title="U1 · CS outward optocoupler" alt="U1 · CS outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u2-functions-01.png" title="U2 · MOSI outward optocoupler" alt="U2 · MOSI outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u2-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u2-functions-02.png" title="U2 · MOSI outward optocoupler" alt="U2 · MOSI outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u3-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u3-functions-01.png" title="U3 · SCK outward optocoupler" alt="U3 · SCK outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u3-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u3-functions-02.png" title="U3 · SCK outward optocoupler" alt="U3 · SCK outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u4-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u4-functions-01.png" title="U4 · MISO return optocoupler" alt="U4 · MISO return optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u4-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u4-functions-02.png" title="U4 · MISO return optocoupler" alt="U4 · MISO return optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u5-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u5-functions-01.png" title="U5 · GPIO0 outward optocoupler" alt="U5 · GPIO0 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u5-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u5-functions-02.png" title="U5 · GPIO0 outward optocoupler" alt="U5 · GPIO0 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u6-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u6-functions-01.png" title="U6 · GPIO1 outward optocoupler" alt="U6 · GPIO1 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u6-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u6-functions-02.png" title="U6 · GPIO1 outward optocoupler" alt="U6 · GPIO1 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u7-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u7-functions-01.png" title="U7 · GPIO2 outward optocoupler" alt="U7 · GPIO2 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-u7-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/u7-functions-02.png" title="U7 · GPIO2 outward optocoupler" alt="U7 · GPIO2 outward optocoupler — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-conn2-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/conn2-functions-01.png" title="Conn2 · External-side cable" alt="Conn2 · External-side cable — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-conn2-functions-02" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/conn2-functions-02.png" title="Conn2 · External-side cable" alt="Conn2 · External-side cable — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-mount-instance-33-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/mount-instance-33-functions-01.png" title="Mount 33 · Board mounting hole" alt="Mount 33 · Board mounting hole — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-mount-instance-34-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/mount-instance-34-functions-01.png" title="Mount 34 · Board mounting hole" alt="Mount 34 · Board mounting hole — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-mount-instance-35-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/mount-instance-35-functions-01.png" title="Mount 35 · Board mounting hole" alt="Mount 35 · Board mounting hole — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reconstructed-mount-instance-36-functions-01" src="/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/mount-instance-36-functions-01.png" title="Mount 36 · Board mounting hole" alt="Mount 36 · Board mounting hole — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

</details>

[Drawing licence, attribution and modification notice](/images/extensions/historical-spi-opto-isolator/guides/reconstructed-reference/NOTICE.md). The SVG files are editable drawing sources; the matching design files and notices remain available below.

<details>
<summary>Contact locators and design download</summary>

### Contact locator reference

These locators show pad positions and the board outline. Read all focused sheets together.

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-overview" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-overview.png" title="SPI opto-isolator" alt="SPI opto-isolator — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-conn1-1-5" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-conn1-1-5.png" title="Conn1 · Host signals" alt="Conn1 · Host signals — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-conn1-6-10" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-conn1-6-10.png" title="Conn1 · Host signals" alt="Conn1 · Host signals — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-conn2-1-5" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-conn2-1-5.png" title="Conn2 · Remote signals" alt="Conn2 · Remote signals — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-conn2-6-10" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-conn2-6-10.png" title="Conn2 · Remote signals" alt="Conn2 · Remote signals — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-p1-1-2" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-p1-1-2.png" title="P1 · Host-side power" alt="P1 · Host-side power — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-p2-1-2" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-p2-1-2.png" title="P2 · Remote-side power" alt="P2 · Remote-side power — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto1" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto1.png" title="Chip select optical path" alt="Chip select optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto2" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto2.png" title="MOSI optical path" alt="MOSI optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto3" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto3.png" title="Clock optical path" alt="Clock optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto4" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto4.png" title="MISO return optical path" alt="MISO return optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto5" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto5.png" title="GPIO0 optical path" alt="GPIO0 optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto6" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto6.png" title="GPIO1 optical path" alt="GPIO1 optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-opto7" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-opto7.png" title="GPIO2 optical path" alt="GPIO2 optical path — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-power" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-power.png" title="Separate power domains" alt="Separate power domains — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-miso" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-miso.png" title="MISO host-voltage warning" alt="MISO host-voltage warning — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-unlabelled" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-unlabelled.png" title="Unlabelled native pads" alt="Unlabelled native pads — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-spi-opto-isolator-reader-compact-boundary" src="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing notes" alt="Drawing notes — contact locator" caption="Use all companion sheets." width=420 %}

[Download the design source, upstream licence and drawing notice](/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below records circuit connectivity; check physical cable orientation before wiring.

| Reference | Value / role | Contact → net |
|---|---|---|
| P2 | CONN_01X02 | 1 → ExternalGND; 2 → External5V |
| P1 | CONN_01X02 | 1 → GND; 2 → +5V |
| Conn1 (netlist C2) | Host Gadgeteer | 1 → +3V3; 10 → GND; 2 → +5V; 3 → GPIO0; 4 → GPIO1; 5 → GPIO2; 6 → CS; 7 → MOSI; 8 → MISO; 9 → SCK |
| Conn2 (netlist C6) | Remote Gadgeteer | 1 → External3V3; 10 → ExternalGND; 2 → External5V; 3 → GPIOOpto; 4 → GPIO1Opto; 5 → GPIO2Opto; 6 → CSOpto; 7 → MOSIOpto; 8 → MISOOpto; 9 → SCKOpto |

</details>

</details>

</details>

</details>

## Connect and try it

A possible use is an externally powered SPI sensor on a noisy machine. Supply both sides with appropriate independent sources and keep the domains separate if isolation is intended. Verify every interface contact against the board footprint and probe logic polarity before attaching a sensor. Do not use this board as a mains isolation barrier.

### Prime header contacts

Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### SPI transport and sensor settings
The Lite-On 6N137S-TA1 channels invert forward clock, data and chip select and return MISO; the return output is pulled to host 5 V. Do not substitute 6N137-L limits or connect this return directly to Prime. Check loaded drive current, bias, inversion, timing and power order. Inverting CS alone cannot repair SCK/MISO polarity.

The transport has no register driver. The firmware settings for a mode 0, 1 MHz MAX31855 interface are:

```ini
[temperature control]
transport_tc.enable = true
transport_tc.sensor = max31855
transport_tc.spi_channel = 0
transport_tc.spi_select_pin = PD15
transport_tc.readings_per_second = 20
transport_tc.heater_pin = nc
transport_tc.designator = XT
transport_tc.tool_id = 251
```

On Prime GE/J36, SPI1 COPI/CIPO/SCK are contacts 7/8/9 and PD15 is contact 6; that is the host bus allocation, not a cable specification for this board. With a non-inverting link to the sensor, `M105` observes XT and plain `M305` reports sensor diagnostics. No heater is driven. The driver fixes mode0 at 1 MHz and exposes neither lower clock nor data/clock inversion/CS-delay configuration; readings_per_second is polling, not bus frequency. The invalid sentinel-100 is not a measured temperature. These settings alone do not make this board work with the sensor.

The seven-channel Lite-On 6N137S-TA1 circuit inverts its forward SCK/data/chip-select paths and return MISO path. The manufacturer truth table shows that enabled LED current produces LOW at the output; the pin 7 enable contacts are tied to each output-side supply. This is not a transparent non-inverting SPI cable.

At SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`, the MAX31855 application initializes SPI as **16-bit, mode0, 1 MHz** in `max31855.cpp:38`. Its configuration parser accepts `spi_channel`, `spi_select_pin` and `readings_per_second`; it exposes no transport polarity, return-data inversion, clock-frequency or chip-select-delay setting. The read path consumes the returned sensor words without optocoupler-specific data inversion. A `!` on the chip-select pin only changes that pin and cannot correct SCK and MISO. Changing polling frequency does not change the SPI bit clock.

Thus the built-in MAX31855 settings printed above are **not firmware support for this inverting board**. The MAX31855 driver has no polarity or timing adaptation for this board. Do not invent a `spi_mode`, `invert_data` or lower-frequency setting or connect a sensor merely because a MAX31855 driver exists.

The 5 V host-side return, LED drive currents, loaded timing and power order are separate electrical limitations. A polarity adapter alone does not make a direct Prime connection electrically acceptable.

These instructions describe SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The source bundle accompanying the contact sheets includes the CERN licence and notices. It does not establish a license for unrelated third-party component illustrations.

[All extension boards](/extension-boards)
