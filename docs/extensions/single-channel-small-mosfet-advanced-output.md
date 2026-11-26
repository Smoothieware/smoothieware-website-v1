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
    <img src="/images/extensions/single-channel-small-mosfet-advanced-output/small-mosfet-advanced-diagram.png" alt="Top view with the white control header and two keyed Gadgeteer connectors along the top, field supply on the left and load on the right">
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

Along the top edge, **CTRL IN (J1)** is the white three-pin connector. **Y IN (J4)** and **Y CHAIN (J5)** are the black keyed connectors. **INPUT SELECT (SJ14)** selects the local command. The six smaller links between the Gadgeteer connectors pass the remaining six commands. Field supply enters at **J2** on the left and the load plugs into **J3** on the right.

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

1. Power down. Choose one local command source at [SJ14](#options).
2. For Gadgeteer, plug the controller's type-Y ribbon into **Y IN**. For the three-pin harness, wire controller ground to pin 1 and the command to pin 3. Leave pin 2 empty.
3. Connect the external supply to **J2** and the load to **J3** using the polarity in the pinout. Keep the field and controller returns separate to preserve isolation.
4. Configure the chosen controller pin to start and halt low. Bring up the board with a current-limited supply and a small test load.

## Configuration {#configuration}

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

{% include _includes/extension-chain-figure.html id="xb-adv-chain" board="Small MOSFET advanced" in_label="Y IN" chain_label="Y CHAIN" lane1="Pin 3" lane2="Pin 4" lane3="Pin 5" s1="Local command" s2="Next command" s3="Third command" caption="Each board uses pin 3 and moves the remaining commands down one position." %}

## Troubleshooting {#troubleshooting}

| What you see | What to check |
| --- | --- |
| Load stays off | Check field supply polarity and voltage, controller pin mapping and SJ14. A logic command alone supplies no gate or load power. |
| Wrong load switches in a chain | Check ribbon direction, board order and the closed links. Each board shifts the remaining commands by one pin. |
| Protection interrupts the load | Power down and check for a short, reversed supply or too much load current. |

## Downloads {#downloads}

- [Top-view board drawing](/images/extensions/single-channel-small-mosfet-advanced-output/small-mosfet-advanced-diagram.png)
- [Schematic PDF](/images/extensions/single-channel-small-mosfet-advanced-output/schematic.pdf)
- [Parts list CSV](/images/extensions/single-channel-small-mosfet-advanced-output/bom.csv)

## Appendix: mounting dimensions {#mounting}

The board is 60 × 87 mm. Four 3.2 mm holes form a 40 × 40 mm pattern. Hole centres from the top-left of the board are (5, 42), (45, 42), (5, 82) and (45, 82) mm.

## Appendix: electrical specifications {#electrical}

| Parameter | Value | Basis |
| --- | --- | --- |
| Field supply | 5–24 V DC | Supply range |
| Continuous load | 4 A | Load rating |
| Logic command | 3.3 V nominal | Both interfaces |
| Minimum loaded high | 2.72 V at the selected input | Input threshold |
| Maximum logic low | 0.4 V | Input threshold |
| Isolation voltage rating | Not specified | Use with low-voltage DC. |
