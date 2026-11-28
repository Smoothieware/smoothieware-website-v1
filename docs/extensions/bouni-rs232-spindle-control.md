---
layout: default
title: "Bouni RS-232 spindle control"
description: "An isolated RS-232 interface design with a nine-pin D-sub and screw terminals."
permalink: /extensions/bouni-rs232-spindle-control
---

The Bouni RS-232 spindle control board connects a Smoothieboard V2 serial port
to a drive with a three-wire RS-232 port. It has a male **DE-9** D-sub connector,
commonly called **DB9**, and a three-position screw terminal. The terminal also
has a parallel 2.54 mm pin-header footprint.

**Design draft.** The circuit and pinout are specified. Board layout and
hardware qualification are pending.

## Pinout

All directions below are from the board's perspective. Choose one field
connector for a single drive. All three field connectors share the same lines.

| Board signal | Screw terminal (5 mm pitch) | Alternate pin header | Male DE-9 |
| --- | ---: | ---: | ---: |
| Transmit output | 1 | 1 | 3 |
| Receive input | 2 | 2 | 2 |
| Isolated signal ground | 3 | 3 | 5 |

The DE-9 has PC-style data terminal equipment (DTE) wiring. Contacts 1, 4, 6,
7, 8 and 9 are open. Read the contact numbers on the connector's mating face
when checking a cable. Use pin 5 for the return. The metal shell is for the
cable shield.

### Host and chain

Use a Gadgeteer serial socket of type U or K. The host supplies 3.3 V on pin 1,
5 V on pin 2 and host ground on pin 10. The board receives host transmit on
pin 4 and returns host receive on pin 5. Confirm the actual serial socket
and available power for your controller revision.

CHAIN preserves the input pin numbers. Power and ground pass directly, signal
links for pins 3 and 6–9 are closed by default, and the links for the serial
pair on pins 4 and 5 are open by default.

## Wiring a drive

With power off, check that the drive manual calls for RS-232 and supports
operation without hardware flow control. A nine-pin socket can carry other
signals, including RS-485 or proprietary wiring.

- **Drive with screw terminals.** Connect board transmit to drive receive,
  board receive to drive transmit, and isolated signal ground to the drive's
  serial signal ground.
- **Drive with a nine-pin port.** If the drive is wired as data communication
  equipment (DCE) and accepts a three-wire link, use a straight-through cable
  with contacts 2, 3 and 5 connected. If it has DTE wiring, use a three-wire
  null-modem cable that crosses 2 and 3 and passes 5 straight through.
  Confirm with the drive's documented pinout and a continuity check.

```text
Controller UART         Isolated RS-232 board          Drive RS-232
Host TX (pin 4)   --->  TX OUT (DE-9 pin 3)      --->  RX
Host RX (pin 5)   <---  RX IN  (DE-9 pin 2)      <---  TX
Host GND (pin 10)       ISO GND (DE-9 pin 5)     ----  Signal ground
                  | isolation boundary |
```

## Configuration

Use host software that implements the drive's command protocol. Set the
baud rate, data bits, parity and stop bits to the values in the drive manual,
with hardware flow control off. SmoothieV2 has no configuration for driving a
spindle through this interface. For another drive interface, see the
[Bouni spindle control family](/extensions/bouni-spindle-module-boards).

## How it works

The host UART uses 3.3 V logic. A two-channel level translator connects it to
the 5 V isolated RS-232 transceiver, which generates the bipolar field signals
and the isolated power for its field side. The transmit and receive lines
operate independently.

- [Analog Devices ADM3251E isolated transceiver](https://www.analog.com/media/en/technical-documentation/data-sheets/ADM3251E.pdf)
- [Texas Instruments TXU0202 level translator](https://www.ti.com/lit/ds/symlink/txu0202.pdf)
