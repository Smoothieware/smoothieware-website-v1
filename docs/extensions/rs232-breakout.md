---
layout: default
title: "RS232 BREAKOUT (bouni)"
description: "Isolated three-wire RS-232 breakout with a male DE-9 and screw terminals. Find cable wiring, pinouts, and Smoothieware support."
permalink: /extensions/rs232-breakout
redirect_from:
  - /extensions/bouni-rs232-spindle-control
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <h1 id="rs232-breakout">RS232 BREAKOUT (bouni)</h1>
    <p class="xb-lead">Connect your controller's serial port to a spindle drive with a three-wire RS-232 interface, using a nine-pin cable or individual wires.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Check your cable</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
</div>

<sl-alert variant="warning" open>
  <strong>Board layout and hardware tests are pending.</strong> This page documents the circuit design and connector pinout. Email <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a> if you need the board for an application.
</sl-alert>
<sl-alert variant="primary" open>
  <strong>SmoothieV2 has no spindle-drive protocol for this interface.</strong> You need host software that speaks your drive's protocol. If firmware support would help your application, email <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a> for help with implementation.
</sl-alert>

<div class="xb-stats">
  <div class="xb-stat"><b>RS-232</b><span>point-to-point serial</span></div>
  <div class="xb-stat"><b>DE-9</b><span>male, PC-style pinout</span></div>
  <div class="xb-stat"><b>3 wires</b><span>transmit, receive, signal ground</span></div>
  <div class="xb-stat"><b>5 mm</b><span>screw-terminal pitch</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>controller logic</span></div>
  <div class="xb-stat"><b>5 V</b><span>controller supply</span></div>
</div>
{:/nomarkdown}

## Tech specs {#specs}

| Feature | Specification |
| --- | --- |
| Serial link | Isolated, full duplex, one controller and one drive |
| Drive connectors | Male DE-9 (often called DB9), three-position 5 mm screw terminal, and parallel 2.54 mm pin-header footprint |
| Host connector | Keyed ten-pin Gadgeteer ribbon connector, type U or K with hardware serial |
| Flow control | Three-wire link, with hardware handshaking disabled |
| Chaining | Same pin numbers on IN and CHAIN. Transmit and receive stop at this board by default. |
| Transceiver | [Analog Devices ADM3251E](/images/extensions/rs232-breakout/datasheets/adm3251e.pdf) |
| Logic translator | [Texas Instruments TXU0202](/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf) |

See the [electrical specifications](#electrical) for the component limits and their conditions.

## Pinout {#pinout}

### Drive connectors

The directions in this table are from the board's point of view. Use one connector for one drive. The DE-9, screw terminal, and pin header share the same lines.

| Board signal | Typical drive terminal | Screw terminal | Alternate pin header | Male DE-9 |
| --- | --- | ---: | ---: | ---: |
| Transmit output | RX or RXD | 1 | 1 | 3 |
| Receive input | TX or TXD | 2 | 2 | 2 |
| Isolated signal ground | SG or signal common | 3 | 3 | 5 |

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Male DE-9 pin positions">
    <svg viewBox="0 0 480 176" role="img" aria-labelledby="rs232-de9-title" font-family="sans-serif">
      <title id="rs232-de9-title">Male DE-9 mating face. Top row left to right 1, 2 receive, 3 transmit, 4, 5 signal ground. Bottom row left to right 6, 7, 8, 9.</title>
      <path d="M43 34H437L402 142H78Z" fill="none" stroke="currentColor" stroke-width="2"/>
      <g fill="currentColor" font-size="16" text-anchor="middle">
        <text x="88" y="76">1</text><text x="164" y="76">2 RX</text><text x="240" y="76">3 TX</text><text x="316" y="76">4</text><text x="392" y="76">5 SG</text>
        <text x="126" y="114">6</text><text x="202" y="114">7</text><text x="278" y="114">8</text><text x="354" y="114">9</text>
      </g>
    </svg>
  </div>
  <figcaption>Look into the board's male connector with the five-contact row at the top. The other contacts are open. Use pin 5 for the return.</figcaption>
</figure>
{:/nomarkdown}

### Host IN and CHAIN

Check your controller's socket chart for a type U or K socket with hardware serial on contacts 4 and 5. Pin 1 powers the 3.3 V logic translator, and pin 2 supplies the transceiver and its isolated converter.

| Contact | IN | CHAIN as wired |
| ---: | --- | --- |
| 1 | 3.3 V | 3.3 V |
| 2 | 5 V | 5 V |
| 3 | Pass-through signal | IN 3 |
| 4 | Host transmit | Open by default |
| 5 | Host receive | Open by default |
| 6 | Pass-through signal | IN 6 |
| 7 | Pass-through signal | IN 7 |
| 8 | Pass-through signal | IN 8 |
| 9 | Pass-through signal | IN 9 |
| 10 | Host ground | Host ground |

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Controller and keyed ribbon cable</b><span>Check the serial socket and its available 5 V current.</span></div>
  <div class="xb-card"><b>RS-232 drive and its manual</b><span>Check the electrical interface, pinout and three-wire mode.</span></div>
  <div class="xb-card"><b>Serial cable or three conductors</b><span>Choose the cable wiring from the drive's pinout.</span></div>
</div>
{:/nomarkdown}

## Check your cable {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step"><h3>Read the drive port label and manual</h3><p>Confirm RS-232 and three-wire operation before attaching a cable. A nine-pin connector can also carry RS-485 or manufacturer-specific signals.</p></li>
  <li class="xb-step"><h3>Check the cable with power off</h3><p>Use your meter's continuity mode to trace board transmit to drive receive, board receive to drive transmit, and board pin 5 to drive signal ground.</p></li>
  <li class="xb-step"><h3>Check for crossed or shorted contacts</h3><p class="xb-expect">Each of the three paths has continuity only to its intended contact at the other end.</p></li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Set the baud rate, data bits, parity and stop bits from your drive's manual.
Turn hardware flow control off. The board passes serial data in both
directions. The host software supplies the commands and interprets the
drive's replies.

SmoothieV2 has no spindle-drive configuration for this interface. Use the
drive maker's serial software or an application that implements the drive
protocol. For PWM speed control and a run contact, see the
[analog spindle control breakout](/extensions/analog-spindle-control-breakout).
For differential serial, see the [RS-485 spindle control breakout](/extensions/rs485-spindle-control-breakout).

## Wiring your drive {#loads}

| Drive port | Board connection | What to check |
| --- | --- | --- |
| Screw terminals marked TX, RX and signal ground | Connect TX OUT to drive RX, RX IN to drive TX, and isolated signal ground to drive signal ground. | Match actual terminal names to the manual. |
| Nine-pin serial port with DCE wiring | Use a straight-through cable carrying 2→2, 3→3 and 5→5. | The drive sends on pin 2 and receives on pin 3. |
| Nine-pin serial port with PC-style DTE wiring | Use a three-wire null-modem cable carrying 2→3, 3→2 and 5→5. | The drive sends on pin 3 and receives on pin 2. |

DTE means data terminal equipment, the wiring used on a PC serial port. DCE
means data communication equipment, with complementary wiring. Cable names
and connector gender alone cannot tell you which pin carries transmit.

## How it works {#how-it-works}

The [TXU0202](/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf)
translates the controller's 3.3 V serial signals to and from 5 V logic. The
[ADM3251E](/images/extensions/rs232-breakout/datasheets/adm3251e.pdf)
converts these signals to RS-232 and supplies isolated power to the drive
side of the circuit.

The drive's serial return goes to isolated signal ground. Keep it separate
from the controller ground, and use the connector shell for shielding.

## Chaining {#chaining}

Connect a second board to CHAIN to share the same host socket. Compare its
required pins with the [IN and CHAIN table](#pinout) first. The power rails
and ground are wired through. Individual underside links pass pins 3 and
6–9. Leave the transmit and receive links on pins 4 and 5 open whenever the
second board could drive either line.

## Troubleshooting {#troubleshooting}

| What you see | Possible cause | What to check |
| --- | --- | --- |
| Commands go out, without a reply | The cable connects two transmit pins or misses the signal return | With power off, verify the three cable paths against the drive manual. |
| The reply is garbled | The host and drive use different serial settings | Match baud rate, parity, data bits and stop bits. |
| The drive waits before sending | Hardware flow control is enabled | Select the drive's three-wire mode and turn handshaking off on the host. |
| Nothing arrives from SmoothieV2 | The firmware sends no drive commands | Try the drive maker's software over a compatible serial interface. |
| The link stops working when you add another board | The chain draws too much power or shares a driven contact | Check the header's power budget and the links on pins 4 and 5. |

When asking for help, include your controller revision, drive model, terminal
labels, cable continuity readings and serial settings. See
[how to ask for help](/help-guidelines).

## Appendix: electrical specifications {#electrical}

| Parameter | Applies to | Lower | Nominal | Upper | Basis and conditions |
| --- | --- | ---: | ---: | ---: | --- |
| Logic supply | Controller side | — | 3.3 V | — | Gadgeteer supply specification |
| Transceiver supply | Transceiver supply pins | 4.5 V | 5 V | 5.5 V | Component datasheet, with the isolated converter enabled |
| Transceiver supply current | Transceiver only | — | — | 145 mA | Component datasheet, 5.5 V supply and 3 kΩ line load. Allow separately for other board loads and startup. |
| Board isolation rating | Complete assembly | — | — | — | Open |

### Component stress limits

The transceiver datasheet specifies an RS-232 receiver input range of
−30 V to +30 V. Use a documented RS-232 source on the receive input. The
range applies to the component and does not establish a board rating.

## Appendix: datasheets {#datasheets}

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/rs232-breakout/datasheets/adm3251e.pdf"><img class="no-zoom" src="/images/extensions/rs232-breakout/datasheets/adm3251e-page1.png" alt="First page of the Analog Devices ADM3251E datasheet" loading="lazy"></a>
  <figcaption><a href="/images/extensions/rs232-breakout/datasheets/adm3251e.pdf">ADM3251E isolated RS-232 line driver and receiver</a> · Analog Devices · Rev. E · 16-page PDF</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf"><img class="no-zoom" src="/images/extensions/usb-serial-breakout/datasheets/txu0202-page1.png" alt="First page of the Texas Instruments TXU0202 datasheet" loading="lazy"></a>
  <figcaption><a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf">TXU0202 dual-bit fixed-direction voltage-level translator</a> · Texas Instruments · Rev. A · 41-page PDF</figcaption>
</figure>
{:/nomarkdown}
