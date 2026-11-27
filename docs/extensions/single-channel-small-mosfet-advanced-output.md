---
layout: default
title: "Single-Channel Small MOSFET Advanced Output"
description: "Switch one DC load of a few amps, such as a fan, a solenoid or a light, from a controller's logic signal, with built-in protection against overload and a reversed supply: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/single-channel-small-mosfet-advanced-output
redirect_from:
  - /extensions/single-channel-small-mosfet-output
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power output</p>
    <h1 id="single-channel-small-mosfet-advanced-output">Single-channel small mosfet advanced output</h1>
    <p class="xb-lead">Switch a fan, solenoid, pump or light from a 3.3 V controller output. Use a three-pin header or a Gadgeteer type-Y socket. An optocoupler separates the selected command from the load circuit.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-diagram.png" alt="Top view with the white control header and two keyed Gadgeteer connectors along the top, field supply on the left and load on the right">
<figcaption>Top view of the board.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>low-side DC output</span></div>
  <div class="xb-stat"><b>5–24 V</b><span>external DC field supply</span></div>
  <div class="xb-stat"><b>4 A</b><span>load current</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>nominal logic command</span></div>
  <div class="xb-stat"><b>7</b><span>outputs per type-Y socket</span></div>
  <div class="xb-stat"><b>60 × 87</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#compare-mosfet-boards">Compare boards</a><a href="#specs">Tech specs</a><a href="#tour">Board tour</a><a href="#pinout">Pinout</a><a href="#what-you-need">What you need</a><a href="#get-started">Get started</a><a href="#configuration">Configuration</a><a href="#loads">Wiring the load</a><a href="#how-it-works">How it works</a><a href="#options">Source selector</a><a href="#chaining">Chaining</a><a href="#troubleshooting">Troubleshooting</a><a href="#downloads">Downloads</a><a href="#mounting">Mounting</a><a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

{% include _includes/mosfet-board-comparison.html %}

## Tech specs {#specs}

| Parameter | Value |
| --- | --- |
| Output | One low-side DC switch with flyback diode |
| Load supply | 5–24 V DC, external only |
| Load current | 4 A |
| Control | Active-high 3.3 V from the selected three-pin or Gadgeteer input |
| Isolation | Optical signal path with separate controller and field returns |
| Connectors | Keyed three-pin header, two Gadgeteer type-Y ports and two screw terminals |
| Size | 60 × 87 mm, four 3.2 mm mounting holes |

See [mounting dimensions](#mounting) and [electrical specifications](#electrical).

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-diagram.png" alt="Annotated top view of the board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:14.1%;top:5.6%" aria-label="1: Three-pin input (CTRL IN)">1<span class="xb-pop"><b>Three-pin input (CTRL IN)</b> — ground on pin 1, command on pin 3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:37.5%;top:5.6%" aria-label="2: Controller socket (Y IN)">2<span class="xb-pop"><b>Controller socket (Y IN)</b> — the ribbon cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:73.6%;top:5.6%" aria-label="3: Chain socket (Y CHAIN)">3<span class="xb-pop"><b>Chain socket (Y CHAIN)</b> — the remaining commands for the next board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:5.9%;top:11.2%" aria-label="4: Input selector (SJ14)">4<span class="xb-pop"><b>Input selector (SJ14)</b> — chooses ribbon or three-pin input.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:40.7%;top:12.3%" aria-label="5: Forwarding links (SJ8 to SJ13)">5<span class="xb-pop"><b>Forwarding links (SJ8 to SJ13)</b> — move each remaining command one position along.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:39.1%;top:20.2%" aria-label="6: Optocoupler (U101)">6<span class="xb-pop"><b>Optocoupler (U101)</b> — carries the command to the load side.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:6.4%;top:67.4%" aria-label="7: Supply input (J2)">7<span class="xb-pop"><b>Supply input (J2)</b> — external DC supply.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:90.6%;top:67.4%" aria-label="8: Load output (J3)">8<span class="xb-pop"><b>Load output (J3)</b> — both load wires.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:64.2%;top:76.4%" aria-label="9: Output transistor (Q3)">9<span class="xb-pop"><b>Output transistor (Q3)</b> — switches the load return.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:75.1%;top:74.1%" aria-label="10: Flyback diode (D3)">10<span class="xb-pop"><b>Flyback diode (D3)</b> — takes the current of an inductive load at turn-off.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:48.5%;top:60.6%" aria-label="11: Electronic fuse (U3)">11<span class="xb-pop"><b>Electronic fuse (U3)</b> — limits and protects the supply.</span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:89.2%;top:53.9%" aria-label="12: Output light (D6)">12<span class="xb-pop"><b>Output light (D6)</b> —</span></a>
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
    <li id="tour-9"><span class="xb-n">9</span><div><b>Output transistor (Q3)</b> — switches the load return.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Flyback diode (D3)</b> — takes the current of an inductive load at turn-off.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Electronic fuse (U3)</b> — limits and protects the supply.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Output light (D6)</b> — </div></li>
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
    <tr><td>D6, green</td><td>Output driven</td><td>SJ2</td></tr>
    <tr><td>D7, red</td><td>Electronic fuse reports a fault</td><td>SJ3</td></tr>
    <tr><td>D13, red</td><td>Supply over-voltage warning</td><td>SJ6</td></tr>
    <tr><td>D12, red</td><td>Supply connected backwards</td><td>SJ5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

| J1 contact | Function |
| --- | --- |
| 1 | Controller ground |
| 2 | Unconnected |
| 3 | Active-high 3.3 V command |

| Field connector | Pin 1 | Pin 2 |
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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-single-channel-small-mosfet-advanced-output-wire"><title id="xb-single-channel-small-mosfet-advanced-output-wire">Wiring: controller contact ground to J1 contact 1; controller contact command to J1 contact 3.</title><image href="/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-diagram.png" x="418" y="14" width="165" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Three-pin harness</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><image href="/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-diagram.png" x="418" y="14" width="165" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Three-pin harness</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">ground</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">1  ground</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">ground to 1: ground</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">command</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">3  command</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">command to 3: command</text></svg>
  </div>
  <figcaption>Contacts shown are for the three-pin harness: ground to pin 1, command to pin 3, pin 2 empty. Supply goes to J2 and load to J3, per the pinout.</figcaption>
</figure>
{:/nomarkdown}

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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-single-channel-small-mosfet-advanced-output-path"><title id="xb-single-channel-small-mosfet-advanced-output-path">Command then Optocoupler, isolation barrier then Gate driver, fed by protected field supply then MOSFET then Load on J3.</title><rect x="20" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="102" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Command</text><text x="102" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="219" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="301" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Optocoupler</text><text x="301" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">isolation barrier</text><path d="M188.8 70H209.8" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M208 63L217 70L208 77Z" fill="#5fb3ff"/><rect x="418" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Gate driver</text><text x="500" y="77" text-anchor="middle" font-size="13" fill="#a9b4c2">fed by protected field</text><text x="500" y="93" text-anchor="middle" font-size="13" fill="#a9b4c2">supply</text><path d="M387.6 70H408.6" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M407 63L416 70L407 77Z" fill="#5fb3ff"/><rect x="616" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="699" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">MOSFET</text><text x="699" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M586.4000000000001 70H607.4000000000001" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M605 63L614 70L605 77Z" fill="#5fb3ff"/><rect x="815" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="898" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Load on J3</text><text x="898" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M785.2 70H806.2" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M804 63L813 70L804 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Source selector {#options}

| Input | SJ14 |
| --- | --- |
| Y IN | Factory bridge between pads 1 and 2 |
| Three-pin CTRL IN | Cut the 1–2 bridge, verify it is open, then bridge pads 2 and 3 |

Power down both sides before changing the selector. Bridge only one pair.

## Chaining {#chaining}

Connect **Y CHAIN** on one board to **Y IN** on the next. With Gadgeteer selected on each board, the local channel always uses Y IN pin 3. The six factory-closed links **SJ8–SJ13** pass Y IN pins 4–9 to Y CHAIN pins 3–8 in order. Cutting a link interrupts that command downstream. Use one host per chain. Adding or removing a board changes the downstream channel assignments.

{% include _includes/extension-chain-figure.html id="xb-adv-chain" board="Small MOSFET advanced" in_label="Y IN" chain_label="Y CHAIN" lane1="Pin 3" lane2="Pin 4" lane3="Pin 5" s1="Local command" s2="Next command" s3="Third command" caption="Each board uses pin 3 and moves the remaining commands down one position." %}

## Troubleshooting {#troubleshooting}

| What you see | What to check |
| --- | --- |
| Load stays off | Check field supply polarity and voltage, controller pin mapping and SJ14. A logic command alone supplies no gate or load power. |
| Wrong load switches in a chain | Check ribbon direction, board order and the closed links. Each board shifts the remaining commands by one pin. |
| Protection interrupts the load | Power down and check for a short, reversed supply or too much load current. |

## Downloads {#downloads}

- [Top-view board drawing](/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-diagram.png)
- [Schematic PDF](/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-schematic.pdf)
- [Parts list CSV](/images/extensions/single-channel-small-mosfet-advanced-output/v29/single-channel-small-mosfet-advanced-output-bom.csv)

## Appendix: mounting dimensions {#mounting}

The board is 60 × 87 mm. Four 3.2 mm holes form a 40 × 40 mm pattern. Hole centres from the top-left of the board are (5, 42), (45, 42), (5, 82) and (45, 82) mm.

## Appendix: electrical specifications {#electrical}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Field supply</td><td>J2</td><td>5 V</td><td>—</td><td>24 V</td><td>Supply range</td></tr>
    <tr><td>Continuous load</td><td>J3</td><td>—</td><td>—</td><td>4 A</td><td>Load rating</td></tr>
    <tr><td>Logic command</td><td>J1, J4</td><td>—</td><td>3.3 V</td><td>—</td><td>Both interfaces</td></tr>
    <tr><td>Logic high</td><td>Selected input</td><td>2.72 V</td><td>—</td><td>—</td><td>Input threshold, loaded</td></tr>
    <tr><td>Logic low</td><td>Selected input</td><td>—</td><td>—</td><td>0.4 V</td><td>Input threshold</td></tr>
    <tr><td>Isolation voltage</td><td>Optocoupler barrier</td><td>—</td><td>—</td><td>Not specified</td><td>Use with low-voltage DC</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}


