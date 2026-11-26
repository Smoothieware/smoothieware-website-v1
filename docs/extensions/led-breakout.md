---
layout: default
title: "LED breakout"
permalink: /extensions/led-breakout
---

# LED breakout

Seven low-current indicators make GPIO activity visible for bench debugging. Each channel LED is fed from 3.3 V through its resistor and lights when its GPIO sinks current, so indication is active-low. It does not produce seven extra output pins or buffer high-power loads. The board also has a power indicator and per-indicator disable links. Check the LED polarity described below before assembly or powered use.

## Interfaces, power and operating limits

J1 Y contacts 3–9 are the seven observed GPIOs; contacts 1/2/10 are 3.3 V/5 V/ground. Each channel uses a 2.2 kΩ ±10% series resistor (R3–R9). For the PB1 example, J1.3 reaches D3 pad 1; R3 and JP13 feed pad 2 from the common LED supply. Calling those pads cathode/anode follows the schematic convention; see the polarity note under Connection to Smoothieboard V2 Prime. JP1 must also retain that common feed for indication. J2 is the chain behind per-signal links JP3–JP9. JP1 disconnects the common feed for the seven signal LEDs; D1’s separate power-indicator feed bypasses JP1 and is controlled by JP16; separate CUT TO DISABLE links disconnect individual indicators. Removing a LED link is different from cutting a chain signal. GPIO source/sink current, bias during reset and total header load must remain within the actual host and resistor and LED limits. The host 5 V contact is not a valid LED signal voltage.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-overview" src="/images/extensions/led-breakout/guides/reader-compact-overview.png" title="Seven-signal LED board — overview" alt="Seven-signal LED board — overview" caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reference" src="/images/extensions/led-breakout/guides/reader-reference.png" title="Annotated board reference" alt="LED breakout annotated board reference, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation before wiring." width=1440 %}

</details>

Start with the overview, then use the focused sheets for exact contacts, controls and links.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-host-input-1-5" src="/images/extensions/led-breakout/guides/reader-compact-host-input-1-5-central-pills.png" title="J1.1–5 · Host power and signals" alt="J1.1–5 · Host power and signals." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-host-input-6-10" src="/images/extensions/led-breakout/guides/reader-compact-host-input-6-10-central-pills.png" title="J1.6–10 · Host signals and ground" alt="J1.6–10 · Host signals and ground." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-output-1-5" src="/images/extensions/led-breakout/guides/reader-compact-chain-output-1-5-central-pills.png" title="J2.1–5 · Downstream power and signals" alt="J2.1–5 · Downstream power and signals." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-output-6-10" src="/images/extensions/led-breakout/guides/reader-compact-chain-output-6-10-central-pills.png" title="J2.6–10 · Downstream signals and ground" alt="J2.6–10 · Downstream signals and ground." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-signal-leds-3-6" src="/images/extensions/led-breakout/guides/reader-compact-signal-leds-3-6.png" title="D3–D6 · Signal indicators" alt="D3–D6 · Signal indicators." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-links-3-6" src="/images/extensions/led-breakout/guides/reader-compact-chain-links-3-6.png" title="JP3–JP6 · Downstream signal links" alt="JP3–JP6 · Downstream signal links." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-signal-leds-7-9" src="/images/extensions/led-breakout/guides/reader-compact-signal-leds-7-9.png" title="D7–D9 · Signal indicators" alt="D7–D9 · Signal indicators." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-chain-links-7-9" src="/images/extensions/led-breakout/guides/reader-compact-chain-links-7-9.png" title="JP7–JP9 · Downstream signal links" alt="JP7–JP9 · Downstream signal links." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-disable-links-1-4" src="/images/extensions/led-breakout/guides/reader-compact-disable-links-1-4.png" title="JP10–JP13 · Individual LED disable links" alt="JP10–JP13 · Individual LED disable links." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-disable-links-5-8" src="/images/extensions/led-breakout/guides/reader-compact-disable-links-5-8.png" title="JP14–JP17 · Individual LED disable links" alt="JP14–JP17 · Individual LED disable links." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-led-feed-and-power" src="/images/extensions/led-breakout/guides/reader-compact-led-feed-and-power.png" title="JP1 and D1 · LED feed and power indicator" alt="JP1 and D1 · LED feed and power indicator." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-test-pads" src="/images/extensions/led-breakout/guides/reader-compact-test-pads-underside-caption.png" title="Test pads · Source signal access" alt="Test pads · Source signal access." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-reader-compact-mounting-holes" src="/images/extensions/led-breakout/guides/reader-compact-mounting-holes.png" title="Mounting holes · Board attachment" alt="Mounting holes · Board attachment." caption="Component-side reference. Match named components to the focused sheets; use the wiring section for host connections." width=420 %}

</details>

The overview and thirteen focused references identify the connectors, indicators, links and test pads. Use the focused sheets or zoom for small labels.

The following is the PCB pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Confirm the bridge state on the board before alteration.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

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

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-connector-detail-01" src="/images/extensions/led-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="LED breakout connector detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation before wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-link-detail-01" src="/images/extensions/led-breakout/guides/reader-link-detail-01.png" title="Link detail 01" alt="LED breakout link detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation before wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-link-detail-02" src="/images/extensions/led-breakout/guides/reader-link-detail-02.png" title="Link detail 02" alt="LED breakout link detail 02, with numbered features." caption="Component-side reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; check mating orientation before wiring." width=1440 %}

</details>

</details>

## Practical connection to Smoothieboard V2 Prime

**LED polarity:** the schematic symbol `SLB:LED_K1A2` assigns pin 1 to cathode and pin 2 to anode, and the PCB connects signal LED pad 1 to its GPIO and pad 2 to its resistor and disable link. The embedded `LED_APT1608_K1A2` footprint description says pad 1 is anode and pad 2 is cathode. The PCB names Kingbright **APT1608SYCK** for D3–D9 and **APT1608CGCK** for D1. Check the part drawing, land numbering and assembly orientation before assembly or energizing.

**Do not energize these connections** until the LED polarity, host rail budget, GPIO loading, LED current and link bridges have been checked. All seven indicators are onboard; no external peripheral is needed. Keep J2 disconnected. Choose one connection arrangement below and check numbered continuity with power removed; the drawn contact projections are not mating plugs.

### Ten-core connection for all seven indicators

The complete-board drawing shows a straight-through ten-core connection: **Prime J37 contact n connects to LED J1 contact n**, for contacts 1–10. The grey jacket represents the bundled conductors; the contact keys below identify the individual source pads. Verify the numbering at both ends rather than relying on the stripe or viewing direction.

- **Power and return:** J37.1 → J1.1 supplies limited 3.3 V; J37.2 → J1.2 carries limited 5 V; J37.10 → J1.10 is ground. The 5 V conductor is not a GPIO signal.
- **Signal contacts 3–6:** PB1 → J1.3/D3; PJ4 → J1.4/D4; PA4 → J1.5/D5; PG0 → J1.6/D6.
- **Signal contacts 7–9:** PJ3 → J1.7/D7; PG1 → J1.8/D8; PJ2 → J1.9/D9.

Each indicator uses its own resistor and disable link, with JP1 providing the common 3.3 V feed. A LOW signal sinks current and lights its LED. This observes the seven existing host signals; it does not create additional GPIOs. Reserve every connected signal in the machine configuration. The PB1 firmware example below controls only D3 and does not configure the other six pins.

The channel schedule keeps the LED-disable link separate from the downstream chain link. Every row uses the same numbered contact at Prime J37 and LED J1. All seven resistor values are 2.2 kΩ ±10%.

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

JP1 supplies the common signal-indicator rail. The separate power indicator uses **3.3 V → R1 → JP16 → D1 → ground** and bypasses JP1. Opening an indicator-disable link removes that indicator branch; opening a chain link interrupts its downstream signal. Neither action adds buffering or isolation. Keep J2 unused; the table identifies its circuit nodes.

#### Trace every numbered connection and onboard branch

The following three sheets are **electrical keys**, with deliberately re-spaced schematic contacts. They show the connection to **Prime J37**. These keys do not show native pad spacing, connector viewing direction, cable stripe orientation or a mating assembly.

The ten-core key retains contacts 1–10, including the unused-by-the-LED-circuit 5 V pass-through. In the branch keys, **LED+** means the single common `/+3V3_LED` node after **JP1.2**, supplied from **J1.1 → JP1.1**. **3V3** means J1.1, and **GND** means J1.10; their source and return are Prime J37.1 and J37.10 through the numbered cores. The seven named GPIO returns use their corresponding cores 3–9. These named nodes describe PCB connectivity rather than extra wires or seven separate supplies. J2 and its chain links are not part of this connection and remain unused.

Numbers above each component are its **source pad numbers**, not polarity labels. Each resistor is 2.2 kΩ ±10%, including R1. The blocks represent circuit elements, not component shapes; a link block does not show whether a bridge is closed. The LED blocks deliberately make no anode/cathode claim. Keep all power off.

{% include _includes/extension-instruction-diagram.html id="led-v18-source-ten-core-key" src="/images/extensions/led-breakout/guides/source-circuit/ten-core-electrical-key.png" title="All ten Prime J37 to LED J1 connections" alt="Electrical key for all ten Prime J37 to LED J1 connections, including 3.3 V, 5 V, seven signals and ground." caption="Schematic contact spacing, not a cable layout or mating-face view. Every core has its own continuous path. Read with the complete-board reference and numbered continuity schedule." width=900 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-source-paths-3-6" src="/images/extensions/led-breakout/guides/source-circuit/indicator-paths-3-6.png" title="Existing indicator paths: D3–D6" alt="Numbered paths from the common LED feed through each resistor and disable link to LED pads and PB1, PJ4, PA4 or PG0." caption="Electrical topology only. LED+ is the common rail after JP1.2. The numbers are component pads. Check LED polarity before assembly." width=900 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-source-paths-7-9-power" src="/images/extensions/led-breakout/guides/source-circuit/indicator-paths-7-9-power.png" title="Existing paths: D7–D9, D1 and JP1" alt="Numbered paths for PJ3, PG1 and PJ2 indicators, the separate 3.3 V power indicator to ground, and the JP1 common LED feed." caption="Electrical topology only. D1 bypasses JP1; JP16 controls D1 alone. JP1 feeds all seven LED+ nodes. Check LED polarity before assembly." width=900 %}

The electrical keys show every external core and every indicator branch. Use the contact keys below to identify actual pads.

{% include _includes/extension-instruction-diagram.html id="led-v18-ten-core-complete" src="/images/extensions/led-breakout/guides/whole-circuit/led-whole-circuit.png" title="Complete Prime and LED board: ten-core connection" alt="Complete Prime and LED boards connected by a ten-core ribbon, with one-to-one J37 and J1 contact numbering and seven onboard active-low indicators." caption="All power off.  Plug outlines are symbolic contact projections, not mating faces. Use the numbered schedule and enlarged keys to inspect contacts." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-host-entry-detail" src="/images/extensions/led-breakout/guides/whole-circuit/prime-j37-entry-detail.png" title="Prime J37 cable entry detail" alt="Enlarged host cable entry from the complete LED wiring diagram, with the grey cable entering the dashed symbolic plug." caption="Exact enlargement of the same wiring drawing. Follow the grey cable into the symbolic plug and use the numbered contact keys below. This is a board-side electrical illustration, not a mating-face view." width=800 %}

The following keys match the board orientations in the ten-core drawing. The LED board is unrotated here; the separate three-lead drawing below rotates it by 180°. Follow the numbered pads in the matching key, not the apparent left or right side of a cable.

{% include _includes/extension-instruction-diagram.html id="led-v18-j37-ten-core-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j37-ten-core-key.png" title="Prime J37 ten-core contact key" alt="All ten numbered pads with Prime signal assignments, matching the ten-core complete-board drawing." caption="All power off. Front copper coordinates, not a mating-face view. Match contact numbers at both ends; do not infer plug orientation from this projection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-j1-ten-core-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j1-ten-core-key.png" title="LED J1 ten-core contact key" alt="All ten numbered pads with Prime signal assignments, matching the ten-core complete-board drawing." caption="All power off. Front copper coordinates, not a mating-face view. Match contact numbers at both ends; do not infer plug orientation from this projection." width=420 %}

### Three individual leads for D3 only

For the PB1 connection alone, only contacts 1, 3 and 10 are used instead of the full ribbon. Leave every other contact unused at both ends. Use a mating assembly or breakout for the Gadgeteer header, and check its numbered continuity.

- **3.3 V supply:** Prime J37.1 `/3V3_LIMIT` → LED J1.1 `+3V3`.
- **Indicator signal:** Prime J37.3 `PB1` → LED J1.3 `/Y_P3`. LOW lights onboard D3.
- **Ground:** Prime J37.10 `GND` → LED J1.10 `GND`, providing the power-indicator and capacitor return.

Leave contact 2 and contacts 4–9 unused at both ends.

### Three-lead drawing and contact companions

The following alternative drawing shows both complete boards and all three leads. Its large labels give the contact map and connection limits; use the companion contact keys to identify individual native pads and the explanation below to follow the onboard current path. Continuous lines are external leads. Read the wiring overview, connection conditions and both contact keys together before connecting. The onboard path and firmware example are explained below.

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-wholeboard-wiring" src="/images/extensions/led-breakout/guides/wholeboard-context/wholeboard-wiring.png" title="Complete Prime and LED board: three leads" alt="Complete Prime and LED board: three leads" caption="All power off. Read mandatory limits and contact keys." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-mandatory-limits" src="/images/extensions/led-breakout/guides/contact-keys-readable/mandatory-limits.png" title="Mandatory limits: do not energize" alt="Mandatory limits: do not energize" caption="All power off. Read mandatory limits and contact keys." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-j37-contact-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j37-contact-key.png" title="Prime J37 contact key" alt="Prime J37 contact key" caption="All power off. Read mandatory limits and contact keys." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-v18-wholeboard-j1-contact-key" src="/images/extensions/led-breakout/guides/contact-keys-readable/j1-contact-key.png" title="LED J1 contact key" alt="LED J1 contact key" caption="All power off. Read mandatory limits and contact keys." width=420 %}

#### How the onboard indicator works

The path is **J1.1 (3.3 V) → JP1 → common LED rail → R3 (2.2 kΩ, ±10%) → JP13 → D3 pad 2**. D3 pad 1 returns through **J1.3 → PB1**. The schematic calls pad 2 anode and pad 1 cathode; the embedded footprint description reverses those names, so check the LED polarity on the board. Under the schematic convention, driving PB1 LOW lights D3; HIGH turns it off. This board has passive indicators, with no output buffer or extra GPIO.

For the LED3 path, JP1 feeds the seven-signal LED rail and JP13 connects D3 pad 2. **JP16 controls only the separate D1 power indicator and is not required for LED3.** D1’s R1 feed starts directly at 3.3 V and bypasses JP1. Check bridge continuity on the board; do not cut or bridge links for this connection. The other onboard signal branches remain present with their unused GPIO-side pads floating.
<details markdown="1">
<summary>Contact-expanded and full-cable drawings — optional</summary>

Do not combine the extra conductors of the full-cable drawing with the three-lead connection.

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-compact-installation" src="/images/extensions/led-breakout/guides/native-contact/led-native-reader.png" title="Light onboard LED3" alt="Three individual leads connect J37 and J1 contacts 1, 3 and 10; PB1 LOW sinks current through onboard LED3." caption="Three continuous leads terminate on enlarged contacts. All odd/even row contacts are retained; row separation is illustrative. Dashed leaders locate the artwork and onboard D3; they are not wires. Component-side projections are not mating faces.  Verify numbered contacts and solder bridges with power off." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-installation-key-j1" src="/images/extensions/led-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 contact numbers for this installation" alt="Enlarged component-side pad positions for J1; filled contacts are used in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-installation-key-j37" src="/images/extensions/led-breakout/guides/native-contact/reader-contact-keys/J37-numbered-pads.png" title="J37 contact numbers for this installation" alt="Enlarged component-side pad positions for J37; filled contacts are used in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="led-breakout-v18-prime-installation" src="/images/extensions/led-breakout/guides/prime-installation-wiring.png" title="Full-cable drawing — not the three-lead procedure" alt="Ten continuous conductors connect each numbered Prime GF/J37 contact to the matching extension input contact, with both board drawings and the onboard peripheral shown." caption="Electrical schematic with a numbered connector symbol. The boards use two-row 1.27 mm pads; symbols use one column at 20 mm depicted pitch for clarity.  This is not a mating-face view. Use the three-lead procedure above; this drawing adds unused conductors." width=1950 %}

</details>

On Prime J37, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground and contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded; verify numbered continuity and cable orientation with power removed. Reserve pins in the complete machine configuration.

## Smoothieware behaviour and commissioning

No board-specific driver is needed. Disconnect the LED board and machine loads for a host-only GPIO observation first. This example uses the V2 [switch] digital syntax to free GF/J37.3 PB1; the ! suffix makes the LED active-low.

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

With the LED board **disconnected**, `M107.9` requests PB1 HIGH, `M106.9` requests LOW, then `M107.9` requests HIGH. The inverted output turns LED3 off, on and off again. Reserve PB1 and command subcode 9 exclusively, and merge the eight fields into the existing `[switch]` section. Other GPIOs need their own availability checks.

See the [V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438). Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Before powering

Check the LED polarity, fitted parts, forward voltage and current, reset loading, host budget, link population and cable fit.

### Power-off inspection and troubleshooting

Keep the host, LED board and any downstream supply disconnected while checking these conditions. These are passive inspection steps.

<div class="extension-contact-table" role="region" aria-label="Power-off LED inspection checks; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Condition to investigate | Power-off check | What you need |
|---|---|---|
| Cable numbering or orientation is uncertain | Identify both connector views and trace each numbered conductor against the ten-contact schedule, including both supply contacts and ground. Do not infer numbering from the red edge alone. | A correct mating assembly and end-to-end map; never trial reversed orientations under power. |
| One signal indicator path is interrupted | Use that channel’s row to distinguish its resistor/indicator-disable link from the separate chain link. Inspect fitted parts and continuity against the contact schedule. | Check LED polarity and fitted parts before interpreting a dark indicator as a GPIO state. Do not bridge or cut links from this guide alone. |
| All seven signal indicators appear disconnected | Compare JP1 and the common signal-indicator rail separately from R1/JP16/D1. | D1’s separate feed means its condition alone cannot prove continuity through JP1 or all seven branches. |
| The board disagrees with the PB1 command example | With the LED board disconnected, review PB1 ownership, the `PB1!` inversion, reserved subcode 9 and the installed firmware version. | A host observation of PB1 with the board disconnected. |

</div>

## Design files

[Download the LED breakout design files (ZIP, 91 KiB)](/assets/downloads/extensions/led-breakout/led-cad-study.zip). The archive contains the PCB, schematic, project, bill of materials, both library tables, two local symbol libraries and four local footprints, with file hashes and license notices.

Open **`attempt/versions/v18/led-breakout.kicad_pro`** with **KiCad 9** and keep the complete `attempt/` directory together. Its original footprint table reaches `attempt/footprints/` through a relative path; moving only the project folder breaks that dependency. Native board design settings and rules are stored in the project; there is no separate `.kicad_dru` file. Standard KiCad 9 footprint libraries remain external dependencies, while their geometry is embedded in the PCB for inspection.

No 3D models are redistributed: existing references to the local Samtec model and the separate KiCad model library are listed in `SOURCE-MANIFEST.json`. Read `SOURCE-NOTES.txt` before moving or updating libraries.

### Upstream references

- [LED breakout PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/attempt/versions/v18/led-breakout.kicad_pcb)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/led-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The design files declare CERN-OHL-S-2.0. Prime upstream notices identify CERN OHL v1.2-or-later and GPL v3-or-later.

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="led-breakout" %}

</details>
