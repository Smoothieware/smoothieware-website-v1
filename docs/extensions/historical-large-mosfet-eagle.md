---
layout: default
title: "Large MOSFET \u2014 original Eagle layout"
permalink: /extensions/historical-large-mosfet-eagle
---

# Large MOSFET — original Eagle layout

This board, the original Eagle layout, is a single low-side MOSFET load switch. A logic input controls the gate through 10 Ω; 100 kΩ holds it off. Typical applications are a DC heater or compatible lamp. It is distinct from the KiCad version.

## Source and compatibility

This guide describes the board in the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Large%20MOSFET). The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact.

## Power, signals and controls

JP1.1 is ground, .3 logic input and .2 VCC is an otherwise isolated net. U$6 is the supply terminal (P$1 HEATERVIN, P$2 ground); U$2 is the load terminal (P$2 supply positive, P$1 switched negative). U$1 is identified only generically as MOSFET, so check the fitted part’s own ratings. LED7 indicates the switched load path; D11 is the clamp diode. Do not import the KiCad board’s 12 A claim.

### Identify the fitted transistor

The separate KiCad translation’s bill of materials names an IRG4BC15UD-SPBF IGBT. That does not identify the generically labelled transistor on this board. Identify the fitted device and check its gate-drive specifications, including 3.3 V drive, before choosing a Prime output or load. The KiCad board’s 12 A figure does not apply here.

### Board functions and native contacts

This board specifies a generic MOSFET in a D2PAK package: gate 1, drain/tab 2 and source 3. A different KiCad board’s IGBT bill of materials does not identify this fitted device. JP1.2 is a VCC spare contact.

### Board reference

Use the overview to locate each connector, then open the function sheets for pin roles. Check cable orientation against the board before connecting.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-00-overview" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-d11" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-d11.png" title="D11" alt="D11" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-jp1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-jp1.png" title="Jp1" alt="Jp1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-led7" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-led7.png" title="Led7" alt="Led7" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r35" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r35.png" title="R35" alt="R35" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r36" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r36.png" title="R36" alt="R36" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r37" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r37.png" title="R37" alt="R37" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us1.png" title="Us1" alt="Us1" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us2.png" title="Us2" alt="Us2" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us6" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us6.png" title="Us6" alt="Us6" caption="Dashed leaders locate parts and contacts; they are not installation wires." width=1200 %}

</details>

<details markdown="1">
<summary>Contact views and source files</summary>
### Annotated board reference

These annotated sheets show the contact positions, connector and component functions, and net names. Use the contact keys to distinguish net names from host assignments. Check cable orientation, fitted parts and operating limits before wiring. For four terminal contacts the drawing shows drill circles only. JP1.2 VCC is isolated and unused; the “24V 12A MAX” text is not a board rating.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-00-overview" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/00-overview.png" title="Large MOSFET reference" alt="Large MOSFET reference" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-d11-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/d11-1.png" title="D11: contacts" alt="D11: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-jp1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/jp1-1.png" title="JP1: contacts" alt="JP1: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-led7-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/led7-1.png" title="LED7: contacts" alt="LED7: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r35-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r35-1.png" title="R35: contacts" alt="R35: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r36-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r36-1.png" title="R36: contacts" alt="R36: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r37-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r37-1.png" title="R37: contacts" alt="R37: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-source-net-keys-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/source-net-keys-1.png" title="Net keys" alt="Net keys" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-source-net-keys-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/source-net-keys-2.png" title="Net keys" alt="Net keys" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u%241-1.png" title="U$1: contacts" alt="U$1: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-2-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u%242-1.png" title="U$2: contacts" alt="U$2: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-6-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u%246-1.png" title="U$6: contacts" alt="U$6: contacts" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

</details>

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-d11-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-d11-0.png" title="D11.C: native pad" alt="D11.C: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-d11-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-d11-1.png" title="D11.A: native pad" alt="D11.A: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-0.png" title="JP1.1: native pad" alt="JP1.1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-1.png" title="JP1.2: native pad" alt="JP1.2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-2.png" title="JP1.3: native pad" alt="JP1.3: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-led7-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-led7-0.png" title="LED7.C: native pad" alt="LED7.C: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-led7-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-led7-1.png" title="LED7.A: native pad" alt="LED7.A: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r35-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r35-0.png" title="R35.1: native pad" alt="R35.1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r35-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r35-1.png" title="R35.2: native pad" alt="R35.2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r36-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r36-0.png" title="R36.1: native pad" alt="R36.1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r36-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r36-1.png" title="R36.2: native pad" alt="R36.2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r37-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r37-0.png" title="R37.1: native pad" alt="R37.1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r37-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r37-1.png" title="R37.2: native pad" alt="R37.2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%241-0.png" title="U$1.1: native pad" alt="U$1.1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%241-1.png" title="U$1.3: native pad" alt="U$1.3: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%241-2.png" title="U$1.2: native pad" alt="U$1.2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-2-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%242-0.png" title="U$2.P$1: native pad" alt="U$2.P$1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-2-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%242-1.png" title="U$2.P$2: native pad" alt="U$2.P$2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-6-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%246-0.png" title="U$6.P$1: native pad" alt="U$6.P$1: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-6-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u%246-1.png" title="U$6.P$2: native pad" alt="U$6.P$2: native pad" caption="Callout leaders are not wires; labels on the drawing are not ratings." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Contact geometry, contact inventory and original source download</summary>

<details markdown="1">
<summary>Enlarged native contact geometry and numbering</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-native-detail-01" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/native-detail-01.png" title="Source contact geometry 01" alt="Source contact geometry 01" caption="Numbered contacts. Annotation leaders are not wires; check cable orientation and electrical limits before wiring." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-native-detail-02" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/native-detail-02.png" title="Source contact geometry 02" alt="Source contact geometry 02" caption="Numbered contacts. Annotation leaders are not wires; check cable orientation and electrical limits before wiring." width=1000 %}

</details>

The contact inventory below records connectivity. Check cable orientation and continuity on the board.

| Reference | Value / role | Contact → net |
|---|---|---|
| JP1 |  | 1 → GND; 2 → VCC; 3 → FET-LOGIC-IN |
| D11 | 1N4148 | A → E1-CONTROL; C → HEATERVIN |
| U$1 | MOSFET | 1 → N$28; 2 → E1-CONTROL; 3 → GND |
| U$6 | 5MMCONN | P$1 → HEATERVIN; P$2 → GND |
| U$2 | 5MMCONN | P$1 → E1-CONTROL; P$2 → HEATERVIN |

</details>

</details>

## Connect and try it

With power removed, connect a separately fused DC load supply to U$6, the load between U$2 contacts P$2 and P$1, and host ground/input to JP1.1/.3. For a small test lamp, a custom cable may use Prime GF.10 ground and GF.3 PB1 to JP1.3; leave JP1.2 unused. Keep the supply voltage and current within what the installed MOSFET, clamp, copper and terminal can take.

## Smoothieware use

This uses the ordinary digital switch output; no board-specific driver is required. The switch example below applies only to the GF.3 cable and an otherwise unused PB1.

For the specific GF.3/PB1 test cable, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

```ini
[switch]
board_test.enable = true
board_test.input_on_command = M106
board_test.input_off_command = M107
board_test.subcode = 9
board_test.output_pin = PB1
board_test.output_type = digital
board_test.startup_state = false
board_test.halt_set_to = false
```

With the machine stationary and a small test load, `M106.9` requests on and `M107.9` requests off. Confirm the off state before attaching the intended load.

The [V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) defines this behaviour. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Original files and attribution

[Download the editable historical diagram and native-source package](/images/extensions/historical-native-source-package-20261018.zip). It includes the source files, editable SVGs, layout scripts, the upstream CERN Open Hardware Licence v1.2, retained notices and dated modification descriptions. These illustrations use native source geometry rather than separately imported component artwork. The original Eagle file also embeds SparkFun footprint-library notices for JP1 and D11 stating Creative Commons ShareAlike 4.0 International; those original descriptions are retained in the package. Keep the included source and modification notices with redistributed derivatives.

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 repository also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This does not grant rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)

The editable functional SVG supplements were authored on 2026-10-18 from the Eagle source under CERN OHL v1.2. Embedded SparkFun connector/discrete footprint notices are CC BY-SA 4.0 and remain in the linked native-source package; these drawings import no separate component artwork.
