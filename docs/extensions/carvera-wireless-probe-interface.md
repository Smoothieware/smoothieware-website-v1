---
layout: default
title: "Carvera wireless-probe interface — v01 prototype contract"
permalink: /extensions/carvera-wireless-probe-interface
---

# Carvera wireless-probe interface — v01 prototype contract

> **Source-only prototype record.** This is a proposed Smoothieboard V2 probe
> interface, not a released or built extension board. No board-specific
> connection is ready to make. Probe compatibility, electrical behavior,
> firmware support and physical performance are unverified.

## What it is for

The proposal would let a Smoothieboard V2 host use a named Makera Carvera
wireless Z probe for probing and surface leveling. The intended path is a radio
receiver that reports a latched contact and a separate readiness/fault state to
the motion controller. A serial link is proposed for management; it must not be
the immediate contact-stop path.

The retained project material is a **v01 prototype specification and interface
contract**, not a released board revision. It contains no KiCad schematic or
PCB, bill of materials, populated-board drawing, fabrication package or
canonical abstract SVG. The `Zigbee` name used by the project does not establish
that the open-probe experiment uses a Zigbee network: its pinned example uses
raw IEEE 802.15.4 frames. Neither that experiment nor the OEM product page
proves interoperability with a Carvera probe or receiver.

## How the proposal would work

The source contract calls for the receiver to validate the peer and frame,
latch a valid contact before sending management responses, and present both
contact and readiness/fault to dedicated host inputs. A lost, stale, malformed
or reordered event must not clear a contact or authorize a probing move. The
host would need firmware that stops through a bounded motion path on contact or
loss of readiness and invalidates the measurement on a fault. These are
requirements for future implementation, not behavior present in a delivered
board or Smoothieware release.

The pinned open-source probe sketch is a research lead for probe-to-receiver
behavior. It is not a ready-made receiver, does not prove reverse-direction
OEM compatibility, and its example battery payload is not a verified battery
measurement. The separate Makera and community firmware sources are useful
for source comparison; neither establishes support in Smoothieware.

## Proposed connector and power contract

The specification proposes one keyed type-U Gadgeteer connector. The mapping
below is a **design proposal only**; no physical connector, netlist or fitted
radio exists to verify it. Do not use it as a cable schedule.

| Type-U contact | Proposed role | State and direction |
| --- | --- | --- |
| U1 | 3.3 V | Intended host rail; receiver load and allocation are not established. |
| U2 | 5 V | Intended host rail; receiver peak current and safe allocation are not established. |
| U3 | Contact | Candidate dedicated interrupt-capable host input; receiver output circuit and polarity are not frozen. |
| U4 | Host TX | Candidate management data from host to receiver; receiver interface is not implemented. |
| U5 | Host RX | Candidate management data from receiver to host; receiver interface is not implemented. |
| U6 | Readiness/fault | Candidate separate host input; circuit, polarity and host assignment are not frozen. |
| U7–U9 | Reserved | The source contract reserves these contacts. |
| U10 | Ground | Intended circuit return; actual board continuity is unavailable. |

The design notes specify 3.3 V logic, prohibit applying 5 V to 3.3 V logic, and
warn that the host's approximately 3 A 5 V budget is shared among the controller
and extensions. The receiver's peak draw and a conservative board allocation
have not been measured or frozen. Do not connect an external supply or parallel
rails based on this proposal.

No Prime connector number, pin number, cable orientation, receiver connector,
probe revision or peripheral endpoint has been verified for this design. There
is therefore no complete, source-backed wiring instruction. Do not connect this
proposal to a Smoothieboard or machine.

## Smoothieware support and use

This is an active wireless receiver and probe integration concept, not a passive
adapter. The reviewed source does not provide a supported Carvera receiver
driver, contact/fault input integration, probing configuration, command or
validated example. A generic probe setting cannot supply those missing paths.

Using it would require firmware work for both dedicated inputs, a bounded stop
and abort path, fault-driven measurement invalidation, and a separate management
interface. None of that support is available to configure here. For support or
implementation status, email [wolf.arthur@gamil.com](mailto:wolf.arthur@gamil.com).

## Required instructional diagrams — incomplete

### 1. Annotated board reference

**Not available.** There is no board CAD or abstract SVG from which to identify
actual connectors, pins, jumpers, indicators or controls. The proposed type-U
roles above are not a substitute for the requested pill-annotated board
diagram.

### 2. Smoothieboard V2 Prime wiring

**Not available.** The receiver circuit, exact Prime input assignments,
connector orientation and signal electrical characteristics are not fixed by
the source. Drawing wires now would invent connections. This guide does not
include a placeholder or an unconnected illustration in place of the required
Prime-and-board wiring diagram.

Both diagram gates remain incomplete until the design has matching board
geometry, fixed source-backed host contacts and a reviewed practical use case.

## Source revisions and further reading

- Project source record: `carvera-zigbee-probe` v01 prototype specifications,
  design decisions, protocol contract and research notes. These are planning
  documents; there is no released board source package or native board file.
- [Makera Carvera wireless probe](https://global.makera.com/products/wireless-probe)
  — product reference; not proof of interface compatibility.
- [Makera Carvera firmware at the reviewed source revision](https://github.com/MakeraInc/CarveraFirmware/tree/83c669154df7b02718a0eecb9032de84eca5c7ad)
  — source comparison only.
- [Carvera Community firmware at the reviewed source revision](https://github.com/Carvera-Community/Carvera_Community_Firmware/tree/2c97111cb0bbd6d3edfac2c138963c0255248865)
  — source comparison only.
- [Open-source three-axis CNC touch-probe project at the reviewed source revision](https://github.com/faecorrigan/Open-Source-3-axis-CNC-Touch-Probe/tree/44bad0ca307874b23b5c5c119c0a5868bd112c24)
  — prototype research lead; compatibility with the OEM probe is unverified.

No RF, stopping-distance, metrology, physical assembly or powered-use test is
claimed by this source record.
