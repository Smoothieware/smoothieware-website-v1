---
layout: default
title: "Raw pins screw terminal breakout"
permalink: /extensions/raw-pins-screw-terminal-breakout
---

# Raw pins screw terminal breakout

Use this passive adapter to attach low-voltage signal wiring to screw terminals. It provides access to existing host pins, with conditional low-speed transient shunts; it does not add a controller, translate voltage or drive a motor.

## Purpose and operation

This board presents one keyed 10-contact Y Gadgeteer connection at ten 3.5 mm terminals and a downstream chained Y connection. The netlist retained in the v24 package shows J1 input, J2 chain, J3 terminal block, optional Qwiic J4, nine cut links JP1–JP9, and seven GPIO shunts D1–D7 to GND. It adds no firmware function. Seven terminal signal lines are connected to the host contacts; rail and signal continuity to the chain is gated by cuttable links for contacts 1–9; GND remains continuous. The optional four-contact connector has J4.1 = GND, J4.2 = +3V3, J4.3 = P9 and J4.4 = P8 in both the selected PCB and netlist. Its Qwiic label does not establish that the selected Prime socket supplies a supported I²C bus. Do not connect another host or external Qwiic supply.

## Revision and source boundary

This guide selects **v24**, the retained PCB and abstract revision. Family specifications still identify the earlier v17 inspection prototype; they are historical context, not evidence that the illustrated v24 is released. The v24 source remains an unqualified design candidate: physical terminal/header fit, current capacity and system ESD behavior remain unresolved. The diagrams explain the saved circuit; do not treat this candidate as a ready-to-build assembly.

## Specifications, power and signal direction

The selected circuit is passive: the host supplies the rails and sets each signal's function. It provides no voltage conversion, galvanic isolation or load driver. Use the button example below as an input application; an output or bus application needs its own verified host configuration and compatible peripheral.

<div class="extension-contact-table" role="region" aria-label="Specifications and electrical limits; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connection or feature | Direction and use | Limit or qualification |
| --- | --- | --- |
| J1 host input | One ten-contact host connection; 2 × 5, 1.27 mm pitch | The Prime and breakout footprints differ; a fitted cable and its mating orientation remain unverified. |
| J3.1 / J3.2 | Host 3.3 V / 5 V rails to accessories | Available rail current, terminal current and cable capacity are unqualified. Do not feed external power into these terminals. The button example uses neither rail. |
| J3.3–J3.9 | P3–P9 signals; input or output as configured on the host | Treat every signal as 3.3 V only. A terminal does not add drive current or change the pin's capabilities; avoid connecting two outputs together. |
| J3.10 | Shared circuit ground and signal return | Common with host ground; not protective earth or an isolated return. |
| J2 chain | Downstream continuation of the same host contacts | Contacts 1–9 pass through their corresponding cut links; ground stays connected. Opening a link isolates the chain contact, not its J3 terminal. Do not attach a second host. |
| J4 optional four-contact connector | GND, 3.3 V, P9, P8 in contact order | Shares the same host nets; no additional bus controller or verified I²C support is provided by the connector. |
| J3 terminal block | Ten individual screw terminals, 3.5 mm pitch | Wire gauge, tightening torque and assembled current rating require the actual fitted part's specification; none is qualified by this study. |
| D1–D7 signal shunts | Signal-to-ground transient paths | Low-speed protection candidate only; assembled clamping, leakage, capacitance and system ESD performance remain unqualified. |

</div>

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

Start with the connector overview, then use the focused sheets for exact contact numbers, chain links and protection. All sheets show the selected v24 source; check the actual assembled links and cable orientation before connecting.

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-overview" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-overview.png" title="Screw-terminal breakout — overview" alt="Screw-terminal breakout — overview for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-host-input-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-host-input-contacts-1-5-central-pills.png" title="J1 · Host input — host input contacts 1 5" alt="J1 · Host input — host input contacts 1 5 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-host-input-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-host-input-contacts-6-10-central-pills.png" title="J1 · Host input — host input contacts 6 10" alt="J1 · Host input — host input contacts 6 10 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-screw-output-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-screw-output-contacts-1-5-central-pills.png" title="J3 · Screw output — screw output contacts 1 5" alt="J3 · Screw output — screw output contacts 1 5 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-screw-output-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-screw-output-contacts-6-10-central-pills.png" title="J3 · Screw output — screw output contacts 6 10" alt="J3 · Screw output — screw output contacts 6 10 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-output-contacts-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-output-contacts-1-5-central-pills.png" title="J2 · Chain output — chain output contacts 1 5" alt="J2 · Chain output — chain output contacts 1 5 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-output-contacts-6-10" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-output-contacts-6-10-central-pills.png" title="J2 · Chain output — chain output contacts 6 10" alt="J2 · Chain output — chain output contacts 6 10 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-four-contact-output-contacts-1-4" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-four-contact-output-contacts-1-4-central-pills.png" title="J4 · 4-pin output — four contact output contacts 1 4" alt="J4 · 4-pin output — four contact output contacts 1 4 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-links-1-5" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-links-1-5.png" title="Chain links 1–5 — chain links 1 5" alt="Chain links 1–5 — chain links 1 5 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-chain-links-6-9" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-chain-links-6-9.png" title="Chain links 6–9 — chain links 6 9" alt="Chain links 6–9 — chain links 6 9 for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-signal-ground-clamps" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-signal-ground-clamps-front-projection.png" title="Signal ground clamps — signal ground clamps" alt="Signal ground clamps — signal ground clamps for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reader-compact-test-pads-and-mounts" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-compact-test-pads-and-mounts.png" title="Test pads and mounts — test pads and mounts" alt="Test pads and mounts — test pads and mounts for screw-terminal breakout v24" caption="Component-side v24 reference. Use the overview to locate parts and the numbered details to identify contacts. Follow the complete cable and button instructions below; the drawing is not a cable mating-face view." width=420 %}

<details markdown="1">
<summary>Larger combined reference and contact sheets</summary>

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-reference" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-reference-front-projection.png" title="Annotated board reference — v24" alt="raw-pins-screw-terminal-breakout v24 annotated board reference, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-connector-detail-01" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01 — v24" alt="raw-pins-screw-terminal-breakout v24 connector detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-connector-detail-02" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02 — v24" alt="raw-pins-screw-terminal-breakout v24 connector detail 02, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-link-detail-01" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-link-detail-01.png" title="Link detail 01 — v24" alt="raw-pins-screw-terminal-breakout v24 link detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-link-detail-02" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/reader-link-detail-02.png" title="Link detail 02 — v24" alt="raw-pins-screw-terminal-breakout v24 link detail 02, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

The combined reference keeps the whole board visible. Use the focused contact sheets for fine labels and the installation section for the actual cable connections. Verify the fitted connector separately; a PCB pad view is not a cable mating-face view.


</details>

## Contact table from v24 schematic netlist

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector contact | Net | What it connects to |
|---|---|---|
| J1.1 | +3V3 | J3.1, Qwiic J4.2, JP1.1 |
| J1.2 | +5V | J3.2 and JP2.1 |
| J1.3–J1.9 | P3–P9 | Matching J3 terminal; corresponding D1–D7 shunt to GND; JP3–JP9 link toward matching chain contact |
| J1.8/J1.9 | P8/P9 | Also J4.4/J4.3 respectively; no host I²C support implied |
| J1.10 | GND | J2.10, J3.10, Qwiic GND, and TVS ground |
| J2.1–J2.9 | CH_+3V3, CH_+5V, CH_P3–CH_P9 | Chain side of JP1–JP9 |
| J2.10 | GND | Continuous to input ground |
| J3.1–J3.10 | +3V3, +5V, P3–P9, GND | Ten individual screw terminals in canonical contact order |
| JP1–JP9 | series bridge | J1 contact to corresponding J2 contact; J1 side is common with corresponding J3; opening bridge isolates downstream chain only |
| D1–D7 | GPIO-to-GND shunts | Conditional protection for P3–P9; board source warns low-speed/3.3 V limits and unqualified capacitance/leakage/clamp behavior |

</div>

</details>


The selected PCB and retained schematic netlist agree on all **68 connected component contacts**. This comparison checks saved pad-to-net assignments, not manufactured copper continuity. This netlist uses its own connector references and must not be interpreted as physical screw-terminal orientation until the board-view labels are inspected. It records schematic intended connectivity, not connector orientation or operating limits.

## Smoothieboard V2 Prime connection

The illustrated host is Smoothieboard V2 Prime P11 (Prime2660). Its native PCB maps J37.3–J37.9 to PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2, with J37.10 = GND. J37.1 and J37.2 carry the source nets 3V3_LIMIT and 5V_LIMIT; neither rail is used in the button example. These ten contact identities were checked directly against the P11 PCB. They do not establish cable keying or mating-face orientation: match the actual connector marks and verify end-to-end contact numbers before wiring. The firmware pin table marks PB1, PA4 and PG1 not 5 V tolerant; treat every GPIO contact as 3.3 V only. Available rail current is not established. Connect only a single host; keep outside circuits unpowered unless a reviewed source arrangement explicitly says otherwise.


### Select the connector hardware

The saved footprints identify three different interfaces:

- **Prime J37:** a generic vertical, surface-mount, 2 × 5 header on a **1.27 mm pitch**. The P11 PCB does not name a manufacturer or mating cable. Do not assume it has the breakout’s polarization feature.
- **Breakout J1:** the custom footprint names **Samtec SHF-105-01-L-D-TH-LC**, a shrouded 2 × 5, **1.27 mm** header. [Samtec’s product information](https://www.samtec.com/products/shf-105-01-l-d-th-lc) identifies its polarization notch and the FFSD/FFTP mating families without strain relief. The saved footprint puts its notch below the contact rows and pin 1 at the lower left in the component-side PCB view. The numbering agrees with [Samtec’s through-hole PCB layout, sheet 4](https://suddendocs.samtec.com/prints/shf-1xx-01-x-d-xx-xx-footprint.pdf). A cable’s mating-face view is different; do not copy left/right positions from the PCB view.
- **Breakout J3:** a ten-position, **3.5 mm pitch** Phoenix-style horizontal terminal-block footprint. Use the numbered terminal key rather than guessing which end is terminal 1.

Confirm that the assembled parts match these saved footprints. A generic 2.54 mm jumper plug is not the documented 1.27 mm interface. The selected proposal uses all ten contacts; the button itself uses only PB1 and ground. Both rails and the other six GPIOs are carried to the board and must be accounted for. No specific harness assembly or installed mating face has been verified.

## Firmware interaction

The passive breakout needs no board-specific driver. Each P3–P9 contact follows its corresponding host pin’s configured function. The button example below requires an unallocated PB1 input and a signal no higher than 3.3 V; it is not a universal pin assignment. If your attached peripheral requires firmware support that is absent, email **wolf.arthur@gamil.com** with its identity, board revision and intended use.

## Wire a normally-open button

The source-backed circuit below uses a **complete ten-core cable** from **Prime P11 J37 to breakout J1**, followed by two leads from **J3.3 (P3/PB1)** and **J3.10 (ground)** to a dry, isolated, normally-open button. The button uses no supply rail, but the complete cable carries both rails and all seven GPIOs to the breakout. Keep J2 unconnected and isolate every unused J3 terminal.

> **Unpowered assembly proposal.** The drawings attach to native source contact positions and show continuous routed paths. They do not select a fitted cable assembly or establish either cable mating-face orientation. Prime J37 is generic; the breakout's Samtec polarization cannot be assumed at the host. Resolve the actual mating parts, all ten end-to-end contact numbers, rail limits and GPIO ownership before energizing. These drawings are not a hardware qualification.

Start with the complete host and board view, then use the three contact details and full contact schedule. The overview is context on a phone; the focused views carry the readable contact numbers. The red edge denotes proposed core 1 after its contact identity is established; it does not prove cable orientation.


{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-integral-installation" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-ten-core-overview.png" title="Prime, ten-core cable and dry button" alt="Prime, ten-core cable and dry button" caption="Directory v24, drawing title v17; Prime P11 native contacts. Component-side source positions are not cable mating-face views. Keep unpowered until actual mating, continuity, rails and pin ownership are resolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-prime-j37-entry-detail" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/prime-j37-entry-detail.png" title="Prime J37 cable entry detail" alt="Enlarged exact host entry from the complete screw-terminal wiring drawing" caption="Exact enlarged crop of the complete circuit. The grey ten-core jacket joins the symbolic plug; use the numbered J37 key for contact identities. This is not a cable mating-face view." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j37" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/prime-j37-ten-contact.png" title="Prime J37 — ten contact positions" alt="Prime J37 — ten contact positions" caption="Directory v24, drawing title v17; Prime P11 native contacts. Component-side source positions are not cable mating-face views. Keep unpowered until actual mating, continuity, rails and pin ownership are resolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j1" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-j1-ten-contact.png" title="Breakout J1 — ten contact positions" alt="Breakout J1 — ten contact positions" caption="Directory v24, drawing title v17; Prime P11 native contacts. Component-side source positions are not cable mating-face views. Keep unpowered until actual mating, continuity, rails and pin ownership are resolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-native-j3" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/screw-j3-dry-button-contacts.png" title="J3.3 signal and J3.10 ground to the button" alt="J3.3 signal and J3.10 ground to the button" caption="Directory v24, drawing title v17; Prime P11 native contacts. Component-side source positions are not cable mating-face views. Keep unpowered until actual mating, continuity, rails and pin ownership are resolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="screw-v24-ten-core-schedule" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/native-ribbon-proposal/ten-core-contact-schedule.png" title="All ten cable contacts and signal names" alt="All ten cable contacts and signal names" caption="Directory v24, drawing title v17; Prime P11 native contacts. Component-side source positions are not cable mating-face views. Keep unpowered until actual mating, continuity, rails and pin ownership are resolved." width=1000 %}

1. Disconnect all power and machine loads. Confirm directory v24/drawing v17 and Prime P11, then reserve PB1 for this input. Check the configured function and electrical limits of all six other connected GPIOs; the cable exposes them even though the button does not use them.
2. Resolve suitable mating hardware for both 1.27 mm headers. Wire **J37.n → J1.n for every contact 1–10**, using the complete schedule and native numbered keys. With power off, check every end-to-end contact and absence of shorts; neither a red stripe nor an apparent fit establishes that mapping. Ordinary 2.54 mm jumper plugs are unsuitable.
3. Connect one isolated button terminal to **J3.3** and the other to **J3.10**. These source nets join J1.3 and J1.10 inside the passive board; no extra internal leads are needed. Leave J2 and all other J3 terminals unused and insulated. Do not attach an externally powered signal to the switch input.
4. Inspect strands, solder links and jumpers. Check that the open switch leaves PB1 disconnected from ground and a press joins only PB1 to ground. Confirm supply/ground polarity and the board's source revision before considering power; available load current and a fitted assembly are not qualified here.
5. With machine loads disconnected, use the following source-checked V2 input configuration only after the preceding hardware and pin-ownership checks are resolved. The controller's internal pull-up biases this bare switch; no board-specific driver is needed.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

The `^` suffix enables the pull-up; `!` inverts the input so a ground closure becomes an active logical input. The V2 buttonbox parser executes `press` when its sampled state changes from inactive to active. A button already held when sampling starts can trigger on its first sample. `KILL` calls the firmware halt path; release does not issue an unhalt action. This is a software-halt example, not a qualified emergency-stop circuit or power disconnect.

The buttonbox and pin-parser syntax is checked against upstream V2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`, linked below. The example has not been run on the controller. Do not substitute the sample's unbiased `PB1-` setting for this bare switch.

The selected button syntax and press/release behavior were also checked against [upstream V2 buttonbox source at a pinned revision](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp) and its [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp). This identifies the reviewed implementation, not the installed firmware. Startup with the button held can invoke the first press action; releasing it does not unhalt the machine.

## Instructional diagrams

Use the complete native-contact circuit, three focused contact views and ten-contact schedule above. The older electrical-role and cable comparisons below are retained studies, not alternative installation instructions. Physical cable mating remains unverified.


<details markdown="1">
<summary>Earlier electrical layout and full-cable comparisons</summary>

These archived comparisons predate the native-attached ten-core proposal above. Do not use their detached role boxes or selective-lead assumptions to choose cable contacts.

[Archived four-lead electrical-role study](/images/extensions/raw-pins-screw-terminal-breakout/guides/wholeboard-electrical-role-proposal.png). The original artwork is preserved; its role-box endpoints do not specify physical contact attachment.

[Archived enlarged-contact comparison](/images/extensions/raw-pins-screw-terminal-breakout/guides/prime-source-contact-dry-button-role56.png).

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-integral-installation-retained-alternative" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/prime-source-located-installation.png" title="Earlier source comparison — unqualified installation" alt="Source-numbered Prime, extension board and selected peripheral with continuous autorouted electrical paths." caption="Retained source comparison only; use the native-contact ten-core proposal above. This earlier layout does not qualify native attachment or a fitted cable. Dashed lines locate connectors and solid paths represent electrical relationships. P11 artwork uses selected P12 J37 assignments." width=1950 %}

{% include _includes/extension-instruction-diagram.html src="/images/extensions/raw-pins-screw-terminal-breakout/guides/raw-pins-screw-terminal-breakout-button-wiring.png" id="raw-pins-screw-terminal-breakout-v24-wiring" title="Earlier ten-conductor source comparison — v24" alt="Prime GF/J37 ten-conductor cable to the extension board, with continuous selected internal paths and a normally-open switch to ground." caption="Electrical schematic candidate using P11 Prime artwork and source-verified P12 GF/J37 assignments. Numbered banks show electrical identities rather than physical cavities. Verify cable continuity and pin 1; physical mating and native attachment remain unqualified." width="1920" %}

### Match the numbered cable contacts

{% include _includes/extension-instruction-diagram.html id="raw-pins-screw-terminal-breakout-v24-orientation" src="/images/extensions/raw-pins-screw-terminal-breakout/guides/raw-pins-screw-terminal-breakout-connector-orientation.png" title="Component-side connector numbering and cable continuity" alt="Exact native PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Component/front-side PCB views, uniformly enlarged eight times. Match pad numbers end to end; circles locate pad centres and do not depict connector cavities. No mating-face view or ribbon stripe is inferred." width=1200 %}

</details>

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

## Source files and further reading

[Download the retained v24 CAD study (ZIP, 1.1 MB)](/assets/downloads/extensions/raw-pins-screw-terminal-breakout/raw-pins-screw-terminal-cad-study.zip). It contains the editable PCB, schematic, project and local libraries, plus the schematic, netlist, bill of materials and placement exports. The directory is v24, while the native title blocks still say v17; the included source manifest identifies the exact snapshot. This is an unqualified design study, not fabrication data.

Open the project with KiCad 9 and keep the bundled libraries beside it. One optional Samtec connector 3D model is omitted because its redistribution terms are unestablished; the original references to that visualization remain in the CAD. Standard KiCad 9 libraries are also needed for some optional 3D views. The archive includes source and dependency notices. It has been checked for file integrity and required library paths, but has not been opened and qualified as a complete KiCad assembly.

The upstream engineering links below remain unavailable to anonymous readers and are retained for provenance. Use the local study download for this documented snapshot; firmware links are separate sources.

- [Selected v24 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v24/raw-pins-screw-terminal-breakout.kicad_pcb)
- [Selected-source schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v24/exports/schematic-netlist.xml)
- [Family specification and retained earlier revisions](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/specs.md)
- [All extension boards](/extension-boards)

Some engineering-source links may require repository access. Availability of those links remains a separate check from the local source review.

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="raw-pins-screw-terminal-breakout" %}

</details>
