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
      #smoothieware-configuration, #sources-and-revision-notes) {
    scroll-margin-top: 6rem;
  }
}
</style>

# Raw pins breakout

Use this passive adapter to bring a ten-contact Gadgeteer socket out to a straight 2.54 mm header. It makes low-voltage controller signals accessible for buttons, compatible sensor interfaces and prototypes. It does not amplify signals, translate voltage, drive a motor or add a communications protocol.

This guide selects the **v15 PCB candidate**. It is an unqualified design study, not a released or hardware-tested product. The historical Bob Cousins BreakoutPins design is its prior art; this guide does not assert that the historical board has the v15 protection or chain links.

The selected v15 source package retains schematic title-block revision **v11**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The input connector (J1) connects directly to the same-numbered pin on the straight header (J2). A second Gadgeteer connector (J3) carries the same contacts through nine normally bridged solder links. Ground remains continuous. Cutting a link isolates only that contact on the chain connector; it does not disconnect the corresponding straight-header contact from the input.

Seven bidirectional transient shunts, D1–D7, connect signal contacts 3–9 to ground. The selected source specifies LESD8D3.3CAT5G parts; fitted-part identity and assembled protection remain unqualified. These shunts add capacitance and leakage. They do not translate 5 V logic to 3.3 V, establish a system ESD rating or prove that an unpowered controller is protected. High-speed signal use remains unqualified. There are no LEDs, regulators or switches on this selected board.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the component-side locator below. Its dotted leaders identify connectors and links; they are not electrical paths. The three connectors share contact functions: **1 is 3.3 V, 2 is 5 V, 3–9 are GPIO, and 10 is ground**. The host MCU names depend on the selected Prime socket. The six focused contact sheets below retain every individual contact number and source net.

<a id="raw-pins-breakout-v15-reader-compact-overview"></a>

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-reference" src="/images/extensions/raw-pins-breakout/guides/reader-board-reference.svg" title="Raw Pins v15 — connectors and contact roles" alt="Canonical component-side Raw Pins v15 board with source-bound locators for the host link, raw header, chain link and chain isolation links, plus supply, GPIO and ground contact ranges." caption="Component-side locator. Dotted leaders identify parts, not conductors. Contacts 1 and 2 carry host supplies; GPIO direction depends on host configuration. Cutting a chain link affects J3 only. Use the six focused sheets below for every numbered contact. Actual assembly and protection remain unqualified." width=420 %}

<details markdown="1">
<summary>Combined contact reference — detailed source comparison</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-combined-contact-reference" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-reference.svg" title="Combined contact reference — detailed comparison" alt="Annotated component-side Raw Pins v15 abstract with contact numbers and functions for all three connectors, the ground test pad and four mounting holes." caption="Dense source comparison; use the six focused contact sheets for phone reading. Annotated reference for Raw Pins v15. Red pills identify 3.3 V, amber 5 V, teal GPIO and dark ground; the dark pill segment gives the module contact number. A double arrow marks bidirectional GPIO. Gray dotted leaders locate components, not wires." width=1440 %}

</details>

<details markdown="1">
<summary>Chain links and protection detail</summary>

The nine front-side links isolate contacts 1–9 on the chain connector. The seven signal shunts are projected in front coordinates; neither drawing establishes assembled protection or physical qualification.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-details" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-details.svg" title="Raw Pins v15: chain links and protection parts" alt="Native front-copper cut-link detail and front-coordinate projection of the seven underside transient shunts, with numbered function pills." caption="Links JP1–JP9 are on the front copper. The underside protection is projected in front coordinates, not shown as a mirrored rear assembly view. Neither panel establishes physical qualification." width=1440 %}

</details>

### Read every connector contact

The six sheets below cover J1, J2 and J3, five contacts per sheet. Their crops retain source pad positions. Dotted leaders identify pads; they are not circuit wires. Signal direction follows the host configuration.



{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-host-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-host-1-5-central-pills.svg" title="J1 · Host input — host 1 5" alt="J1 · Host input — host 1 5 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-host-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-host-6-10-central-pills.svg" title="J1 · Host input — host 6 10" alt="J1 · Host input — host 6 10 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-raw-header-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-raw-header-1-5-central-pills.svg" title="J2 · Raw pin header — raw header 1 5" alt="J2 · Raw pin header — raw header 1 5 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-raw-header-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-raw-header-6-10-central-pills.svg" title="J2 · Raw pin header — raw header 6 10" alt="J2 · Raw pin header — raw header 6 10 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-1-5-central-pills.svg" title="J3 · Chain output — chain 1 5" alt="J3 · Chain output — chain 1 5 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-6-10" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-6-10-central-pills.svg" title="J3 · Chain output — chain 6 10" alt="J3 · Chain output — chain 6 10 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Focused chain-link, protection and mounting sheets</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-links-1-5" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-links-1-5.svg" title="Chain isolation links — chain links 1 5" alt="Chain isolation links — chain links 1 5 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-chain-links-6-9" src="/images/extensions/raw-pins-breakout/guides/reader-compact-chain-links-6-9.svg" title="Chain isolation links — chain links 6 9" alt="Chain isolation links — chain links 6 9 for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-protection-1-4" src="/images/extensions/raw-pins-breakout/guides/reader-compact-protection-1-4-front-projection-underside-caption.svg" title="Signal protection — protection 1 4" alt="Signal protection — protection 1 4 for raw-pins-breakout v15" caption="Underside protection projected in front/component-side coordinates, not a mirrored rear view. Use the combined protection detail for viewing direction; assembled protection remains unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-protection-5-7" src="/images/extensions/raw-pins-breakout/guides/reader-compact-protection-5-7-front-projection-underside-caption.svg" title="Signal protection — protection 5 7" alt="Signal protection — protection 5 7 for raw-pins-breakout v15" caption="Underside protection projected in front/component-side coordinates, not a mirrored rear view. Use the combined protection detail for viewing direction; assembled protection remains unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-ground-test" src="/images/extensions/raw-pins-breakout/guides/reader-compact-ground-test.svg" title="Ground test pad — ground test" alt="Ground test pad — ground test for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-reader-compact-mounts" src="/images/extensions/raw-pins-breakout/guides/reader-compact-mounts.svg" title="Mounting holes — mounts" alt="Mounting holes — mounts for raw-pins-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

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

The selected PCB outline is **28.4 × 32 mm**, with a **1.6 mm** board-thickness setting. Its four non-plated mounting holes are **3.2 mm** in diameter on a **20 × 20 mm** square pattern. These are CAD dimensions; connector bodies and connected cables need additional mounting clearance.

The input and chain footprints specify Samtec SHF-105 headers on 1.27 mm pitch; the straight output specifies a Würth 61301011121 ten-pin header on 2.54 mm pitch. Pin numbering must be checked from the component-side illustration and against the actual cable. A connector that fits is not proof that pin 1 is wired correctly.

Treat contacts 3–9 as 3.3 V signals for this guide. Do not apply the 5 V supply to a signal pin. The adapter has no independent power supply and needs no load supply for the dry-contact example below. No usable current rating has been established for an assembled board and cable; both supply rails remain limited by the complete upstream path, connector, cable and PCB. Do not interpret the protection parts as permission to overload a rail.

The table gives the selected CAD net names, not firmware pin names. For example, `/P3` becomes PB1 only with the specific Prime socket and revision used below. Links JP1–JP9 are bridged by default in the source; inspect the actual assembly before relying on chain continuity. Cutting one leaves the corresponding J1-to-J2 connection and its signal shunt intact. Ground has no isolation link.

A chained module shares the original controller pins; the chain does not create additional independently addressable inputs. Check every attached device's pin ownership and output type before sharing a signal, so two outputs cannot drive it against each other. The adapter adds no pull-up, filtering or termination. A powered sensor or prototype therefore needs its own source-backed supply, logic-level and firmware requirements; the dry-contact example below does not establish compatibility with that device.



## Connect a normally-open button to Smoothieboard V2 Prime

> **Check the actual assembly before use.** These source-derived drawings show short outward leads from the selected J2 contacts and a complete ten-core ribbon. They do not qualify connector mating, cable orientation or three-dimensional clearance. Verify the actual parts and continuity with power off before following the procedure.

> **Keep the assembly unpowered.** This is a source-backed ten-core connection procedure for **P11 Prime2660 GF/J37 → Raw Pins v15 J1**. A matching plug, cavity orientation and physical fit have not been qualified. Verify the actual mating parts, all ten end-to-end contacts, supply rails and ownership of all seven GPIOs before energizing. The drawing alone cannot establish these checks.

The complete-board overview shows the cable and a normally-open dry button at J2. Its large labels identify the complete circuit; use the two numbered termination sheets for all ten electrical assignments and the J2 contact details for the button connections. Native silkscreen and short contact entries remain too fine at whole-board Fit; the seven consecutive cable-path details retain those source locations. The red cable edge identifies core 1 only after continuity is established; it never proves connector orientation.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-overview" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/overview-fit-readable.svg" title="Ten-core ribbon and dry button — complete circuit" alt="Complete P11 Prime and Raw Pins v15 canonical board artwork, ten-core J37 to J1 ribbon and two field leads from J2 to a normally-open dry button." caption="Conditional unpowered assembly. All ten host contacts connect, including both rails and all seven GPIOs. The two numbered markers connect the overview to the cable-path details. Use the readable termination and cable-path details; actual plug fit and orientation remain unverified." width=1200 %}

### Locate the two button contacts

Use these enlarged views to follow **J2.3 (/P3, PB1)** to one button terminal and **J2.10 (ground)** to the other. The native board artwork and continuous leads are preserved. These are component-side drawing details, not cable mating-face views.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-j2-signal-exit" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/j2-signal-finite-escape-headed.svg" title="Raw J2.3 — PB1 signal to the button" alt="Native Raw Pins J2.3 contact with continuous PB1 lead to the switch-A continuation." caption="Follow the lead from J2.3 to switch A in the complete circuit. Verify the actual mating contact separately; the drawing does not establish out-of-plane clearance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-j2-ground-exit" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/j2-return-finite-escape-headed.svg" title="Raw J2.10 — ground return from the button" alt="Native Raw Pins J2.10 ground contact with continuous lead to the switch-B continuation." caption="Follow the lead from J2.10 to switch B in the complete circuit. Connect only an isolated dry contact; leave power rails off the switch." width=420 %}

### Identify every ribbon contact

Both keys show **board-side pad positions**, not views into cable cavities. Match contact numbers with power off, including a check for shorts to adjacent contacts. Core 1 is J37.1 ↔ J1.1; every remaining core connects the same numbered contact. The Prime source specifies an unshrouded 1.27 mm header; the module specifies a Samtec SHF-105 header. Do not assume a keyed, reversible or off-the-shelf cable assembly has been established.

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-host-termination" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/host-termination.svg" title="Prime GF/J37 — all ten ribbon contacts" alt="Numbered component-side Prime J37 pad positions and all ten net-to-Raw-J1 bindings." caption="Component-side PCB positions, uniformly translated from the retained exploded key. Red contact is pin 1. Match the same number at both cable ends; a stripe does not prove contact identity. This is not a cable cavity view. Actual mating, orientation, continuity, rails and GPIO ownership must be checked with power off." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-remote-termination" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/remote-termination.svg" title="Raw Pins J1 — all ten ribbon contacts" alt="Numbered component-side Raw Pins J1 pad positions and all ten net-to-Prime-J37 bindings." caption="Component-side PCB positions, uniformly translated from the retained exploded key. All ten cores connect. Verify actual contact identity, mating orientation and continuity with power off; PB1 and ground continue through the PCB to the dry button on J2. Host rail limits do not establish an assembled cable rating." width=420 %}

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

These are consecutive close-ups of the same overview cable, with unchanged native artwork. Follow **H1 → H2 → H3 → H4** from the Prime plug to overview marker **1**, and **R1 → R2 → R3** from the Raw Pins plug to overview marker **2**. Blue and amber markers identify entry and continuation; they are not electrical joints. The overview joins markers 1 and 2 with the exterior cable path.



{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H1" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H1.svg" title="H1 — Prime plug to H-A" alt="Continuous cable close-up: Prime plug to H-A." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H2" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H2.svg" title="H2 — H-A to H-B" alt="Continuous cable close-up: H-A to H-B." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H3" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H3.svg" title="H3 — H-B to H-C" alt="Continuous cable close-up: H-B to H-C." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-H4" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/H4.svg" title="H4 — H-C to overview marker 1" alt="Continuous cable close-up: H-C to overview marker 1." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R1" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R1.svg" title="R1 — Raw Pins plug to R-A" alt="Continuous cable close-up: Raw Pins plug to R-A." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R2" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R2.svg" title="R2 — R-A to R-B" alt="Continuous cable close-up: R-A to R-B." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-ten-core-R3" src="/images/extensions/raw-pins-breakout/guides/ten-core-ribbon/R3.svg" title="R3 — R-B to overview marker 2" alt="Continuous cable close-up: R-B to overview marker 2." caption="Follow matching continuation identifiers. Markers follow the jacket; no electrical joint. Keep unpowered until plug, continuity, rails and GPIO ownership are checked." width=420 %}



### Connect and check the button

1. Disconnect power and machine loads. Confirm the documented host revision. Reserve **PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2**: all seven are attached by this cable even though only PB1 is used by the example. Remove conflicting assignments and attached circuits before proceeding; PB1 may otherwise be configured as an external motor direction output.
2. Establish suitable actual mating parts for both 1.27 mm headers. Check pin 1, cavity orientation and physical fit against those parts. Wire and continuity-test **all ten numbered contacts** using the table and two termination keys. Ordinary 2.54 mm jumper sockets are unsuitable for these headers. A stripe or apparent fit is insufficient.
3. Connect an electrically isolated normally-open button between **J2.3 (/P3, PB1)** and **J2.10 (ground)** using contacts suitable for J2's 2.54 mm header. J2 runs from contact 1 at the top to 10 at the bottom in the component-side artwork. Leave J2.1, J2.2 and the other signals without peripherals; the two supply contacts are still energized when the host is powered. Do not substitute a powered sensor output without checking its electrical interface.
4. Leave J3 unused. No solder-link change is needed: JP1–JP9 are bridged by default in the source. Inspect the actual assembly; these chain links do not isolate J2 from J1.
5. Check for swapped rails and shorts with power off. Both host rails reach the adapter even though the dry button needs no supply. No assembled cable/current rating or physical qualification is established by this guide. With loads disconnected, use the firmware example below and verify open/pressed state and halt behavior before operation.

<details markdown="1">
<summary>Retained individual-lead and earlier electrical studies — not the selected procedure</summary>

The drawings below preserve earlier research. They do not replace the ten-core contact table or its ownership checks. The individual-lead whole-board study has a PB1 path crossing component outlines; it is not an installation route. Some earlier source comparisons mix P11 artwork with P12 connector assignments and remain unqualified.

> **Wiring illustration incomplete.** The green PB1 lead in the archived complete-board study crosses other Prime component outlines, so its drawn path is not an installation route. The numbered contact mapping is retained for reference. A matching Gadgeteer plug and ribbon assembly, including its mating orientation and end-to-end continuity, has not been established for the selected host header; the archived individual-lead study does not establish that assembly. Do not infer a cable pinout from a red stripe or from this illustration.

<a id="raw-pins-breakout-v15-integral-installation"></a>

[Archived individual-lead whole-board study — known component-crossing defect; do not use as an installation route](/images/extensions/raw-pins-breakout/guides/wholeboard-label-clear/wholeboard-wiring.svg). The retained green PB1 path crosses C111, L3, C48 and C47. The SVG remains available for source comparison only.

### Retained numbered-contact comparison

These enlarged keys accompany the archived individual-lead study. Filled contacts show its selected signals; they do not specify which ribbon contacts to omit from the current ten-core procedure. Jumper keys identify the selected solder bridge. The keys preserve source numbering and do not establish cable mating-face orientation.

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-installation-key-j1" src="/images/extensions/raw-pins-breakout/guides/installation-contact-keys/J1-numbered-pads.svg" title="Archived study: J1 contact numbers" alt="Enlarged component-side pad positions for J1; filled contacts are selected in the complete circuit." caption="Archived individual-lead comparison only; use the selected ten-core procedure above for current instructions. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-installation-key-j2" src="/images/extensions/raw-pins-breakout/guides/installation-contact-keys/J2-numbered-pads.svg" title="Archived study: J2 contact numbers" alt="Enlarged component-side pad positions for J2; filled contacts are selected in the complete circuit." caption="Archived individual-lead comparison only; use the selected ten-core procedure above for current instructions. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-installation-key-j37" src="/images/extensions/raw-pins-breakout/guides/installation-contact-keys/J37-numbered-pads.svg" title="Archived study: J37 contact numbers" alt="Enlarged component-side pad positions for J37; filled contacts are selected in the complete circuit." caption="Archived individual-lead comparison only; use the selected ten-core procedure above for current instructions. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

This example uses **V2 P11 Prime2660**, socket **GF (J37)**, matching the complete Prime artwork. Other Prime revisions or sockets require their own pin map. On this host revision, socket contacts 3–9 are PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2 respectively. Contacts 1, 2 and 10 are the limited 3.3 V rail, limited 5 V rail and ground.

<details markdown="1">
<summary>Archived electrical comparisons — unqualified, not current instructions</summary>

The enlarged contact circuit is retained as an earlier source comparison. It is not a replacement for the selected ten-core procedure.

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-contact-detail-retained" src="/images/extensions/raw-pins-breakout/guides/native-contact-reader.svg" title="Archived individual-lead contact comparison" alt="Prime J37 contacts 3 and 10 connect through Raw Pins J1 and J2 to a normally-open dry button; all other contacts remain unused." caption="Archived proposal only; not the current ten-core instructions. Four solid external leads attach to actual connector-art contacts. Dashed electrical paths show existing PCB relationships; coloured locator leaders identify whole-board positions. All other contacts remain unconnected. Prime artwork and selected J37 functions are checked against P11 Prime2660. Read the numbered keys and verify actual contact identities with power off. Hardware qualification remains open." width=1800 %}

These retained layouts compare earlier individual-lead and ten-conductor proposals. The current selected procedure above connects all ten cable contacts; none of these archived comparisons supersedes it.

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-integral-installation-retained-alternative" src="/images/extensions/raw-pins-breakout/guides/prime-installation-wiring.svg" title="Earlier source comparison — unqualified installation" alt="Source-numbered Prime, extension board and selected peripheral with continuous autorouted electrical paths." caption="Earlier source comparison, not the selected ten-core procedure. Electrical schematic using retained P11 Prime artwork and a source-checked P12 connector assignment. Numbered symbols preserve electrical identities. Physical connector mating and complete artwork lint remain open." width=1950 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-v15-button-wiring" src="/images/extensions/raw-pins-breakout/guides/raw-pins-button-wiring.svg" title="Earlier ten-conductor source comparison — v15" alt="Smoothieboard Prime GF/J37 ten-conductor cable to Raw Pins J1, with continuous internal PB1 and ground paths to J2 and a normally-open dry switch." caption="Unqualified ten-conductor source comparison, not the selected ten-core procedure. Electrical schematic proposal using P11 Prime artwork and the source-verified P12 GF connector assignment. Numbered contact banks rearrange electrical identities; gray leaders locate artwork. Physical mating, native attachment and complete artwork validation remain unresolved." width=1680 %}

</details>

### Archived individual-lead proposal — not an installation procedure

This historical proposal used only two host-to-adapter leads, J37.3/PB1 to J1.3 and J37.10/ground to J1.10, plus two leads from J2.3 and J2.10 to an isolated normally-open button. It left other host contacts disconnected. Its complete-board drawing contains the component-crossing defect disclosed above; it does not establish a qualified cable or installation path. **Do not follow this archived proposal in place of the selected all-ten-core procedure.**

### Archived board-side contact numbering

The enlarged J37, J1 and J2 keys preserve PCB front/component-side pad positions from that comparison. Filled contacts identify the archived study's signals; they do not tell readers to omit the other eight conductors from the current ribbon. These are not cable-plug or mating-face views.

With both boards oriented as shown in the complete circuit and viewed from the component side:

- **Prime GF/J37:** contacts **1, 3, 5, 7, 9** run left to right along the lower row; **2, 4, 6, 8, 10** run left to right along the upper row. The selected PB1 contact is the second position of the lower row; ground is at the right end of the upper row.
- **Raw Pins J1:** contacts **1, 3, 5, 7, 9** run top to bottom down the left column; **2, 4, 6, 8, 10** run down the right column. The polarization notch is on the odd-contact side. Select contact 3, the second contact down on the left, and contact 10 at the bottom right.
- **Raw Pins J2:** the single column runs from contact **1 at the top** to **10 at the bottom**. Select the third contact down and the bottom contact.

The J1 notch and numbering agree with the [Samtec SHF through-hole series drawing](https://suddendocs.samtec.com/prints/shf-1xx-01-x-d-xx-xx-xx-mkt.pdf), sheet 1. These are **board-side positions**, not an instruction to mirror the cable plug by eye. The Prime source specifies an unshrouded vertical header without a part-specific mating drawing; the archived proposal therefore did not establish a keyed ribbon assembly. The selected ten-core procedure separately requires actual mating parts and all-ten-contact continuity checks.

<details markdown="1">
<summary>Original connector-coordinate comparison — enlarge to inspect</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-breakout-v15-orientation" src="/images/extensions/raw-pins-breakout/guides/raw-pins-breakout-connector-orientation.svg" title="Component-side connector numbering and cable continuity" alt="Exact native PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Component/front-side PCB views, uniformly enlarged eight times. Match pad numbers end to end; circles locate pad centres and do not depict connector cavities. No mating-face view or ribbon stripe is inferred." width=1200 %}


This retained coordinate comparison preserves all ten contact identities. Its larger numbered keys refer to the archived individual-lead proposal; the comparison does not establish a connector mating-face view. Follow the selected ten-core procedure for current instructions.

</details>

</details>

## Smoothieware configuration

The adapter itself requires no driver. Smoothieware configures the host pin and the device connected to it. The following example uses the V2 firmware's existing `buttonbox` module. The example is checked against upstream V2 source retrieved on 18 October 2026, at the revision linked below. This verifies the parser and software halt path; it has not been tested on physical hardware or against your installed firmware.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

`^` enables the internal pull-up; `!` inverts the input. The open contact is therefore inactive and pressing the button pulls PB1 to ground and makes it active. The buttonbox parser runs the `press` action on the inactive-to-active transition. `KILL` invokes the firmware halt path. This example is a software halt button, not a qualified emergency-stop circuit. It does not provide a safety-rated power disconnect. A button already held when the firmware starts can trigger the first active sample. Releasing it does not clear the halt; no release action is configured.

Do not copy the sample's `PB1-` setting for this bare contact: `-` disables the pull-up and pull-down. Without external bias, an open contact could float. If the firmware reports that PB1 is already allocated, resolve the conflicting assignment instead of choosing an arbitrary pin number.

A missing board-specific driver is not an issue for this passive adapter. If your intended attached device needs firmware support that is absent, email **wolf.arthur@gamil.com** and describe the device, host revision and intended connections.

## Check the configured input before using machine loads

Keep machine loads disabled while checking the example. These are the expected consequences of the source-checked pull-up, inversion and `KILL` action, not recorded hardware test results.

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

## Sources and revision notes

[Download the documented v15 CAD study](/assets/downloads/extensions/raw-pins-breakout/raw-pins-cad-study.zip) (361 KiB). It includes the editable KiCad project, schematic and PCB, custom libraries, visualization models, schematic PDF, netlist, parts list, placement export, specification and license notices. Open the project with **KiCad 9** and its standard symbol, footprint and 3D-model libraries; keep the bundled directories together. The included source notes explain dependencies and the manifest identifies the retained files. Only two netlist source-location fields were made project-relative; component and net data are unchanged.

This is the **retained v15 CAD study**, not a released or fabrication-qualified board. The direct upstream board-source URLs listed previously are unavailable (HTTP 404); the downloadable archive above is the current access route for those v15 files. Firmware and historical-board links below are separate public sources.

The v15 PCB and its retained netlist agree on all 63 connected component pads. The retained schematic export still says v11 in its title block; that stale title does not select the illustrated PCB revision. Physical connector mating, assembled current capacity, system ESD performance and operation remain unqualified.

The editable v15 PCB and schematic, netlist, parts list, specification, source notes, library files and license notices are included in the CAD-study download above. The previously listed individual upstream file URLs returned HTTP 404 when checked on 2026-10-25, so the download is the current source-access path.
- [Historical BreakoutPins source](https://github.com/Smoothieware/Smoothieboard2/tree/master/extensions/BreakoutPins)
- [Matching P11 Prime2660 PCB and J37 pin nets](https://github.com/Smoothieware/Smoothieboard2/blob/487d57897a97a5ed57febf8cc5d7c3b89ed3a1f8/V2_P11_Prime2660/smoothiev2-prime-2660.kicad_pcb)
- [V2 firmware button-box sample](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/button-box.ini)
- [V2 button-box parser and halt action](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L211)
- [V2 input suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L208-L270)
- [V2 host pin documentation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/pins.md)
- [All extension boards](/extension-boards)

Use the CAD-study download for the locally documented source revision. Firmware links select the reviewed upstream source; they do not identify the firmware installed on your controller.

<details markdown="1">
<summary>Additional board views and development history</summary>

{% include _includes/extension-board-visuals.html slug="raw-pins-breakout" %}

The upstream URLs for the architecture decisions and development trials currently return HTTP 404; those optional engineering-history files are not included in the v15 CAD-study download. They do not change the revision selected by this guide.

</details>
