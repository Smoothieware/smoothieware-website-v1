---
layout: default
title: "Single-Channel Large Mosfet output"
description: "Switch one high-current DC load such as a heated bed from Smoothieboard V2, with a built-in electronic breaker: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/single-channel-large-mosfet-output
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power output</p>
    <h1 id="single-channel-large-mosfet-output">Single-channel large mosfet output</h1>
    <p class="xb-lead">Switch a heated bed, heater or bank of fans from a 3.3 V controller output. Use a three-pin header or a Gadgeteer type-Y socket. An optocoupler separates the selected command from the load circuit.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-large-mosfet-output/v18/single-channel-large-mosfet-output-diagram.png" alt="Top view with the white control header and two keyed Gadgeteer connectors along the top, field supply on the left and load on the right">
    <figcaption>Top view.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>low-side DC output</span></div>
  <div class="xb-stat"><b>5–24 V</b><span>external DC field supply</span></div>
  <div class="xb-stat"><b>12.5 A</b><span>load current</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>nominal logic command</span></div>
  <div class="xb-stat"><b>7</b><span>outputs per type-Y socket</span></div>
  <div class="xb-stat"><b>74 × 76</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#compare-mosfet-boards">Compare boards</a><a href="#specs">Tech specs</a><a href="#tour">Board tour</a><a href="#pinout">Pinout</a><a href="#what-you-need">What you need</a><a href="#get-started">Get started</a><a href="#configuration">Configuration</a><a href="#loads">Wiring the load</a><a href="#how-it-works">How it works</a><a href="#options">Source selector</a><a href="#chaining">Chaining</a><a href="#troubleshooting">Troubleshooting</a><a href="#downloads">Downloads</a><a href="#mounting">Mounting</a><a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Fuse the supply.</strong> Use an appropriately fused, current-limited DC supply. A heater also needs an independent thermal cut-out.
</sl-alert>

{% include _includes/mosfet-board-comparison.html %}

## Tech specs {#specs}

| Parameter | Value |
| --- | --- |
| Output | One low-side DC switch with flyback diode |
| Load supply | 5–24 V DC, external only |
| Load current | 12.5 A |
| Control | Active-high 3.3 V from the selected three-pin or Gadgeteer input |
| Isolation | Optical signal path with separate controller and field returns |
| Connectors | Keyed three-pin header, two Gadgeteer type-Y ports and two XT30 connectors |
| Size | 74 × 76 mm, four 3.2 mm mounting holes |

See [mounting dimensions](#mounting) and [electrical specifications](#electrical).

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/single-channel-large-mosfet-output/v18/single-channel-large-mosfet-output-diagram.png" alt="Annotated top view of the board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11.8%;top:6.4%" aria-label="1: Three-pin input (CTRL IN)">1<span class="xb-pop"><b>Three-pin input (CTRL IN)</b> — ground on pin 1, command on pin 3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:31.5%;top:6.4%" aria-label="2: Controller socket (Y IN)">2<span class="xb-pop"><b>Controller socket (Y IN)</b> — the ribbon cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:61.8%;top:6.4%" aria-label="3: Chain socket (Y CHAIN)">3<span class="xb-pop"><b>Chain socket (Y CHAIN)</b> — the remaining commands for the next board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:5.0%;top:12.8%" aria-label="4: Input selector (SJ14)">4<span class="xb-pop"><b>Input selector (SJ14)</b> — chooses ribbon or three-pin input.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:34.2%;top:14.1%" aria-label="5: Forwarding links (SJ8 to SJ13)">5<span class="xb-pop"><b>Forwarding links (SJ8 to SJ13)</b> — move each remaining command one position along.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:32.9%;top:23.0%" aria-label="6: Optocoupler (U101)">6<span class="xb-pop"><b>Optocoupler (U101)</b> — carries the command to the load side.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:19.2%;top:64.7%" aria-label="7: Supply input (J2)">7<span class="xb-pop"><b>Supply input (J2)</b> — external DC supply.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:79.5%;top:64.7%" aria-label="8: Load output (J3)">8<span class="xb-pop"><b>Load output (J3)</b> — both load wires.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:45.4%;top:60.5%" aria-label="9: Power transistor (Q1)">9<span class="xb-pop"><b>Power transistor (Q1)</b> — switches the load return; gets hot under load.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:66.5%;top:74.2%" aria-label="10: Flyback diode (D2)">10<span class="xb-pop"><b>Flyback diode (D2)</b> — takes the current of an inductive load at turn-off.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:40.1%;top:95.5%" aria-label="11: Power light (D4)">11<span class="xb-pop"><b>Power light (D4)</b> —</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Three-pin input (CTRL IN)</b> — ground on pin 1, command on pin 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Controller socket (Y IN)</b> — the ribbon cable.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket (Y CHAIN)</b> — the remaining commands for the next board.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Input selector (SJ14)</b> — chooses ribbon or three-pin input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Forwarding links (SJ8 to SJ13)</b> — move each remaining command one position along.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Optocoupler (U101)</b> — carries the command to the load side.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply input (J2)</b> — external DC supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Load output (J3)</b> — both load wires.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Power transistor (Q1)</b> — switches the load return; gets hot under load.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Flyback diode (D2)</b> — takes the current of an inductive load at turn-off.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Power light (D4)</b> — </div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

Along the top edge, **CTRL IN (J1)** is the white three-pin connector. **Y IN (J4)** and **Y CHAIN (J5)** are the black keyed connectors. **INPUT SELECT (SJ14)** selects the local command. The six smaller links between the Gadgeteer connectors pass the remaining six commands. Field supply enters at **J2** on the left and the load plugs into **J3** on the right.

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D4, green</td><td>Field supply present</td><td>JP2</td></tr>
    <tr><td>D3, amber</td><td>Command active</td><td>JP1</td></tr>
    <tr><td>D8, red</td><td>Supply protection reports a fault</td><td>JP3</td></tr>
    <tr><td>D9, red</td><td>Supply over-voltage</td><td>JP4</td></tr>
    <tr><td>D12, red, blinking</td><td>Supply connected backwards</td><td>JP5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

| J1 contact | Function |
| --- | --- |
| 1 | Controller ground |
| 2 | Unconnected |
| 3 | Active-high 3.3 V command |

| Field connector | Pin 2 | Pin 1 |
| --- | --- | --- |
| J2, supply in | Supply positive | Field ground |
| J3, load out | Load positive | Switched load return |

| Y IN pin | Function | Y CHAIN pin |
| --- | --- | --- |
| 1 | Controller 3.3 V pass-through | 1 |
| 2 | Controller 5 V pass-through | 2 |
| 3 | Local board command | — |
| 4 | First forwarded command | 3 |
| 5 | Second forwarded command | 4 |
| 6 | Third forwarded command | 5 |
| 7 | Fourth forwarded command | 6 |
| 8 | Fifth forwarded command | 7 |
| 9 | Sixth forwarded command | 8 |
| 10 | Controller ground | 10 |

CHAIN pin 9 is unconnected. The passed-through rails and ground belong to the controller.

## What you need {#what-you-need}

- A 3.3 V controller output and a keyed type-Y ribbon cable or a mating three-pin harness.
- A 5–24 V DC supply, an appropriately rated fuse and wires sized for the load.
- The mating field supply and load connectors.

## Get started {#get-started}

1. Power down. Choose one local command source at [SJ14](#options).
2. For Gadgeteer, plug the controller's type-Y ribbon into **Y IN**. For the three-pin harness, wire controller ground to pin 1 and the command to pin 3. Leave pin 2 empty.
3. Connect the external supply to **J2** and the load to **J3** using the polarity in the pinout. Keep the field and controller returns separate to preserve isolation.
4. Configure the chosen controller pin to start and halt low. Bring up the board with a current-limited supply and a small test load.

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>To switch the load from G-code</td><td>Switch, output</td><td><a href="#config-load">1</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Load output (switch module) {#config-load}

Example for the Smoothieware V2 [Switch module](/switch). Replace `PB1` with the controller pin that actually reaches the board's selected input. In a chain, configure a different output pin for each board.

```ini
[switch]
mosfet.enable            = true
mosfet.output_pin        = PB1
mosfet.output_type       = digital
mosfet.input_on_command  = M64
mosfet.input_off_command = M65
mosfet.startup_state     = false
mosfet.halt_set_to       = false
```

Send `M64` to turn on the test load and `M65` to turn it off.

## Wiring the load {#loads}

Route both load wires to **J3**. The board switches the negative load return. The positive contact can remain energized while the command is low. Disconnect the field supply before moving wiring.

## How it works {#how-it-works}

The optocoupler passes the selected command across the isolation barrier. The protected field supply powers the gate driver. The gate is held low when the command is absent or the bias supply is below its startup threshold. The field circuit also provides reverse-polarity and overcurrent protection and a path for inductive current at turn-off.

## Source selector {#options}

| Input | SJ14 |
| --- | --- |
| Y IN | Factory bridge between pads 1 and 2 |
| Three-pin CTRL IN | Cut the 1–2 bridge, verify it is open, then bridge pads 2 and 3 |

Power down both sides before changing the selector. Bridge only one pair.

## Chaining {#chaining}

Connect **Y CHAIN** on one board to **Y IN** on the next. With Gadgeteer selected on each board, the local channel always uses Y IN pin 3. The six factory-closed links **SJ8–SJ13** pass Y IN pins 4–9 to Y CHAIN pins 3–8 in order. Cutting a link interrupts that command downstream. Use one host per chain. Adding or removing a board changes the downstream channel assignments.

{% include _includes/extension-chain-figure.html id="xb-large-chain" board="Large MOSFET" in_label="Y IN" chain_label="Y CHAIN" lane1="Pin 3" lane2="Pin 4" lane3="Pin 5" s1="Local command" s2="Next command" s3="Third command" caption="Each board uses pin 3 and moves the remaining commands down one position." %}

## Troubleshooting {#troubleshooting}

| What you see | What to check |
| --- | --- |
| Load stays off | Check field supply polarity and voltage, controller pin mapping and SJ14. A logic command alone supplies no gate or load power. |
| Wrong load switches in a chain | Check ribbon direction, board order and the closed links. Each board shifts the remaining commands by one pin. |
| Protection interrupts the load | Power down and check for a short, reversed supply or too much load current. |

## Downloads {#downloads}

- [Top-view board drawing](/images/extensions/single-channel-large-mosfet-output/v18/single-channel-large-mosfet-output-diagram.png)
- [Schematic PDF](/images/extensions/single-channel-large-mosfet-output/v18/single-channel-large-mosfet-output-schematic.pdf)
- [Parts list CSV](/images/extensions/single-channel-large-mosfet-output/v18/single-channel-large-mosfet-output-bom.csv)

## Appendix: mounting dimensions {#mounting}

The board is 74 × 76 mm. Four 3.2 mm holes form a 40 × 40 mm pattern. Hole centres from the top-left of the board are (15, 32), (55, 32), (15, 72) and (55, 72) mm.

## Appendix: electrical specifications {#electrical}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Field supply</td><td>J2</td><td>5 V</td><td>—</td><td>24 V</td><td>Supply range</td></tr>
    <tr><td>Continuous load</td><td>J3</td><td>—</td><td>—</td><td>12.5 A</td><td>Load rating</td></tr>
    <tr><td>Logic command</td><td>J1, J4</td><td>—</td><td>3.3 V</td><td>—</td><td>Both interfaces</td></tr>
    <tr><td>Logic high</td><td>Selected input</td><td>2.72 V</td><td>—</td><td>—</td><td>Input threshold, loaded</td></tr>
    <tr><td>Logic low</td><td>Selected input</td><td>—</td><td>—</td><td>0.4 V</td><td>Input threshold</td></tr>
    <tr><td>Isolation voltage</td><td>Optocoupler barrier</td><td>—</td><td>—</td><td>Not specified</td><td>Use with low-voltage DC</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use with low-voltage DC.
