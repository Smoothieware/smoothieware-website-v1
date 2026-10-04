# Creality Falcon2

**Evidence depth:** the wiki establishes the model identity; a manufacturer V2.0 quick guide adds variant-scoped facts for a 22 W model. The guide does not establish which power variant or hardware revision is installed on the machine represented by the wiki entry.

## Wiki-supported identity and facts

The Appropedia wiki names the Creality Falcon2 among diode-laser models. It does not give a power variant, bed size, control electronics, or pinout. Exact Falcon2 power variant is therefore unknown.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram. The manufacturer-guide update below supplies a model-family operating and interface overview for its illustrated 22 W variant, but it still does not give a machine-side contact map. The installed variant and hardware revision remain unknown.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

## Manufacturer-guide source update · 2026-09-27

The official [Creality Falcon2 Quick Guide V2.0](https://cdn.creality.com/ow/official/3471f29f-a014-4fa8-a739-1a270082a86c.pdf) describes a 22 W variant. Its product-parameter table (printed p. 05) gives 100–240 V AC input, 24.0 V DC / 5.0 A adapter output, a 400 × 415 mm engraving area, and 455 ± 5 nm diode laser wavelength. These specifications are guide-scoped and do not identify the exact Falcon2 variant in the wiki catalogue.

The overview (printed p. 06) names left/right Y-axis assemblies, front/rear X-axis assemblies, adapter board, 22 W laser module, control panel, emergency-stop button, security lock, TF card slot, frame Type-C port, power input, and power button. The parts list (printed p. 07) also lists the power supply, air pump, USB-C cable, TF card/card reader, and USB-A-to-USB-C adapter. Other supplied parts are raiser stands, focus block, goggles, basswood, anti-static brush, storage box, hand tools, two lock keys, protective lens, screws, cleaning cloth, cable straps, metal protection plate, and tweezers. The guide assigns no machine connector pins to those parts/accessories; the USB cable and adapter are accessories, not additional connector maps. The guide also describes AIR, FIRE, and LENS monitoring/indicators within the laser module (printed pp. 15–16), without publishing separate external sensor contacts. Control-panel instructions name Frame, Start/Pause, and directional buttons, but give no panel electrical pinout. These are module/UI functions, not additional exposed machine pins. The guide does not provide axis-motor terminal assignments, a control-panel circuit, emergency-stop contacts, security-lock contacts, or connector cavity maps.

The assembly instructions (printed pp. 09–10) say that the pump cable plugs into the machine's left-side air-pump interface and that a laser-module cable connects the laser module to the adapter board. The guide gives neither cable's contact count nor its pin functions, voltage, polarity, connector family, or mating-face orientation. The guide warns not to plug or unplug the laser-module cable while the machine is powered (printed p. 04). Keep both machine interfaces OPEN and do not invent numbered positions.

The frame Type-C interface is used for host-computer operation with LaserGRBL/LightBurn and a Type-C cable (printed pp. 12–13); offline engraving from TF card is also documented (printed pp. 13–14). The separate Type-C port on top of the laser module is documented for firmware update and work-log export (printed p. 16; PDF p. 19). They are distinct interfaces. The guide does not publish either port's fitted-contact population, board nets, pin direction, or a machine-to-SmoothieBox route. A generic USB-IF Type-C receptacle contact schedule may be included only as a **form-only reference inventory**, separately for each port; it does not assert those positions are present or electrically routed in this Falcon2.

The guide identifies a TF-card slot but does not publish its contact schedule. The SD Association simplified specification for full-size SD delegates microSD contact assignments to a separate microSD addendum; therefore no full-size SD pin numbering is transferred to this TF slot. The slot remains position-unmapped.

**Electrical result:** no machine-side numbered harness map, matched SmoothieBox route, or interface qualification has been found. All SmoothieBox-to-Falcon2 routes remain OPEN. Do not interpret product power ratings as the pinout or permission to connect power, laser, air-pump, safety, or motion circuits.

### Separate USB-C standard form schedule

The schedule below is the generic USB-IF Type-C **receptacle-position** map from Table 3-4, reproduced once for reference. It applies as a 24-position naming reference to each of the two guide-identified Type-C ports; that means 48 form-only port positions across two interfaces. It does not assert fitted contacts, signals on the Falcon2 PCB, or signal direction. Each named port's positions remain OPEN to SmoothieBox. A connector shell/shield is separate from the 24 contact designations; Falcon2 shell bonding is not documented and is left unmapped.

| Position | USB-IF receptacle signal | Falcon2 status |
| --- | --- | --- |
| A1 | GND | Form-only; fitted contact/net unknown; OPEN |
| A2 | TX1+ | Form-only; fitted contact/net unknown; OPEN |
| A3 | TX1− | Form-only; fitted contact/net unknown; OPEN |
| A4 | VBUS | Form-only; fitted contact/net unknown; OPEN |
| A5 | CC1 | Form-only; fitted contact/net unknown; OPEN |
| A6 | Dp1 (USB 2.0 D+) | Form-only; fitted contact/net unknown; OPEN |
| A7 | Dn1 (USB 2.0 D−) | Form-only; fitted contact/net unknown; OPEN |
| A8 | SBU1 | Form-only; fitted contact/net unknown; OPEN |
| A9 | VBUS | Form-only; fitted contact/net unknown; OPEN |
| A10 | RX2− | Form-only; fitted contact/net unknown; OPEN |
| A11 | RX2+ | Form-only; fitted contact/net unknown; OPEN |
| A12 | GND | Form-only; fitted contact/net unknown; OPEN |
| B1 | GND | Form-only; fitted contact/net unknown; OPEN |
| B2 | TX2+ | Form-only; fitted contact/net unknown; OPEN |
| B3 | TX2− | Form-only; fitted contact/net unknown; OPEN |
| B4 | VBUS | Form-only; fitted contact/net unknown; OPEN |
| B5 | CC2 | Form-only; fitted contact/net unknown; OPEN |
| B6 | Dp2 (USB 2.0 D+) | Form-only; fitted contact/net unknown; OPEN |
| B7 | Dn2 (USB 2.0 D−) | Form-only; fitted contact/net unknown; OPEN |
| B8 | SBU2 | Form-only; fitted contact/net unknown; OPEN |
| B9 | VBUS | Form-only; fitted contact/net unknown; OPEN |
| B10 | RX1− | Form-only; fitted contact/net unknown; OPEN |
| B11 | RX1+ | Form-only; fitted contact/net unknown; OPEN |
| B12 | GND | Form-only; fitted contact/net unknown; OPEN |

### Sources and scope

- [Creality Falcon2 Quick Guide V2.0](https://cdn.creality.com/ow/official/3471f29f-a014-4fa8-a739-1a270082a86c.pdf) — product parameters and component overview, printed pp. 05–07; assembly and pump/laser connections, pp. 09–10; control and Type-C use, pp. 12–16. Official manufacturer source, but limited to its illustrated 22 W variant.
- [USB-IF USB Type-C Cable and Connector Specification, Release 2.0](https://www.usb.org/sites/default/files/USB%20Type-C%20Spec%20R2.0%20-%20August%202019_0.pdf), Table 3-4 — generic 24-position receptacle contact names, used only as a standard form inventory.
- [USB-IF USB Type-C Cable and Connector Specification, Release 2.5](https://www.usb.org/document-library/usb-type-cr-cable-and-connector-specification-release-25) — current document-library landing page; Release 2.0 Table 3-4 remains the specifically inspected contact schedule for this update.
- [SD Association Simplified Specifications](https://www.sdcard.org/downloads/pls/) — full-size SD simplified specification and separate microSD addendum boundary; no microSD positions are inferred here.

**Archived source capture:** `/tmp/creality-falcon2-quick-guide-v2-0.pdf`, 2,855,720 bytes, SHA-256 `32c87e4eb853e0392c8407472378355cd5881f269f3756db564d12e8cd8dcdc7`.
