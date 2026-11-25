---
layout: default
title: "LED breakout"
permalink: /extensions/led-breakout
---

# LED breakout

Seven low-current indicators are intended to make GPIO activity visible for bench debugging. The schematic feeds each channel LED from 3.3 V through its resistor and intends it to light when its GPIO sinks current, so indication is active-low. It does not produce seven extra output pins or buffer high-power loads. The selected design also has a power indicator and per-indicator disable links. The source polarity conflict below must be resolved before assembly or powered use.

## Revision and availability

This guide selects the **v18 package**, matching the retained abstract export. The selected schematic retains title revision **v10**, dated 2026-10-03, and the comment “STUDY: unqualified, not for fabrication”. These provenance fields do not establish an assembled release. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

**LED polarity conflict in the selected source:** the schematic symbol `SLB:LED_K1A2` assigns pin 1 to cathode and pin 2 to anode. The PCB connects signal LED pad 1 to its GPIO and pad 2 to its resistor/disable link, consistent with that intended circuit. However, the embedded `LED_APT1608_K1A2` footprint description says pad 1 is anode and pad 2 is cathode. Those descriptions disagree. The PCB names Kingbright **APT1608SYCK** for D3–D9 and **APT1608CGCK** for D1; these are source-declared candidates, not evidence of fitted parts or a verified manufacturer-to-land mapping. Resolve the exact part drawing, land numbering and assembly orientation before fabrication or energizing. The contact inventory below preserves source pad numbers without settling this conflict.

## Interfaces, power and operating limits

J1 Y contacts 3–9 are the seven observed GPIOs; contacts 1/2/10 are 3.3 V/5 V/ground. In v18, each channel uses a 2.2 kΩ ±10% series resistor (R3–R9). For the PB1 example, J1.3 reaches D3 pad 1; R3 and JP13 feed pad 2 from the common LED supply. Calling those pads cathode/anode follows the schematic convention only; the footprint conflict above remains unresolved. JP1 must also retain that common feed for indication. J2 is the chain behind per-signal links JP3–JP9. JP1 disconnects the common feed for the seven signal LEDs; D1’s separate power-indicator feed bypasses JP1 and is controlled by JP16; separate CUT TO DISABLE links disconnect individual indicators. Removing a LED link is different from cutting a chain signal. GPIO source/sink current, bias during reset and total header load must remain within the actual host and selected resistor/LED limits. The host 5 V contact is not a valid LED signal voltage.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-overview" src="/images/extensions/led-breakout/guides/reader-compact-overview.png" title="Seven-signal LED board — overview" alt="Seven-signal LED board — overview for led-breakout v18" caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reference" src="/images/extensions/led-breakout/guides/reader-reference.png" title="Annotated board reference — v18" alt="led-breakout v18 annotated board reference, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>

Start with the overview, then use the focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-host-input-1-5" src="/images/extensions/led-breakout/guides/reader-compact-host-input-1-5-central-pills.png" title="J1.1–5 · Host power and signals" alt="J1.1–5 · Host power and signals on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-host-input-6-10" src="/images/extensions/led-breakout/guides/reader-compact-host-input-6-10-central-pills.png" title="J1.6–10 · Host signals and ground" alt="J1.6–10 · Host signals and ground on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-output-1-5" src="/images/extensions/led-breakout/guides/reader-compact-chain-output-1-5-central-pills.png" title="J2.1–5 · Downstream power and signals" alt="J2.1–5 · Downstream power and signals on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-output-6-10" src="/images/extensions/led-breakout/guides/reader-compact-chain-output-6-10-central-pills.png" title="J2.6–10 · Downstream signals and ground" alt="J2.6–10 · Downstream signals and ground on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-signal-leds-3-6" src="/images/extensions/led-breakout/guides/reader-compact-signal-leds-3-6.png" title="D3–D6 · Signal indicators" alt="D3–D6 · Signal indicators on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-links-3-6" src="/images/extensions/led-breakout/guides/reader-compact-chain-links-3-6.png" title="JP3–JP6 · Downstream signal links" alt="JP3–JP6 · Downstream signal links on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-signal-leds-7-9" src="/images/extensions/led-breakout/guides/reader-compact-signal-leds-7-9.png" title="D7–D9 · Signal indicators" alt="D7–D9 · Signal indicators on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-links-7-9" src="/images/extensions/led-breakout/guides/reader-compact-chain-links-7-9.png" title="JP7–JP9 · Downstream signal links" alt="JP7–JP9 · Downstream signal links on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-disable-links-1-4" src="/images/extensions/led-breakout/guides/reader-compact-disable-links-1-4.png" title="JP10–JP13 · Individual LED disable links" alt="JP10–JP13 · Individual LED disable links on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-disable-links-5-8" src="/images/extensions/led-breakout/guides/reader-compact-disable-links-5-8.png" title="JP14–JP17 · Individual LED disable links" alt="JP14–JP17 · Individual LED disable links on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-led-feed-and-power" src="/images/extensions/led-breakout/guides/reader-compact-led-feed-and-power.png" title="JP1 and D1 · LED feed and power indicator" alt="JP1 and D1 · LED feed and power indicator on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-test-pads" src="/images/extensions/led-breakout/guides/reader-compact-test-pads-underside-caption.png" title="Test pads · Source signal access" alt="Test pads · Source signal access on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-mounting-holes" src="/images/extensions/led-breakout/guides/reader-compact-mounting-holes.png" title="Mounting holes · Board attachment" alt="Mounting holes · Board attachment on the selected LED v18 source." caption="Selected-source component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

</details>

The overview and thirteen focused references identify the selected source design’s connectors, indicators, links and test pads. Their functional labels and contact numbers have been inspected in the actual desktop and phone viewer. Use the focused sheets or zoom for small native artwork labels; the source drawing does not establish fitted parts or a manufactured cable’s mating geometry.

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| led-breakout / D1 | 3V3 POWER green | Indicator | 1: GND; 2: LED_D1_DISABLE |
| led-breakout / D3 | LED3 yellow | Indicator | 1: /Y_P3; 2: LED_D3_DISABLE |
| led-breakout / D4 | LED4 yellow | Indicator | 1: /Y_P4; 2: LED_D4_DISABLE |
| led-breakout / D5 | LED5 yellow | Indicator | 1: /Y_P5; 2: LED_D5_DISABLE |
| led-breakout / D6 | LED6 yellow | Indicator | 1: /Y_P6; 2: LED_D6_DISABLE |
| led-breakout / D7 | LED7 yellow | Indicator | 1: /Y_P7; 2: LED_D7_DISABLE |
| led-breakout / D8 | LED8 yellow | Indicator | 1: /Y_P8; 2: LED_D8_DISABLE |
| led-breakout / D9 | LED9 yellow | Indicator | 1: /Y_P9; 2: LED_D9_DISABLE |
| led-breakout / J1 | Y IN (host) | Host connector | 1: +3V3; 2: +5V; 3: /Y_P3; 4: /Y_P4; 5: /Y_P5; 6: /Y_P6; 7: /Y_P7; 8: /Y_P8; 9: /Y_P9; 10: GND |
| led-breakout / J2 | Y CHAIN | Chain connector | 1: +3V3; 2: +5V; 3: /CHAIN_P3; 4: /CHAIN_P4; 5: /CHAIN_P5; 6: /CHAIN_P6; 7: /CHAIN_P7; 8: /CHAIN_P8; 9: /CHAIN_P9; 10: GND |
| led-breakout / TP1 | TP 3V3 | Observation only | 1: +3V3 |
| led-breakout / TP10 | TP GND | Observation only | 1: GND |
| led-breakout / TP11 | TP GND | Observation only | 1: GND |
| led-breakout / TP2 | TP 5V pass-through | Observation only | 1: +5V |
| led-breakout / JP1 | LED FEED (cut = LEDs off) | Service link/selector | 1: +3V3; 2: /+3V3_LED |
| led-breakout / JP10 | CUT TO DISABLE D9 | Service link/selector | 1: LED_D9_DISABLE; 2: /LED9_A |
| led-breakout / JP11 | CUT TO DISABLE D8 | Service link/selector | 1: LED_D8_DISABLE; 2: /LED8_A |
| led-breakout / JP12 | CUT TO DISABLE D5 | Service link/selector | 1: LED_D5_DISABLE; 2: /LED5_A |
| led-breakout / JP13 | CUT TO DISABLE D3 | Service link/selector | 1: LED_D3_DISABLE; 2: /LED3_A |
| led-breakout / JP14 | CUT TO DISABLE D6 | Service link/selector | 1: LED_D6_DISABLE; 2: /LED6_A |
| led-breakout / JP15 | CUT TO DISABLE D7 | Service link/selector | 1: LED_D7_DISABLE; 2: /LED7_A |
| led-breakout / JP16 | CUT TO DISABLE D1 | Service link/selector | 1: LED_D1_DISABLE; 2: /PWR_A |
| led-breakout / JP17 | CUT TO DISABLE D4 | Service link/selector | 1: LED_D4_DISABLE; 2: /LED4_A |
| led-breakout / JP3 | CHAIN P3 | Service link/selector | 1: /Y_P3; 2: /CHAIN_P3 |
| led-breakout / JP4 | CHAIN P4 | Service link/selector | 1: /Y_P4; 2: /CHAIN_P4 |
| led-breakout / JP5 | CHAIN P5 | Service link/selector | 1: /Y_P5; 2: /CHAIN_P5 |
| led-breakout / JP6 | CHAIN P6 | Service link/selector | 1: /Y_P6; 2: /CHAIN_P6 |
| led-breakout / JP7 | CHAIN P7 | Service link/selector | 1: /Y_P7; 2: /CHAIN_P7 |
| led-breakout / JP8 | CHAIN P8 | Service link/selector | 1: /Y_P8; 2: /CHAIN_P8 |
| led-breakout / JP9 | CHAIN P9 | Service link/selector | 1: /Y_P9; 2: /CHAIN_P9 |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-connector-detail-01" src="/images/extensions/led-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01 — v18" alt="led-breakout v18 connector detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-link-detail-01" src="/images/extensions/led-breakout/guides/reader-link-detail-01.png" title="Link detail 01 — v18" alt="led-breakout v18 link detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-link-detail-02" src="/images/extensions/led-breakout/guides/reader-link-detail-02.png" title="Link detail 02 — v18" alt="led-breakout v18 link detail 02, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>



</details>

## Practical connection to Smoothieboard V2 Prime

**DO NOT ENERGIZE.** These are unpowered connection studies. Host rail budget, GPIO loading, LED current and fitted bridges remain unqualified. All seven indicators are onboard; no external peripheral is needed. Keep J2 disconnected. Choose one connection arrangement below and check numbered continuity with power removed; the drawn contact projections do not specify a qualified mating plug.

### Ten-core connection for all seven indicators

The complete-board drawing shows a straight-through ten-core connection: **Prime J37 contact n connects to LED J1 contact n**, for contacts 1–10. The grey jacket represents the bundled conductors; the contact keys below identify the individual source pads. Verify the numbering at both ends rather than relying on the stripe or viewing direction.

- **Power and return:** J37.1 → J1.1 supplies limited 3.3 V; J37.2 → J1.2 carries limited 5 V; J37.10 → J1.10 is ground. The 5 V conductor is not a GPIO signal.
- **Signal contacts 3–6:** PB1 → J1.3/D3; PJ4 → J1.4/D4; PA4 → J1.5/D5; PG0 → J1.6/D6.
- **Signal contacts 7–9:** PJ3 → J1.7/D7; PG1 → J1.8/D8; PJ2 → J1.9/D9.

Each indicator uses its own resistor and disable link, with JP1 providing the common 3.3 V feed. A LOW signal sinks current and is intended to light its LED. This observes the seven existing host signals; it does not create additional GPIOs. Reserve every connected signal in the machine configuration. The PB1 firmware example below controls only D3 and does not configure the other six pins.

The channel schedule keeps the LED-disable link separate from the downstream chain link. Every row uses the same numbered contact at Prime J37 and LED J1. All seven resistor values are 2.2 kΩ ±10%; their exact orderable resistor identities remain unconfirmed in the selected source.

<div class="extension-contact-table" role="region" aria-label="LED channel schedule; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Prime GPIO | J37 → J1 contact | Onboard indicator | Series resistor | Indicator-disable link | Separate J1 → J2 chain link |
|---|---|---|---|---|---|
| PB1 | 3 → 3 | D3 | R3 | JP13 | JP3 → J2.3 |
| PJ4 | 4 → 4 | D4 | R4 | JP17 | JP4 → J2.4 |
| PA4 | 5 → 5 | D5 | R5 | JP12 | JP5 → J2.5 |
| PG0 | 6 → 6 | D6 | R6 | JP14 | JP6 → J2.6 |
| PJ3 | 7 → 7 | D7 | R7 | JP15 | JP7 → J2.7 |
| PG1 | 8 → 8 | D8 | R8 | JP11 | JP8 → J2.8 |
| PJ2 | 9 → 9 | D9 | R9 | JP10 | JP9 → J2.9 |

</div>

JP1 supplies the common signal-indicator rail. The separate power indicator uses **3.3 V → R1 → JP16 → D1 → ground** and bypasses JP1. Opening an indicator-disable link removes that indicator branch; opening a chain link interrupts its downstream signal. Neither action adds buffering or isolation. Keep J2 unused in this study; the table identifies its circuit nodes without selecting a downstream module or qualifying a second power source.

#### Trace every numbered connection and onboard branch

The following three sheets are **electrical keys**, with deliberately re-spaced schematic contacts. They bind the selected LED v18 source to **V2 P11 Prime2660 J37** directly; the ten numbered source nets agree with the separately checked P12 allocation used by the retained whole-board drawing. This agreement does not establish whole-board interchangeability. These keys do not specify native pad spacing, connector viewing direction, cable stripe orientation or a mating assembly.

The ten-core key retains contacts 1–10, including the unused-by-the-LED-circuit 5 V pass-through. In the branch keys, **LED+** means the single common `/+3V3_LED` node after **JP1.2**, supplied from **J1.1 → JP1.1**. **3V3** means J1.1, and **GND** means J1.10; their source and return are Prime J37.1 and J37.10 through the numbered cores. The seven named GPIO returns use their corresponding cores 3–9. These named nodes describe existing PCB connectivity rather than extra proposed wires or seven separate supplies. J2 and its chain links are outside the selected connection and remain unused.

Numbers above each component are its **source pad numbers**, not polarity labels. Each resistor is 2.2 kΩ ±10%, including R1. The blocks represent source circuit elements, not fitted component shapes; a link block does not prove an assembled bridge. The LED blocks deliberately make no anode/cathode claim. All sources remain off.

{% include _includes/extension-instruction-diagram.html id="led-v18-source-ten-core-key" src="/images/extensions/led-breakout/guides/source-circuit/ten-core-electrical-key.png" title="All ten Prime J37 to LED J1 connections" alt="Source-numbered electrical key for all ten P11 Prime J37 to LED v18 J1 connections, including 3.3 V, 5 V, seven signals and ground." caption="Schematic contact spacing, not a cable layout or mating-face view. Every core has its own continuous path. Read with the complete-board reference and numbered continuity schedule. Native connector escape, cable assembly and powered qualification remain open." width=900 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-source-paths-3-6" src="/images/extensions/led-breakout/guides/source-circuit/indicator-paths-3-6.png" title="Existing indicator paths: D3–D6" alt="Source-numbered paths from the common LED feed through each resistor and disable link to LED pads and PB1, PJ4, PA4 or PG0." caption="Electrical topology only. LED+ is the common rail after JP1.2. The numbers are component pads. Source-defined indicator polarity conflicts with the embedded footprint description; no fitted LED or orientation is selected." width=900 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-source-paths-7-9-power" src="/images/extensions/led-breakout/guides/source-circuit/indicator-paths-7-9-power.png" title="Existing paths: D7–D9, D1 and JP1" alt="Source-numbered paths for PJ3, PG1 and PJ2 indicators, the separate 3.3 V power indicator to ground, and the JP1 common LED feed." caption="Electrical topology only. D1 bypasses JP1; JP16 controls D1 alone. JP1 feeds all seven LED+ nodes. Source pad numbers preserve the unresolved LED polarity conflict. Fitted bridges, current limits and powered behavior remain unverified." width=900 %}

The electrical keys preserve every selected external core and every indicator branch. They do **not** qualify the complete-board cable layout: native two-row connector escape, full source-art paint clearance and whole-board Fit remain open. This is an unresolved illustration and connector-qualification limit, not a claim that physical wiring is impossible. Use the source contact keys below to identify actual pads.

{% include _includes/extension-instruction-diagram.html id="led-v18-ten-core-complete" src="/images/extensions/led-breakout/guides/whole-circuit/led-whole-circuit.png" title="Complete Prime and LED board: ten-core connection" alt="Complete Prime and LED v18 boards connected by a ten-core ribbon, with one-to-one J37 and J1 contact numbering and seven onboard active-low indicators." caption="All sources OFF. Whole source boards and native contact positions are retained. Plug outlines are symbolic contact projections, not verified mating faces. Prime P11 artwork accompanies the checked P12 allocation. Fine coloured contact paths fall below one screen pixel at whole-image Fit; use the numbered schedule and enlarged keys to inspect contacts. Complete routing, painted clearance and Fit acceptance remain open. The source LED-polarity conflict and physical connector fit also remain unresolved." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-host-entry-detail" src="/images/extensions/led-breakout/guides/whole-circuit/prime-j37-entry-detail.png" title="Prime J37 cable entry detail" alt="Enlarged source-exact host cable entry from the complete LED wiring diagram, with the grey cable entering the dashed symbolic plug." caption="Exact enlargement of the same wiring drawing. Follow the grey cable into the symbolic plug and use the numbered contact keys below. This is a board-side electrical illustration, not a mating-face view." width=800 %}

The following keys match the board orientations in the ten-core drawing. The LED board is unrotated here; the separate three-lead drawing below rotates it by 180°. Follow the numbered pads in the matching key, not the apparent left or right side of a cable.

{% include _includes/extension-instruction-diagram.html id="led-v18-j37-ten-core-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j37-ten-core-key.png" title="Prime J37 ten-core contact key" alt="All ten numbered source pads with Prime signal assignments, matching the ten-core complete-board drawing." caption="All sources OFF. Front copper coordinates, not a mating-face view. Match contact numbers at both ends; do not infer plug orientation from this projection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-j1-ten-core-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j1-ten-core-key.png" title="LED J1 ten-core contact key" alt="All ten numbered source pads with Prime signal assignments, matching the ten-core complete-board drawing." caption="All sources OFF. Front copper coordinates, not a mating-face view. Match contact numbers at both ends; do not infer plug orientation from this projection." width=420 %}

### Three individual leads for the D3-only study

For the narrower PB1 electrical comparison, only contacts 1, 3 and 10 are selected instead of the full ribbon. Leave every other contact unused at both ends. This contact schedule does not specify a loose-wire attachment to the Gadgeteer header: a suitable mating assembly or breakout and its numbered continuity still need qualification.

- **3.3 V supply:** Prime J37.1 `/3V3_LIMIT` → LED J1.1 `+3V3`. The current allowance remains unqualified.
- **Indicator signal:** Prime J37.3 `PB1` → LED J1.3 `/Y_P3`. LOW is intended to light onboard D3.
- **Ground:** Prime J37.10 `GND` → LED J1.10 `GND`, providing the power-indicator and capacitor return.

These are three individual proposed leads, not a qualified cable or mating-face drawing. Leave contact 2 and contacts 4–9 unused at both ends. The complete Prime P11 artwork accompanies a native-source-checked P12 J37 allocation; this does not establish whole-board revision interchangeability.

### Three-lead drawing and contact companions

The following alternative drawing shows both complete boards and all three proposed leads. Its large labels give the contact map and unpowered limits; use the companion contact keys to identify individual native pads and the explanation below to follow the onboard current path. Continuous lines are external leads. Read the wiring overview, connection conditions and both contact keys together before preparing this study. The onboard path and firmware example are explained below.

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-wholeboard-wiring" src="/images/extensions/led-breakout/guides/wholeboard-context/wholeboard-wiring.png" title="Complete Prime and LED board: three unpowered leads" alt="Complete Prime and LED board: three unpowered leads; source-bound v18 unpowered study" caption="All sources OFF. Read mandatory limits and contact keys. Native PCB coordinates do not establish physical mating, populated bridges or powered operation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-mandatory-limits" src="/images/extensions/led-breakout/guides/contact-keys-readable/mandatory-limits.png" title="Mandatory limits: do not energize" alt="Mandatory limits: do not energize; source-bound v18 unpowered study" caption="All sources OFF. Read mandatory limits and contact keys. Native PCB coordinates do not establish physical mating, populated bridges or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-j37-contact-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j37-contact-key.png" title="Prime J37 contact key" alt="Prime J37 contact key; source-bound v18 unpowered study" caption="All sources OFF. Read mandatory limits and contact keys. Native PCB coordinates do not establish physical mating, populated bridges or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-j1-contact-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j1-contact-key.png" title="LED J1 contact key" alt="LED J1 contact key; source-bound v18 unpowered study" caption="All sources OFF. Read mandatory limits and contact keys. Native PCB coordinates do not establish physical mating, populated bridges or powered operation." width=420 %}

#### How the onboard indicator works

The selected source path is **J1.1 (3.3 V) → JP1 → common LED rail → R3 (2.2 kΩ, ±10%) → JP13 → D3 pad 2**. D3 pad 1 returns through **J1.3 → PB1**. The schematic calls pad 2 anode and pad 1 cathode; the embedded footprint description reverses those names, so the assembled polarity remains unresolved. Under the schematic convention, driving PB1 LOW is intended to light D3; HIGH is intended to turn it off. This board has passive indicators, with no output buffer or extra GPIO.

For the LED3 path, JP1 feeds the seven-signal LED rail and JP13 connects D3 pad 2. **JP16 controls only the separate D1 power indicator and is not required for LED3.** D1’s R1 feed starts directly at 3.3 V and bypasses JP1. Source bridged footprints do not prove fitted continuity; no cut/bridge alteration is authorized by this study. The other onboard signal branches remain present with their unused GPIO-side pads floating; reset and leakage behavior remain unqualified.

<details markdown="1">
<summary>Earlier contact-expanded and full-cable studies — optional</summary>

These retained figures are source evidence, not the selected complete-board procedure. Extra conductors in the full-cable comparison remain unselected; do not combine them with the three-lead study. Physical mating and powered acceptance are unverified.

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-compact-installation" src="/images/extensions/led-breakout/guides/native-contact/led-native-reader.png" title="Light onboard LED3" alt="Three individual leads connect J37 and J1 contacts 1, 3 and 10; PB1 LOW sinks current through onboard LED3." caption="Three continuous leads terminate on actual enlarged source-art contacts. All odd/even row contacts are retained; row separation is illustrative. Dashed leaders locate the source artwork and onboard D3; they are not wires. Component-side projections are not mating faces. Prime P11 artwork uses source-checked P12 J37 contacts. Verify numbered contacts and selected solder bridges with power off. Actual desktop and narrow viewer checks remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-installation-key-j1" src="/images/extensions/led-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 contact numbers for this installation" alt="Enlarged component-side pad positions for J1; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-installation-key-j37" src="/images/extensions/led-breakout/guides/native-contact/reader-contact-keys/J37-numbered-pads.png" title="J37 contact numbers for this installation" alt="Enlarged component-side pad positions for J37; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-prime-installation" src="/images/extensions/led-breakout/guides/prime-installation-wiring.png" title="Earlier full-cable source comparison — not the selected three-lead procedure" alt="Ten continuous conductors connect each numbered Prime GF/J37 contact to the matching extension input contact, with both source board abstracts and the onboard peripheral shown." caption="Selected-source electrical schematic with an integral numbered connector symbol. The source uses two-row 1.27 mm pads; symbols use one column at 20 mm depicted pitch for clarity. P11 Prime artwork is shown; checked P12 GF/J37 contact identities agree. This is not a mating-face view. Use the selected three-lead procedure above; this retained comparison adds unused conductors and is not its installation recipe. Complete artwork audit and physical orientation remain open." width=1950 %}

</details>

The retained complete-board studies use the **V2 P12 Prime2590** GF/J37 allocation with P11 artwork. The new electrical keys independently read **V2 P11 Prime2660 J37**: both selected sources assign contacts 1/2/10 to limited 3.3 V/limited 5 V/ground and contacts 3–9 to PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded; verify numbered continuity and cable orientation with power removed. Reserve pins in the complete machine configuration. This checked header agreement does not qualify other Prime revisions, whole-board interchangeability, rail-current allowance, timer routes or bus muxes.

## Smoothieware behaviour and commissioning

No board-specific driver is needed. Disconnect the LED board and machine loads for a host-only GPIO observation first. This source-based candidate adapts the V2 [switch] digital syntax to free GF/J37.3 PB1; the ! suffix makes the LED active-low. It is not a hardware-run qualification.

```ini
[switch]
led_test.enable = true
led_test.output_pin = PB1!
led_test.output_type = digital
led_test.input_on_command = M106
led_test.input_off_command = M107
led_test.subcode = 9
led_test.startup_state = false
led_test.halt_set_to = false
```

With the LED board **disconnected**, `M107.9` requests PB1 HIGH, `M106.9` requests LOW, then `M107.9` requests HIGH. This inverted source behavior is intended to extinguish/illuminate/extinguish LED3 after electrical qualification; it is not a powered commissioning instruction or observed LED result. Reserve PB1 and command subcode 9 exclusively, and merge the eight fields into the existing `[switch]` section. Other GPIOs need their own availability checks. If required support is absent, email **wolf.arthur@gamil.com**.


The [reviewed V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) matches the retained source byte for byte. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output. This identifies source behavior, not the installed firmware or tested hardware.

## What remains unresolved

The source-declared LED candidates still need their manufacturer-to-land polarity reconciled; fitted parts, forward voltage/current, floating unused cathode behavior, reset loading, host budget, individual link population and physical cable fit remain unqualified. The annotated references, contact keys and wiring illustrations retain earlier desktop/phone inspection history. That history does not close the current wiring gate: the selected ten-core drawing has subpixel coloured conductors at whole-image Fit, and complete painted clearance remains unresolved. Some essential headings also fall below the 16-pixel Fit target at the measured narrow viewport. Enlarged keys and the explicit schedule above aid source inspection but do not repair the complete drawing. Retained alternatives do not establish an accepted installation. The matching native-source download is available below; anonymous access to the upstream engineering repository remains unverified.

### Power-off inspection and troubleshooting

Keep the host, LED board and any downstream supply disconnected while resolving these conditions. These are source comparisons and passive inspection steps, not a commissioning procedure.

<div class="extension-contact-table" role="region" aria-label="Power-off LED inspection checks; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Condition to investigate | Power-off check | What remains required |
|---|---|---|
| Cable numbering or orientation is uncertain | Identify both connector views and trace each numbered conductor against the ten-contact schedule, including both supply contacts and ground. Do not infer numbering from the red edge alone. | A qualified mating assembly and correct end-to-end map; never trial reversed orientations under power. |
| One signal indicator path is interrupted | Use that channel’s row to distinguish its resistor/indicator-disable link from the separate chain link. Inspect fitted parts and continuity against the unchanged source. | Resolve LED polarity and actual population before interpreting a dark indicator as a GPIO state. Do not bridge or cut links from this guide alone. |
| All seven signal indicators appear disconnected | Compare JP1 and the common signal-indicator rail separately from R1/JP16/D1. | D1’s separate feed means its condition alone cannot prove continuity through JP1 or all seven branches. |
| A future qualified setup disagrees with the PB1 command example | With the LED board disconnected, review PB1 ownership, the `PB1!` inversion, reserved subcode 9 and the installed firmware version. | A separately qualified host observation and hardware commissioning record; the source example is not an observed LED test. |

</div>

## Sources and revision notes

### Retained study notes

The original text sheets remain available as [link-selection notes](/images/extensions/led-breakout/guides/wholeboard-context/selectors.png), [internal circuit notes](/images/extensions/led-breakout/guides/wholeboard-context/internal-operation.png), [source and chain notes](/images/extensions/led-breakout/guides/wholeboard-context/source-and-chain.png), and [firmware notes](/images/extensions/led-breakout/guides/wholeboard-context/firmware-request.png). These retained study sheets include older verification-status wording; use this page’s current source download, configuration example and review limits.

### Download the matching editable design

[Download the LED v18 CAD study (ZIP, 91 KiB)](/assets/downloads/extensions/led-breakout/led-cad-study.zip). The archive contains the unchanged selected PCB, schematic, project, bill of materials, both library tables, two local symbol libraries and four local footprints, with source hashes and license notices. The selected directory is **v18**; the schematic title block retains **v10** and the PCB title block retains **v02**. The archive preserves those labels rather than treating them as interchangeable hardware revisions.

Open **`attempt/versions/v18/led-breakout.kicad_pro`** with **KiCad 9** and keep the complete `attempt/` directory together. Its original footprint table reaches `attempt/footprints/` through a relative path; moving only the project folder breaks that dependency. Native board design settings and rules are stored in the project; there is no separate `.kicad_dru` in the selected source directory. Standard KiCad 9 footprint libraries remain external dependencies, while their selected geometry is embedded in the PCB for inspection.

This is a **2D source study**, not a fabrication or qualified operating release. It excludes Gerbers, drills, alternate population projects, renders, process reports and the netlist export containing workstation paths. No 3D models are redistributed: existing references to the local Samtec model and the separate KiCad model library are listed in `SOURCE-MANIFEST.json`. Read `SOURCE-NOTES.txt` before moving or updating libraries. The download does not establish LED current, host loading, fitted link states, cable mating or physical operation.

### Upstream references

- [Selected v18 led-breakout PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/attempt/versions/v18/led-breakout.kicad_pcb)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

Native source declares CERN-OHL-S-2.0. Retained Prime upstream notices identify CERN OHL v1.2-or-later and GPL v3-or-later. A separate collection-wide canonical SVG licence has not been established; native-source licensing must not be presented as that permission.

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; the matching local CAD-study download above supplies the selected native files without repository access. Anonymous upstream access remains unverified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="led-breakout" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
