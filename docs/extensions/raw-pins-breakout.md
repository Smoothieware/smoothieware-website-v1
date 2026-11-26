---
layout: default
title: "Raw pins breakout"
permalink: /extensions/raw-pins-breakout
---

<style>
/* Keep this guide's linked headings visible below the fixed desktop navigation. */
@media (min-width: 769px) {
  :is(#raw-pins-breakout, #how-it-works, #board-reference,
      #connect-a-normally-open-button-to-smoothieboard-v2-prime,
      #enlarged-installation-contact-numbers, #match-the-numbered-cable-contacts,
      #smoothieware-configuration, #sources) {
    scroll-margin-top: 6rem;
  }
}
</style>

# Raw pins breakout

Use this passive adapter to bring a ten-contact Gadgeteer socket out to a straight 2.54 mm header. It makes low-voltage controller signals accessible for buttons and compatible sensor interfaces. It does not amplify signals, translate voltage, drive a motor or add a communications protocol.

The historical Bob Cousins BreakoutPins design is its prior art; the historical board does not have this board’s protection or chain links.

## How it works

The input connector (J1) connects directly to the same-numbered pin on the straight header (J2). A second Gadgeteer connector (J3) carries the same contacts through nine normally bridged solder links. Ground remains continuous. Cutting a link isolates only that contact on the chain connector; it does not disconnect the corresponding straight-header contact from the input.

Seven bidirectional transient shunts, D1–D7, connect signal contacts 3–9 to ground; they are LESD8D3.3CAT5G parts. These shunts add capacitance and leakage. They do not translate 5 V logic to 3.3 V or protect an unpowered controller. There are no LEDs, regulators or switches on this board.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the component-side locator below. Its dotted leaders identify connectors and links; they are not electrical paths. The three connectors share contact functions: **1 is 3.3 V, 2 is 5 V, 3–9 are GPIO, and 10 is ground**. The host MCU names depend on the Prime socket you use. The six focused contact sheets below retain every individual contact number and source net.

<a id="raw-pins-breakout-v15-reader-compact-overview"></a>

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-reference" src="/images/extensions/raw-pins-breakout/guides/reader-board-reference.png" title="Raw Pins — connectors and contact roles" alt="Component-side Raw Pins board with locators for the host link, raw header, chain link and chain isolation links, plus supply, GPIO and ground contact ranges." caption="Component-side locator. Dotted leaders identify parts, not conductors. Contacts 1 and 2 carry host supplies; GPIO direction depends on host configuration. Cutting a chain link affects J3 only. Use the six focused sheets below for every numbered contact." width=420 %}

<details markdown="1">
<summary>Combined contact reference</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-combined-contact-reference" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-reference.png" title="Combined contact reference — detailed comparison" alt="Annotated component-side Raw Pins drawing with contact numbers and functions for all three connectors, the ground test pad and four mounting holes." caption="Dense reference; use the six focused contact sheets for phone reading. Annotated reference for Raw Pins. Red pills identify 3.3 V, amber 5 V, teal GPIO and dark ground; the dark pill segment gives the module contact number. A double arrow marks bidirectional GPIO. Gray dotted leaders locate components, not wires." width=1440 %}

</details>

<details markdown="1">
<summary>Chain links and protection detail</summary>

The nine front-side links isolate contacts 1–9 on the chain connector. The seven signal shunts are projected in front coordinates.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-details" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-details.png" title="Raw Pins: chain links and protection parts" alt="Front-copper cut-link detail and front-coordinate projection of the seven underside transient shunts, with numbered function pills." caption="Links JP1–JP9 are on the front copper. The underside protection is projected in front coordinates, not shown as a mirrored rear assembly view." width=1440 %}

</details>

### Read every connector contact

The six sheets below cover J1, J2 and J3, five contacts per sheet. Their crops retain pad positions. Dotted leaders identify pads; they are not circuit wires. Signal direction follows the host configuration.


{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-host-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host input — host 1 5" alt="J1 · Host input — host 1 5 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-host-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host input — host 6 10" alt="J1 · Host input — host 6 10 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-raw-header-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-raw-header-1-5-central-pills.png" title="J2 · Raw pin header — raw header 1 5" alt="J2 · Raw pin header — raw header 1 5 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-raw-header-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-raw-header-6-10-central-pills.png" title="J2 · Raw pin header — raw header 6 10" alt="J2 · Raw pin header — raw header 6 10 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-1-5-central-pills.png" title="J3 · Chain output — chain 1 5" alt="J3 · Chain output — chain 1 5 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-6-10-central-pills.png" title="J3 · Chain output — chain 6 10" alt="J3 · Chain output — chain 6 10 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Focused chain-link, protection and mounting sheets</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-links-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-links-1-5.png" title="Chain isolation links — chain links 1 5" alt="Chain isolation links — chain links 1 5 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-links-6-9" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-links-6-9.png" title="Chain isolation links — chain links 6 9" alt="Chain isolation links — chain links 6 9 on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-protection-1-4" src="/images/extensions/raw-pins-breakout/guides/reader-compact-protection-1-4-front-projection-underside-caption.png" title="Signal protection — protection 1 4" alt="Signal protection — protection 1 4 on the Raw pins breakout" caption="Underside protection projected in front/component-side coordinates, not a mirrored rear view. Use the combined protection detail for viewing direction." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-protection-5-7" src="/images/extensions/raw-pins-breakout/guides/reader-compact-protection-5-7-front-projection-underside-caption.png" title="Signal protection — protection 5 7" alt="Signal protection — protection 5 7 on the Raw pins breakout" caption="Underside protection projected in front/component-side coordinates, not a mirrored rear view. Use the combined protection detail for viewing direction." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-ground-test" src="/images/extensions/raw-pins-breakout/guides/reader-compact-ground-test.png" title="Ground test pad — ground test" alt="Ground test pad — ground test on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-mounts" src="/images/extensions/raw-pins-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts on the Raw pins breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

<div class="raw-pins-contact-table" role="region" aria-label="Raw Pins contact functions; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Contact | Input and straight header (J1/J2) | Chain connector (J3) | Direction |
| ---: | --- | --- | --- |
| 1 | Host 3.3 V rail (`+3V3`) | JP1 → `/CH_+3V3` | Host to compatible load |
| 2 | Host 5 V rail (`+5V`) | JP2 → `/CH_+5V` | Host to compatible load |
| 3 | Signal `/P3`; D1 shunt to ground | JP3 → `/CH_P3` | Depends on host configuration |
| 4 | Signal `/P4`; D2 shunt to ground | JP4 → `/CH_P4` | Depends on host configuration |
| 5 | Signal `/P5`; D3 shunt to ground | JP5 → `/CH_P5` | Depends on host configuration |
| 6 | Signal `/P6`; D4 shunt to ground | JP6 → `/CH_P6` | Depends on host configuration |
| 7 | Signal `/P7`; D5 shunt to ground | JP7 → `/CH_P7` | Depends on host configuration |
| 8 | Signal `/P8`; D6 shunt to ground | JP8 → `/CH_P8` | Depends on host configuration |
| 9 | Signal `/P9`; D7 shunt to ground | JP9 → `/CH_P9` | Depends on host configuration |
| 10 | Ground (`GND`), also TP1 | Continuous; no cut link | Common reference and return |

</div>

The PCB outline is **28.4 × 32 mm**, with a **1.6 mm** board thickness. Its four non-plated mounting holes are **3.2 mm** in diameter on a **20 × 20 mm** square pattern. Allow additional mounting clearance for connector bodies and connected cables.

The input and chain footprints specify Samtec SHF-105 headers on 1.27 mm pitch; the straight output specifies a Würth 61301011121 ten-pin header on 2.54 mm pitch. Pin numbering must be checked from the component-side illustration and against the actual cable. A connector that fits is not proof that pin 1 is wired correctly.

Treat contacts 3–9 as 3.3 V signals. Do not apply the 5 V supply to a signal pin. The adapter has no independent power supply and needs no load supply for the dry-contact example below. Both supply rails are limited by the complete upstream path, connector, cable and PCB. Do not interpret the protection parts as permission to overload a rail.

The table above gives the board net names, not firmware pin names. For example, `/P3` becomes PB1 only with the specific Prime socket used below. Links JP1–JP9 are bridged by default; inspect your board before relying on chain continuity. Cutting one leaves the corresponding J1-to-J2 connection and its signal shunt intact. Ground has no isolation link.

A chained module shares the original controller pins; the chain does not create additional independently addressable inputs. Check every attached device's pin ownership and output type before sharing a signal, so two outputs cannot drive it against each other. The adapter adds no pull-up, filtering or termination. A powered sensor or other circuit needs its own supply, logic-level and firmware requirements; the dry-contact example below does not cover them.


## Connect a normally-open button to Smoothieboard V2 Prime

> **Check your parts before use.** These drawings show short outward leads from J2 contacts and a complete ten-core ribbon. They do not show connector mating, cable orientation or three-dimensional clearance. Verify the actual parts and continuity with power off before following the procedure.

> **Keep the assembly unpowered while connecting.** This is a ten-core connection procedure for **Prime GF/J37 → Raw Pins J1**. Verify the mating parts, cavity orientation, all ten end-to-end contacts, supply rails and ownership of all seven GPIOs before energizing.

The complete-board overview shows the cable and a normally-open dry button at J2. Its large labels identify the complete circuit; use the two numbered termination sheets for all ten electrical assignments and the J2 contact details for the button connections. Silkscreen and short contact entries are too fine to read at whole-board Fit; use the seven consecutive cable-path details. The red cable edge identifies core 1 only after continuity is established; it never proves connector orientation.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-overview" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/overview-fit-readable.png" title="Ten-core ribbon and dry button — complete circuit" alt="Complete Prime and Raw Pins board artwork, ten-core J37 to J1 ribbon and two field leads from J2 to a normally-open dry button." caption="Connect with power off. All ten host contacts connect, including both rails and all seven GPIOs. The two numbered markers connect the overview to the cable-path details. Use the readable termination and cable-path details; check plug fit and orientation." width=1200 %}

### Locate the two button contacts

Use these enlarged views to follow **J2.3 (/P3, PB1)** to one button terminal and **J2.10 (ground)** to the other. These are component-side drawing details, not cable mating-face views.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-j2-signal-exit" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/j2-signal-finite-escape-headed.png" title="Raw J2.3 — PB1 signal to the button" alt="Raw Pins J2.3 contact with continuous PB1 lead to the switch-A continuation." caption="Follow the lead from J2.3 to switch A in the complete circuit. Check the mating contact and clearance on your parts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-j2-ground-exit" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/j2-return-finite-escape-headed.png" title="Raw J2.10 — ground return from the button" alt="Raw Pins J2.10 ground contact with continuous lead to the switch-B continuation." caption="Follow the lead from J2.10 to switch B in the complete circuit. Connect only an isolated dry contact; leave power rails off the switch." width=420 %}

### Identify every ribbon contact

Both keys show **board-side pad positions**, not views into cable cavities. Match contact numbers with power off, including a check for shorts to adjacent contacts. Core 1 is J37.1 ↔ J1.1; every remaining core connects the same numbered contact. The Prime board uses an unshrouded 1.27 mm header; the module uses a Samtec SHF-105 header. Do not assume that a cable assembly is keyed, reversible or available off the shelf.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-host-termination" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/host-termination.png" title="Prime GF/J37 — all ten ribbon contacts" alt="Numbered component-side Prime J37 pad positions and all ten net-to-Raw-J1 bindings." caption="Component-side PCB positions. Red contact is pin 1. Match the same number at both cable ends; a stripe does not prove contact identity. This is not a cable cavity view. Actual mating, orientation, continuity, rails and GPIO ownership must be checked with power off." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-remote-termination" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/remote-termination.png" title="Raw Pins J1 — all ten ribbon contacts" alt="Numbered component-side Raw Pins J1 pad positions and all ten net-to-Prime-J37 bindings." caption="Component-side PCB positions. All ten cores connect. Verify actual contact identity, mating orientation and continuity with power off; PB1 and ground continue through the PCB to the dry button on J2. Host rail limits are not a cable current rating." width=420 %}

<div class="table-wrapper" markdown="1">

| Ribbon core / contact | Prime GF/J37 | Raw Pins J1 |
| --- | --- | --- |
| 1 | 3V3_LIMIT | +3V3 |
| 2 | 5V_LIMIT | +5V |
| 3 | PB1 | /P3 |
| 4 | PJ4 | /P4 |
| 5 | PA4 | /P5 |
| 6 | PG0 | /P6 |
| 7 | PJ3 | /P7 |
| 8 | PG1 | /P8 |
| 9 | PJ2 | /P9 |
| 10 | Ground | Ground |

</div>

### Follow the cable around each board

These are consecutive close-ups of the same overview cable. Follow **H1 → H2 → H3 → H4** from the Prime plug to overview marker **1**, and **R1 → R2 → R3** from the Raw Pins plug to overview marker **2**. Blue and amber markers identify entry and continuation; they are not electrical joints. The overview joins markers 1 and 2 with the exterior cable path.


{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H1" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H1.png" title="H1 — Prime plug to H-A" alt="Continuous cable close-up: Prime plug to H-A." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H2" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H2.png" title="H2 — H-A to H-B" alt="Continuous cable close-up: H-A to H-B." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H3" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H3.png" title="H3 — H-B to H-C" alt="Continuous cable close-up: H-B to H-C." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H4" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H4.png" title="H4 — H-C to overview marker 1" alt="Continuous cable close-up: H-C to overview marker 1." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R1" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R1.png" title="R1 — Raw Pins plug to R-A" alt="Continuous cable close-up: Raw Pins plug to R-A." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R2" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R2.png" title="R2 — R-A to R-B" alt="Continuous cable close-up: R-A to R-B." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R3" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R3.png" title="R3 — R-B to overview marker 2" alt="Continuous cable close-up: R-B to overview marker 2." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}


### Connect and check the button

1. Disconnect power and machine loads. Confirm that the host is a Prime2660 board. Reserve **PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2**: all seven are attached by this cable even though only PB1 is used by the example. Remove conflicting assignments and attached circuits before proceeding; PB1 may otherwise be configured as an external motor direction output.
2. Obtain suitable mating parts for both 1.27 mm headers. Check pin 1, cavity orientation and physical fit against those parts. Wire and continuity-test **all ten numbered contacts** using the table and two termination keys. Ordinary 2.54 mm jumper sockets are unsuitable for these headers. A stripe or apparent fit is insufficient.
3. Connect an electrically isolated normally-open button between **J2.3 (/P3, PB1)** and **J2.10 (ground)** using contacts suitable for J2's 2.54 mm header. J2 runs from contact 1 at the top to 10 at the bottom in the component-side artwork. Leave J2.1, J2.2 and the other signals without peripherals; the two supply contacts are still energized when the host is powered. Do not substitute a powered sensor output without checking its electrical interface.
4. Leave J3 unused. No solder-link change is needed: JP1–JP9 are bridged by default. Inspect your board; these chain links do not isolate J2 from J1.
5. Check for swapped rails and shorts with power off. Both host rails reach the adapter even though the dry button needs no supply. With loads disconnected, use the firmware example below and verify open/pressed state and halt behavior before operation.

### Board-side contact positions

With both boards oriented as shown in the complete circuit and viewed from the component side:

- **Prime GF/J37:** contacts **1, 3, 5, 7, 9** run left to right along the lower row; **2, 4, 6, 8, 10** run left to right along the upper row. The PB1 contact is the second position of the lower row; ground is at the right end of the upper row.
- **Raw Pins J1:** contacts **1, 3, 5, 7, 9** run top to bottom down the left column; **2, 4, 6, 8, 10** run down the right column. The polarization notch is on the odd-contact side. Contact 3 is the second contact down on the left, and contact 10 is at the bottom right.
- **Raw Pins J2:** the single column runs from contact **1 at the top** to **10 at the bottom**.

The J1 notch and numbering agree with the [Samtec SHF through-hole series drawing](https://suddendocs.samtec.com/prints/shf-1xx-01-x-d-xx-xx-xx-mkt.pdf), sheet 1. These are **board-side positions**; do not mirror the cable plug by eye. The Prime header is unshrouded and vertical, so check the mating parts and all-ten-contact continuity.

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-orientation" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-connector-orientation.png" title="Component-side connector numbering and cable continuity" alt="PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Component/front-side PCB views, uniformly enlarged eight times. Match pad numbers end to end; circles locate pad centres and do not depict connector cavities. No mating-face view or ribbon stripe is inferred." width=1200 %}

## Smoothieware configuration

The adapter itself requires no driver. Smoothieware configures the host pin and the device connected to it. The following example uses the V2 firmware's existing `buttonbox` module. The firmware source is linked below.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

`^` enables the internal pull-up; `!` inverts the input. The open contact is therefore inactive and pressing the button pulls PB1 to ground and makes it active. The buttonbox parser runs the `press` action on the inactive-to-active transition. `KILL` invokes the firmware halt path. This example is a software halt button, not an emergency-stop circuit. It does not provide a safety-rated power disconnect. A button already held when the firmware starts can trigger the first active sample. Releasing it does not clear the halt; no release action is configured.

Do not copy the sample's `PB1-` setting for this bare contact: `-` disables the pull-up and pull-down. Without external bias, an open contact could float. If the firmware reports that PB1 is already allocated, resolve the conflicting assignment instead of choosing an arbitrary pin number.

This passive adapter needs no board-specific driver.

## Check the configured input before using machine loads

Keep machine loads disabled while checking the example. These are the expected consequences of the pull-up, inversion and `KILL` action.

<div class="table-wrapper" markdown="1">

<div class="extension-contact-table" role="region" aria-label="Configured input checks; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Condition | Expected result | If it differs |
| --- | --- | --- |
| Button released | Input is inactive; no new press action | Check for a short to ground, a normally-closed switch or incorrect input inversion. |
| Button pressed | Input becomes active and requests a software halt | Check the numbered signal and ground contacts, configured pin and pin-allocation errors. |
| Button released after a halt | Halt remains set; release does not resume the machine | The example has no release action. Follow the controller's normal recovery procedure only after resolving the cause. |
| Signal wire disconnected | The host pull-up normally leaves the input inactive | This arrangement does not detect a broken signal wire; do not use it as a fail-safe stop circuit. |
| Button held during startup | The first active sample may request a halt | Release buttons before startup; do not assume a release-and-press cycle is required. |

</div>

</div>

## Sources

[Download the KiCad design files](/assets/downloads/extensions/raw-pins-breakout/raw-pins-cad-study.zip) (361 KiB). The archive includes the editable KiCad project, schematic and PCB, custom libraries, visualization models, schematic PDF, netlist, parts list, placement export, specification and license notices. Open the project with **KiCad 9** and its standard symbol, footprint and 3D-model libraries; keep the bundled directories together. The included notes explain dependencies and the manifest identifies the files.

- [Historical BreakoutPins source](https://github.com/Smoothieware/Smoothieboard2/tree/master/extensions/BreakoutPins)
- [Prime2660 PCB and J37 pin nets](https://github.com/Smoothieware/Smoothieboard2/blob/487d57897a97a5ed57febf8cc5d7c3b89ed3a1f8/V2_P11_Prime2660/smoothiev2-prime-2660.kicad_pcb)
- [V2 firmware button-box sample](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/button-box.ini)
- [V2 button-box parser and halt action](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L211)
- [V2 input suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L208-L270)
- [V2 host pin documentation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/pins.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

{% include _includes/extension-board-visuals.html slug="raw-pins-breakout" %}

</details>
