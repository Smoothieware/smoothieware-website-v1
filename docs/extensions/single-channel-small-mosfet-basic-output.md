---
layout: default
title: "Single-Channel Small MOSFET Basic Output"
description: "A compact, externally powered DC load switch with a Gadgeteer type-Y chain connection."
permalink: /extensions/single-channel-small-mosfet-basic-output
redirect_from:
  - /extensions/single-channel-budget-mosfet-output
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power output</p>
    <h1>Single-channel small MOSFET basic output</h1>
    <p class="xb-lead">Switch one small DC load, such as a fan or a solenoid, from a 3.3 V signal on the three-pin header or Gadgeteer IN. The load has its own power supply. One type-Y host socket can provide seven independent control signals for a chain of seven boards.</p>
    <p class="xb-badge">Prototype design · not built or tested yet</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#wiring">Wiring</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#chaining">Chaining</a>
      <a class="xb-btn" href="#compare-mosfet-boards">Compare boards</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-small-mosfet-basic-output/small-mosfet-basic-diagram.svg" alt="Top view drawing of the small MOSFET basic board: a white three-pin header at left and two black keyed ten-pin headers along the top edge, printed Y IN and CHAIN, two green two-way screw terminals along the bottom edge for the 12 V supply and the load, and a POWER and an ON light.">
    <figcaption>Revision 02 board drawing, 41 × 32 mm.</figcaption>
  </figure>
</div>
{:/nomarkdown}

{% include _includes/mosfet-board-comparison.html %}

## Technical specifications

| Item | Prototype design target |
| --- | --- |
| Output | One low-side DC switch with a flyback diode |
| Control | One active-high 3.3 V logic signal, with a hardware pull-down |
| Field supply | 12 V nominal, externally supplied and current limited |
| Continuous load | 1 A initial qualification target |
| Indicators | Green **POWER** and amber **ON**, each with a separate disable link |
| Mounting | Ungrounded M3 holes on a 10 mm grid and load-cable tie holes |

The routed prototype measures 41 × 32 mm in KiCad. The supply and load
figures are design targets. Electrical ratings and fabrication suitability
remain unverified.

## Wiring

With power off, connect a correctly polarized, current-limited external
supply to **EXT+** and **GND**. Connect the load positive to **LOAD+** and
its negative to **LOAD−**. **LOAD+** is connected directly to **EXT+** and
remains live while external power is present. The board switches **LOAD−**
to ground. Ground is shared with the controller for signaling.

Connect only a verified type-Y host socket or the previous board's **CHAIN**
connector to **IN**, using a keyed straight-through cable. Keep the load
return on the external wiring. Both Gadgeteer supply rails pass to the next
socket and have no connection to the load or either indicator.

For direct control through **3-PIN IN**, power down and cut the factory
bridge between pads 1 and 2 of **SELECT**. Bridge pads 2 and 3 to select
the three-pin input. Close one bridge only. Connect controller ground
and an active-high 3.3 V command. The middle contact is unused.

## Pinout

| 3-PIN IN contact | Function |
| --- | --- |
| 1 | Controller ground, shared with field supply ground |
| 2 | Unconnected |
| 3 | Active-high 3.3 V command |


| IN pin | Function | CHAIN pin |
| --- | --- | --- |
| 1 | Controller 3.3 V pass-through | 1 |
| 2 | Controller 5 V pass-through | 2 |
| 3 | This board's load command | — |
| 4 | Next board's load command | 3 |
| 5 | Remaining command | 4 |
| 6 | Remaining command | 5 |
| 7 | Remaining command | 6 |
| 8 | Remaining command | 7 |
| 9 | Remaining command | 8 |
| 10 | Shared signal ground | 10 |

CHAIN pin 9 is unconnected. Each forwarded command has an individual
normally closed solder link. The connectors are directional.

## Chaining

With Gadgeteer selected, the first board uses the signal on host pin 3. Each board shifts the
remaining commands by one position on its **CHAIN** connector. In a full
chain the seventh board uses the signal that started on host pin 9. Removing
a board and reconnecting its neighbors shifts the channel assignment of
every board after it. Power down before changing the chain. Use one host
and confirm its socket pinout and pin assignments before connecting hardware.

## Indicators and protection

**POWER** lights when external power is present. **ON** lights when the
switched return is pulled low with external power present. It can light with
the load unplugged. Both disable links are closed by default.

The flyback diode provides a recirculation path for an inductive load at
turn-off. The basic circuit relies on correct supply polarity and an
external current-limited source. See the [small MOSFET advanced board](/extensions/single-channel-small-mosfet-advanced-output)
for onboard supply protection and fault indicators.

## Revision 02 downloads

- [Schematic PDF](/images/extensions/single-channel-small-mosfet-basic-output/schematic.pdf)
- [Parts list CSV](/images/extensions/single-channel-small-mosfet-basic-output/bom.csv)
