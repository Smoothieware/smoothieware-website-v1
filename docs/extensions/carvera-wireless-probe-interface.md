---
layout: default
title: "Carvera wireless-probe interface"
permalink: /extensions/carvera-wireless-probe-interface
---

# Carvera wireless-probe interface

> No board-specific connection is available for this interface. Do not connect
> it to a Smoothieboard or machine.

## What it is for

The interface lets a Smoothieboard V2 host use a Makera Carvera wireless Z probe
for probing and surface leveling. The signal path is a radio receiver that
reports a latched contact and a separate readiness/fault state to the motion
controller. A serial link carries management data; it must not be the immediate
contact-stop path.

The `Zigbee` name used by the project does not mean that the open-source probe
example uses a Zigbee network: that example uses raw IEEE 802.15.4 frames.

## How it works

The receiver validates the peer and frame, latches a valid contact before
sending management responses, and presents both contact and readiness/fault to
dedicated host inputs. A lost, stale, malformed or reordered event must not
clear a contact or authorize a probing move. The host firmware must stop through
a bounded motion path on contact or loss of readiness and invalidate the
measurement on a fault.

## Connector and power

The interface uses one keyed type-U Gadgeteer connector.

| Type-U contact | Role | State and direction |
| --- | --- | --- |
| U1 | 3.3 V | Host rail |
| U2 | 5 V | Host rail |
| U3 | Contact | Dedicated interrupt-capable host input |
| U4 | Host TX | Management data from host to receiver |
| U5 | Host RX | Management data from receiver to host |
| U6 | Readiness/fault | Separate host input |
| U7–U9 | Reserved | Reserved contacts |
| U10 | Ground | Circuit return |

Logic is 3.3 V. Never apply 5 V to 3.3 V logic. The host's approximately 3 A
5 V budget is shared among the controller and extensions. Do not connect an
external supply or parallel the rails.

## Smoothieware support

This is an active wireless receiver and probe integration, not a passive
adapter. Smoothieware has no Carvera receiver driver, contact/fault input
integration, probing configuration or command for it. A generic probe setting
cannot supply those functions.

## Further reading

- [Makera Carvera wireless probe](https://global.makera.com/products/wireless-probe)
  — product reference.
- [Makera Carvera firmware](https://github.com/MakeraInc/CarveraFirmware/tree/83c669154df7b02718a0eecb9032de84eca5c7ad)
  — firmware source.
- [Carvera Community firmware](https://github.com/Carvera-Community/Carvera_Community_Firmware/tree/2c97111cb0bbd6d3edfac2c138963c0255248865)
  — firmware source.
- [Open-source three-axis CNC touch-probe project](https://github.com/faecorrigan/Open-Source-3-axis-CNC-Touch-Probe/tree/44bad0ca307874b23b5c5c119c0a5868bd112c24)
  — open-source probe project.
