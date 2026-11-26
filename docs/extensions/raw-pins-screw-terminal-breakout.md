---
layout: default
title: "Raw pins screw terminal breakout"
permalink: /extensions/raw-pins-screw-terminal-breakout
---

# Raw pins screw terminal breakout

Use this passive adapter to attach low-voltage signal wiring to screw terminals. It provides access to existing host pins, with low-speed transient shunts; it does not add a controller, translate voltage or drive a motor.

## Purpose and operation

This board presents one keyed 10-contact Y Gadgeteer connection at ten 3.5 mm terminals and a downstream chained Y connection. It has J1 input, J2 chain, J3 terminal block, optional Qwiic J4, nine cut links JP1–JP9, and seven GPIO shunts D1–D7 to GND. It adds no firmware function. Seven terminal signal lines are connected to the host contacts; rail and signal continuity to the chain is gated by cuttable links for contacts 1–9; GND remains continuous. The optional four-contact connector has J4.1 = GND, J4.2 = +3V3, J4.3 = P9 and J4.4 = P8. Its Qwiic label does not mean that the Prime socket supplies a supported I²C bus. Do not connect another host or external Qwiic supply.

## Specifications, power and signal direction

The circuit is passive: the host supplies the rails and sets each signal's function. It provides no voltage conversion, galvanic isolation or load driver. Use the button example below as an input application; an output or bus application needs its own host configuration and a compatible peripheral.

<div class="extension-contact-table" role="region" aria-label="Specifications and electrical limits; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connection or feature | Direction and use | Limit |
| --- | --- | --- |
| J1 host input | One ten-contact host connection; 2 × 5, 1.27 mm pitch | The Prime and breakout footprints differ; check the fitted cable and its mating orientation. |
| J3.1 / J3.2 | Host 3.3 V / 5 V rails to accessories | Rail, terminal and cable current are limited by the host and the fitted parts. Do not feed external power into these terminals. The button example uses neither rail. |
| J3.3–J3.9 | P3–P9 signals; input or output as configured on the host | Treat every signal as 3.3 V only. A terminal does not add drive current or change the pin's capabilities; avoid connecting two outputs together. |
| J3.10 | Shared circuit ground and signal return | Common with host ground; not protective earth or an isolated return. |
| J2 chain | Downstream continuation of the same host contacts | Contacts 1–9 pass through their corresponding cut links; ground stays connected. Opening a link isolates the chain contact, not its J3 terminal. Do not attach a second host. |
| J4 optional four-contact connector | GND, 3.3 V, P9, P8 in contact order | Shares the same host nets; the connector provides no bus controller or I²C support. |
| J3 terminal block | Ten individual screw terminals, 3.5 mm pitch | Take wire gauge, tightening torque and current rating from the fitted part's specification. |
| D1–D7 signal shunts | Signal-to-ground transient paths | Low-speed protection only; the shunts add leakage and capacitance. |

</div>

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

Start with the connector overview, then use the focused sheets for exact contact numbers, chain links and protection. Check the links on your board and cable orientation before connecting.

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-overview" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-overview.png" title="Screw-terminal breakout — overview" alt="Screw-terminal breakout — overview on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-host-input-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-host-input-contacts-1-5-central-pills.png" title="J1 · Host input — host input contacts 1 5" alt="J1 · Host input — host input contacts 1 5 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-host-input-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-host-input-contacts-6-10-central-pills.png" title="J1 · Host input — host input contacts 6 10" alt="J1 · Host input — host input contacts 6 10 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-screw-output-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-screw-output-contacts-1-5-central-pills.png" title="J3 · Screw output — screw output contacts 1 5" alt="J3 · Screw output — screw output contacts 1 5 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-screw-output-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-screw-output-contacts-6-10-central-pills.png" title="J3 · Screw output — screw output contacts 6 10" alt="J3 · Screw output — screw output contacts 6 10 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-output-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-output-contacts-1-5-central-pills.png" title="J2 · Chain output — chain output contacts 1 5" alt="J2 · Chain output — chain output contacts 1 5 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-output-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-output-contacts-6-10-central-pills.png" title="J2 · Chain output — chain output contacts 6 10" alt="J2 · Chain output — chain output contacts 6 10 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-four-contact-output-contacts-1-4" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-four-contact-output-contacts-1-4-central-pills.png" title="J4 · 4-pin output — four contact output contacts 1 4" alt="J4 · 4-pin output — four contact output contacts 1 4 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-links-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-links-1-5.png" title="Chain links 1–5 — chain links 1 5" alt="Chain links 1–5 — chain links 1 5 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-links-6-9" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-links-6-9.png" title="Chain links 6–9 — chain links 6 9" alt="Chain links 6–9 — chain links 6 9 on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-signal-ground-clamps" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-signal-ground-clamps-front-projection.png" title="Signal ground clamps — signal ground clamps" alt="Signal ground clamps — signal ground clamps on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-test-pads-and-mounts" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-test-pads-and-mounts.png" title="Test pads and mounts — test pads and mounts" alt="Test pads and mounts — test pads and mounts on the screw-terminal breakout" caption="Component-side reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

<details markdown="1">
<summary>Larger combined reference and contact sheets</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reference" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-reference-front-projection.png" title="Annotated board reference" alt="Raw pins screw terminal breakout annotated board reference, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation on your parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-connector-detail-01" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Raw pins screw terminal breakout connector detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation on your parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-connector-detail-02" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Raw pins screw terminal breakout connector detail 02, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation on your parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-link-detail-01" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-link-detail-01.png" title="Link detail 01" alt="Raw pins screw terminal breakout link detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation on your parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-link-detail-02" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-link-detail-02.png" title="Link detail 02" alt="Raw pins screw terminal breakout link detail 02, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation on your parts." width=1440 %}

The combined reference keeps the whole board visible. Use the focused contact sheets for fine labels and the installation section for the cable connections. Check the connector separately; a PCB pad view is not a cable mating-face view.

</details>

## Contact table

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector contact | Net | What it connects to |
|---|---|---|
| J1.1 | +3V3 | J3.1, Qwiic J4.2, JP1.1 |
| J1.2 | +5V | J3.2 and JP2.1 |
| J1.3–J1.9 | P3–P9 | Matching J3 terminal; corresponding D1–D7 shunt to GND; JP3–JP9 link toward matching chain contact |
| J1.8/J1.9 | P8/P9 | Also J4.4/J4.3 respectively; this does not provide host I²C support |
| J1.10 | GND | J2.10, J3.10, Qwiic GND, and TVS ground |
| J2.1–J2.9 | CH_+3V3, CH_+5V, CH_P3–CH_P9 | Chain side of JP1–JP9 |
| J2.10 | GND | Continuous to input ground |
| J3.1–J3.10 | +3V3, +5V, P3–P9, GND | Ten individual screw terminals in contact order |
| JP1–JP9 | series bridge | J1 contact to corresponding J2 contact; J1 side is common with corresponding J3; opening bridge isolates downstream chain only |
| D1–D7 | GPIO-to-GND shunts | Protection for P3–P9; low-speed, 3.3 V signals only |

</div>

</details>


This netlist uses its own connector references; check the board-view labels for physical screw-terminal orientation.

## Smoothieboard V2 Prime connection

The host shown is Smoothieboard V2 Prime (Prime2660). It maps J37.3–J37.9 to PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2, with J37.10 = GND. J37.1 and J37.2 carry the nets 3V3_LIMIT and 5V_LIMIT; neither rail is used in the button example. These contact identities do not indicate cable keying or mating-face orientation: match the connector marks and check end-to-end contact numbers before wiring. The firmware pin table marks PB1, PA4 and PG1 not 5 V tolerant; treat every GPIO contact as 3.3 V only. Connect only a single host and keep outside circuits unpowered.


### Select the connector hardware

The board uses three different interfaces:

- **Prime J37:** a generic vertical, surface-mount, 2 × 5 header on a **1.27 mm pitch**. The Prime design does not name a manufacturer or mating cable. Do not assume it has the breakout’s polarization feature.
- **Breakout J1:** the footprint is for **Samtec SHF-105-01-L-D-TH-LC**, a shrouded 2 × 5, **1.27 mm** header. [Samtec’s product information](https://www.samtec.com/products/shf-105-01-l-d-th-lc) identifies its polarization notch and the FFSD/FFTP mating families without strain relief. The footprint puts its notch below the contact rows and pin 1 at the lower left in the component-side PCB view. The numbering agrees with [Samtec’s through-hole PCB layout, sheet 4](https://suddendocs.samtec.com/prints/shf-1xx-01-x-d-xx-xx-footprint.pdf). A cable’s mating-face view is different; do not copy left/right positions from the PCB view.
- **Breakout J3:** a ten-position, **3.5 mm pitch** Phoenix-style horizontal terminal-block footprint. Use the numbered terminal key rather than guessing which end is terminal 1.

Check that your parts match these footprints. A generic 2.54 mm jumper plug does not fit the 1.27 mm interface. The procedure below uses all ten contacts; the button itself uses only PB1 and ground. Both rails and the other six GPIOs are carried to the board and must be accounted for.

## Firmware interaction

The passive breakout needs no board-specific driver. Each P3–P9 contact follows its corresponding host pin’s configured function. The button example below requires an unallocated PB1 input and a signal no higher than 3.3 V; it is not a universal pin assignment. 

## Wire a normally-open button

The circuit below uses a **complete ten-core cable** from **Prime J37 to breakout J1**, followed by two leads from **J3.3 (P3/PB1)** and **J3.10 (ground)** to a dry, isolated, normally-open button. The button uses no supply rail, but the complete cable carries both rails and all seven GPIOs to the breakout. Keep J2 unconnected and isolate every unused J3 terminal.

> **Assemble with power off.** The drawings show contact positions and continuous routed paths. They do not select a cable assembly or show either cable mating-face orientation. Prime J37 is generic; do not assume the breakout's Samtec polarization at the host. Check the mating parts, all ten end-to-end contact numbers, rail limits and GPIO ownership before energizing.

Start with the complete host and board view, then use the three contact details and full contact schedule. The overview is context on a phone; the focused views carry the readable contact numbers. The red edge denotes core 1; check its continuity, because it does not prove cable orientation.


{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-integral-installation" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-ten-core-overview.png" title="Prime, ten-core cable and dry button" alt="Prime, ten-core cable and dry button" caption="Component-side contact positions are not cable mating-face views. Keep unpowered until mating, continuity, rails and pin ownership are checked." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-prime-j37-entry-detail" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/prime-j37-entry-detail.png" title="Prime J37 cable entry detail" alt="Enlarged host entry from the complete screw-terminal wiring drawing" caption="Enlarged crop of the complete circuit. The grey ten-core jacket joins the symbolic plug; use the numbered J37 key for contact identities. This is not a cable mating-face view." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j37" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/prime-j37-ten-contact.png" title="Prime J37 — ten contact positions" alt="Prime J37 — ten contact positions" caption="Component-side contact positions are not cable mating-face views. Keep unpowered until mating, continuity, rails and pin ownership are checked." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j1" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-j1-ten-contact.png" title="Breakout J1 — ten contact positions" alt="Breakout J1 — ten contact positions" caption="Component-side contact positions are not cable mating-face views. Keep unpowered until mating, continuity, rails and pin ownership are checked." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j3" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-j3-dry-button-contacts.png" title="J3.3 signal and J3.10 ground to the button" alt="J3.3 signal and J3.10 ground to the button" caption="Component-side contact positions are not cable mating-face views. Keep unpowered until mating, continuity, rails and pin ownership are checked." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-ten-core-schedule" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/ten-core-contact-schedule.png" title="All ten cable contacts and signal names" alt="All ten cable contacts and signal names" caption="Component-side contact positions are not cable mating-face views. Keep unpowered until mating, continuity, rails and pin ownership are checked." width=1000 %}

1. Disconnect all power and machine loads. Confirm that the host is a Prime2660, then reserve PB1 for this input. Check the configured function and electrical limits of all six other connected GPIOs; the cable exposes them even though the button does not use them.
2. Obtain suitable mating hardware for both 1.27 mm headers. Wire **J37.n → J1.n for every contact 1–10**, using the complete schedule and numbered keys. With power off, check every end-to-end contact and absence of shorts; neither a red stripe nor an apparent fit establishes that mapping. Ordinary 2.54 mm jumper plugs are unsuitable.
3. Connect one isolated button terminal to **J3.3** and the other to **J3.10**. These nets join J1.3 and J1.10 inside the passive board; no extra internal leads are needed. Leave J2 and all other J3 terminals unused and insulated. Do not attach an externally powered signal to the switch input.
4. Inspect strands, solder links and jumpers. Check that the open switch leaves PB1 disconnected from ground and a press joins only PB1 to ground. Confirm supply/ground polarity and available load current before applying power.
5. With machine loads disconnected, use the following V2 input configuration after completing the preceding hardware and pin-ownership checks. The controller's internal pull-up biases this bare switch; no board-specific driver is needed.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

The `^` suffix enables the pull-up; `!` inverts the input so a ground closure becomes an active logical input. The V2 buttonbox parser executes `press` when its sampled state changes from inactive to active. A button already held when sampling starts can trigger on its first sample. `KILL` calls the firmware halt path; release does not issue an unhalt action. This is a software-halt example, not an emergency-stop circuit or power disconnect.

Do not substitute the sample's unbiased `PB1-` setting for this bare switch.

See the [V2 buttonbox source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp) and its [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp). Startup with the button held can invoke the first press action; releasing it does not unhalt the machine.

### Match the numbered cable contacts
{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-orientation" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/raw-pins-screw-terminal-breakout-connector-orientation.png" title="Component-side connector numbering and cable continuity" alt="PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Component/front-side PCB views, uniformly enlarged eight times. Match pad numbers end to end; circles locate pad centres and do not depict connector cavities. No mating-face view or ribbon stripe is inferred." width=1200 %}

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

## Design files and further reading

[Download the KiCad design files (ZIP, 1.1 MB)](/assets/downloads/extensions/raw-pins-screw-terminal-breakout/raw-pins-screw-terminal-cad-study.zip). The archive contains the editable PCB, schematic, project and local libraries, plus the schematic, netlist, bill of materials and placement exports.

Open the project with KiCad 9 and keep the bundled libraries beside it. One optional Samtec connector 3D model is omitted for redistribution reasons; the references to it remain in the project. Standard KiCad 9 libraries are also needed for some optional 3D views. The archive includes source and dependency notices.

- [PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v24/raw-pins-screw-terminal-breakout.kicad_pcb)
- [Schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v24/exports/schematic-netlist.xml)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/specs.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="raw-pins-screw-terminal-breakout" %}

</details>
