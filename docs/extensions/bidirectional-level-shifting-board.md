---
layout: default
title: "Bidirectional level shifting board"
permalink: /extensions/bidirectional-level-shifting-board
---

# Bidirectional level shifting board

This is a seven-channel digital level-interface candidate between a 3.3 V host domain and a separately selected peripheral domain. Despite the family name, each selected SN74LVC1T45 channel has a manually chosen direction. It does not automatically detect signal direction.

This guide selects **v17** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v17 source package retains schematic title-block revision **v02**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1 carries A-side host signals and J2 the corresponding B-side peripheral signals. JP1–JP7 choose A-to-B or B-to-A independently. JP8 selects the B-side translator rail from host 5 V or the external path. JP9/JP10 separately control forwarded 5 V/3.3 V connector rails; those forwarded rails are not the same thing as the translator's B-side voltage.

## Power, signals and limits

The selected hardware is directed push-pull translation. Do not use it as a generic bidirectional I2C/open-drain translator, analogue interface, or hot-plug isolator. J3.1 is the external voltage input before the protection diode and J3.2 is ground. Never fit two source-selection states or let a peripheral drive the forwarded rails without a verified power-ownership analysis. Rate, capacitive load and supply sequence remain unqualified.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Cyan: Selected supply — check the jumper or rail-selection instructions.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-overview" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-overview.svg" title="Seven-channel level shifter — overview" alt="Seven-channel level shifter — overview for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-a-1-5" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-a-1-5-central-pills.svg" title="J1 · Host A side — a 1 5" alt="J1 · Host A side — a 1 5 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-a-6-10" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-a-6-10-central-pills.svg" title="J1 · Host A side — a 6 10" alt="J1 · Host A side — a 6 10 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-1-5" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-1-5-central-pills.svg" title="J2 · Peripheral B side — b 1 5" alt="J2 · Peripheral B side — b 1 5 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-6-10" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-6-10-central-pills.svg" title="J2 · Peripheral B side — b 6 10" alt="J2 · Peripheral B side — b 6 10 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-external-1-2" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-external-1-2-central-pills.svg" title="J3 · External B supply — external 1 2" alt="J3 · External B supply — external 1 2 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-1" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-1.svg" title="Channel 1 direction — channel 1" alt="Channel 1 direction — channel 1 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-2" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-2.svg" title="Channel 2 direction — channel 2" alt="Channel 2 direction — channel 2 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-3" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-3.svg" title="Channel 3 direction — channel 3" alt="Channel 3 direction — channel 3 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-4" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-4.svg" title="Channel 4 direction — channel 4" alt="Channel 4 direction — channel 4 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-5" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-5.svg" title="Channel 5 direction — channel 5" alt="Channel 5 direction — channel 5 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-6" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-6.svg" title="Channel 6 direction — channel 6" alt="Channel 6 direction — channel 6 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-channel-7" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-channel-7.svg" title="Channel 7 direction — channel 7" alt="Channel 7 direction — channel 7 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-supply" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-supply.svg" title="Translator B supply — b supply" alt="Translator B supply — b supply for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-forwarded-rails" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-forwarded-rails.svg" title="Forwarded connector rails — forwarded rails" alt="Forwarded connector rails — forwarded rails for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-a-protection" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-a-protection.svg" title="A-side signal protection — a protection" alt="A-side signal protection — a protection for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-protection" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-protection.svg" title="B-side signal protection — b protection" alt="B-side signal protection — b protection for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-supply-tests" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-supply-tests-underside-caption.svg" title="Supply and ground tests — supply tests" alt="Supply and ground tests — supply tests for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-a-tests-1-4" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-a-tests-1-4.svg" title="A1–A4 test pads — a tests 1 4" alt="A1–A4 test pads — a tests 1 4 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-a-tests-5-7" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-a-tests-5-7.svg" title="A5–A7 test pads — a tests 5 7" alt="A5–A7 test pads — a tests 5 7 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-tests-1-4" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-tests-1-4.svg" title="B1–B4 test pads — b tests 1 4" alt="B1–B4 test pads — b tests 1 4 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-b-tests-5-7" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-b-tests-5-7.svg" title="B5–B7 test pads — b tests 5 7" alt="B5–B7 test pads — b tests 5 7 for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-reader-compact-mounts" src="/images/extensions/bidirectional-level-shifting-board/guides/reader-compact-mounts.svg" title="Mounting holes — mounts" alt="Mounting holes — mounts for bidirectional-level-shifting-board v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated reference sheets above use the selected board abstract and source-numbered contacts. Use every focused sheet together with the connector table. Actual desktop/narrow viewer checks and assembled-board verification remain open.

### level-shifter — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J3 — EXT VB + / GND | 1 | `/EXT_IN` |
| J3 — EXT VB + / GND | 2 | `GND` |
| J1 — Y-A HOST 3.3V (Y) | 1 | `/+3V3_A` |
| J1 — Y-A HOST 3.3V (Y) | 2 | `/+5V_A` |
| J1 — Y-A HOST 3.3V (Y) | 3 | `/A1` |
| J1 — Y-A HOST 3.3V (Y) | 4 | `/A2` |
| J1 — Y-A HOST 3.3V (Y) | 5 | `/A3` |
| J1 — Y-A HOST 3.3V (Y) | 6 | `/A4` |
| J1 — Y-A HOST 3.3V (Y) | 7 | `/A5` |
| J1 — Y-A HOST 3.3V (Y) | 8 | `/A6` |
| J1 — Y-A HOST 3.3V (Y) | 9 | `/A7` |
| J1 — Y-A HOST 3.3V (Y) | 10 | `GND` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 1 | `/+3V3_B` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 2 | `/+5V_B` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 3 | `/B1` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 4 | `/B2` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 5 | `/B3` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 6 | `/B4` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 7 | `/B5` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 8 | `/B6` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 9 | `/B7` |
| J2 — Y-B PERIPHERAL VCCB (Y) | 10 | `GND` |

</div>




### Links, controls and indicators

For the channel-1 bench below, **JP1 1–2 selects A → B** and **JP8 1–2 selects host 5 V for VCCB**. Check those two bridges with power removed; never bridge all three contacts. JP9 and JP10 forward connector supply rails independently of this selection, so leave J2.1/J2.2 and the external supply J3 unused in the meter example. The source contact table records the remaining direction links; actual fitted continuity must be checked before another channel or supply arrangement is used.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP9 | 5V FWD (cut to isolate) | 1 = /+5V_A; 2 = /+5V_B |
| JP8 | VCCB HOST5V(1-2) \| EXT(2-3) | 1 = /+5V_A; 2 = /VCCB; 3 = /EXT_VB |
| JP5 | DIR5 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR5; 3 = GND |
| JP1 | DIR1 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR1; 3 = GND |
| JP6 | DIR6 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR6; 3 = GND |
| JP7 | DIR7 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR7; 3 = GND |
| JP3 | DIR3 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR3; 3 = GND |
| JP2 | DIR2 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR2; 3 = GND |
| JP10 | 3V3 FWD (cut to isolate) | 1 = /+3V3_A; 2 = /+3V3_B |
| JP4 | DIR4 A>B(1-2) \| A&lt;B(2-3) | 1 = /+3V3_A; 2 = /DIR4; 3 = GND |

</details>


Selected active-component identities: `U10 TPD4E1U06`; `U7 SN74LVC1T45`; `U11 TPD4E1U06`; `U3 SN74LVC1T45`; `U1 SN74LVC1T45`; `U5 SN74LVC1T45`; `U8 TPD4E1U06`; `U2 SN74LVC1T45`; `U6 SN74LVC1T45`; `U4 SN74LVC1T45`; `U9 TPD4E1U06`. These identities are not a substitute for matching datasheet limits.


</details>

## Practical use with Smoothieboard V2 Prime

This selected bench example measures channel 1 translating a 3.3 V host output to 5 V logic. Use a **Fluke 117 in dedicated DC volts mode**, with red lead in V and black lead in COM; leave its current terminal unused. Its DC-voltage input is nominally greater than 10 MΩ. **Do not select Auto-V LoZ**, which presents approximately 3 kΩ. This is a voltage observation only; no motor, powered tool or other load is connected.

**Unpowered source plan:** do not energize until the stated supply, sequencing and fitted-connection checks are resolved.

### Native-contact source circuit

The wiring below lands on the source-native Prime and level-shifter contacts. **Keep the circuit unpowered** until the supply allowance, sequencing, logic margins, fitted links and mating checks are resolved. JP1 and JP8 bridge contacts 1–2. **Unused does not mean unpowered:** JP9/JP10 can forward host rails onto J2.1/J2.2; these contacts remain externally unconnected. J3 and external loads stay disconnected. Read the setup, power, meter, limits and source sheets together.

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-0" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/bidirectional-meter.svg" title="Native-contact unpowered meter circuit" alt="Native-contact unpowered meter circuit" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-1" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/SETUP.svg" title="Channel and jumper setup" alt="Channel and jumper setup" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-2" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/POWER.svg" title="Power and potentially live forwarded contacts" alt="Power and potentially live forwarded contacts" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-3" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/METER.svg" title="Meter contacts" alt="Meter contacts" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-4" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/LIMITS.svg" title="Unresolved electrical and mating checks" alt="Unresolved electrical and mating checks" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-5" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/SOURCE.svg" title="Source revision and scope" alt="Source revision and scope" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-6" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/LOCATOR-prime.svg" title="Prime contact locations" alt="Prime contact locations" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-7" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/LOCATOR-board.svg" title="Level-shifter contact locations" alt="Level-shifter contact locations" caption="Unpowered source circuit; verify supply, sequencing, logic margins and mating before energizing." width=1200 %}

<details markdown="1">
<summary>All 60 numbered native contact and jumper keys</summary>

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-0" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-1.svg" title="board J1 1" alt="board J1 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-1" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-10.svg" title="board J1 10" alt="board J1 10" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-2" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-2.svg" title="board J1 2" alt="board J1 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-3" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-3.svg" title="board J1 3" alt="board J1 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-4" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-4.svg" title="board J1 4" alt="board J1 4" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-5" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-5.svg" title="board J1 5" alt="board J1 5" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-6" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-6.svg" title="board J1 6" alt="board J1 6" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-7" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-7.svg" title="board J1 7" alt="board J1 7" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-8" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-8.svg" title="board J1 8" alt="board J1 8" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-9" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J1-9.svg" title="board J1 9" alt="board J1 9" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-10" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-1.svg" title="board J2 1" alt="board J2 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-11" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-10.svg" title="board J2 10" alt="board J2 10" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-12" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-2.svg" title="board J2 2" alt="board J2 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-13" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-3.svg" title="board J2 3" alt="board J2 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-14" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-4.svg" title="board J2 4" alt="board J2 4" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-15" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-5.svg" title="board J2 5" alt="board J2 5" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-16" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-6.svg" title="board J2 6" alt="board J2 6" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-17" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-7.svg" title="board J2 7" alt="board J2 7" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-18" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-8.svg" title="board J2 8" alt="board J2 8" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-19" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J2-9.svg" title="board J2 9" alt="board J2 9" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-20" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J3-1.svg" title="board J3 1" alt="board J3 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-21" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-J3-2.svg" title="board J3 2" alt="board J3 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-22" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP1-1.svg" title="board JP1 1" alt="board JP1 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-23" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP1-2.svg" title="board JP1 2" alt="board JP1 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-24" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP1-3.svg" title="board JP1 3" alt="board JP1 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-25" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP10-1.svg" title="board JP10 1" alt="board JP10 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-26" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP10-2.svg" title="board JP10 2" alt="board JP10 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-27" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP2-1.svg" title="board JP2 1" alt="board JP2 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-28" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP2-2.svg" title="board JP2 2" alt="board JP2 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-29" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP2-3.svg" title="board JP2 3" alt="board JP2 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-30" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP3-1.svg" title="board JP3 1" alt="board JP3 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-31" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP3-2.svg" title="board JP3 2" alt="board JP3 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-32" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP3-3.svg" title="board JP3 3" alt="board JP3 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-33" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP4-1.svg" title="board JP4 1" alt="board JP4 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-34" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP4-2.svg" title="board JP4 2" alt="board JP4 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-35" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP4-3.svg" title="board JP4 3" alt="board JP4 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-36" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP5-1.svg" title="board JP5 1" alt="board JP5 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-37" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP5-2.svg" title="board JP5 2" alt="board JP5 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-38" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP5-3.svg" title="board JP5 3" alt="board JP5 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-39" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP6-1.svg" title="board JP6 1" alt="board JP6 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-40" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP6-2.svg" title="board JP6 2" alt="board JP6 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-41" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP6-3.svg" title="board JP6 3" alt="board JP6 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-42" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP7-1.svg" title="board JP7 1" alt="board JP7 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-43" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP7-2.svg" title="board JP7 2" alt="board JP7 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-44" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP7-3.svg" title="board JP7 3" alt="board JP7 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-45" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP8-1.svg" title="board JP8 1" alt="board JP8 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-46" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP8-2.svg" title="board JP8 2" alt="board JP8 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-47" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP8-3.svg" title="board JP8 3" alt="board JP8 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-48" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP9-1.svg" title="board JP9 1" alt="board JP9 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-49" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/board-JP9-2.svg" title="board JP9 2" alt="board JP9 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-50" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-1.svg" title="prime J37 1" alt="prime J37 1" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-51" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-10.svg" title="prime J37 10" alt="prime J37 10" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-52" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-2.svg" title="prime J37 2" alt="prime J37 2" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-53" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-3.svg" title="prime J37 3" alt="prime J37 3" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-54" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-4.svg" title="prime J37 4" alt="prime J37 4" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-55" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-5.svg" title="prime J37 5" alt="prime J37 5" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-56" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-6.svg" title="prime J37 6" alt="prime J37 6" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-57" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-7.svg" title="prime J37 7" alt="prime J37 7" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-58" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-8.svg" title="prime J37 8" alt="prime J37 8" caption="Native source contact numbering, not a mating-face view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-native-key-59" src="/images/extensions/bidirectional-level-shifting-board/guides/native-meter/reader-contact-keys/prime-J37-9.svg" title="prime J37 9" alt="prime J37 9" caption="Native source contact numbering, not a mating-face view." width=420 %}

</details>

### Compact connection schedule

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-six-leads" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-individual-leads.svg" title="Channel 1 — six-lead DC voltage bench" alt="Four numbered Prime leads to level shifter J1 and two J2 leads to a Fluke 117 in DC volts mode" caption="Source-default A to B translation; JP1 and JP8 bridge 1–2. No external supply, output load or forwarded-rail connection. P11 Prime art uses separately checked P12 J37 contacts. Mating, rail allowance and dynamic performance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-key-J37" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-J37-numbered-pads.svg" title="J37 — numbered source contact key" alt="J37 source-coordinate contact numbering for the selected level-shifter bench" caption="PCB contact projection, not a plug mating face. Filled contacts show selected leads or the stated 1–2 bridge; read with the complete circuit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-key-J1" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-J1-numbered-pads.svg" title="J1 — numbered source contact key" alt="J1 source-coordinate contact numbering for the selected level-shifter bench" caption="PCB contact projection, not a plug mating face. Filled contacts show selected leads or the stated 1–2 bridge; read with the complete circuit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-key-J2" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-J2-numbered-pads.svg" title="J2 — numbered source contact key" alt="J2 source-coordinate contact numbering for the selected level-shifter bench" caption="PCB contact projection, not a plug mating face. Filled contacts show selected leads or the stated 1–2 bridge; read with the complete circuit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-key-JP1" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-JP1-numbered-pads.svg" title="JP1 — numbered source contact key" alt="JP1 source-coordinate contact numbering for the selected level-shifter bench" caption="PCB contact projection, not a plug mating face. Filled contacts show selected leads or the stated 1–2 bridge; read with the complete circuit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="level-shifter-v17-key-JP8" src="/images/extensions/bidirectional-level-shifting-board/guides/compact-JP8-numbered-pads.svg" title="JP8 — numbered source contact key" alt="JP8 source-coordinate contact numbering for the selected level-shifter bench" caption="PCB contact projection, not a plug mating face. Filled contacts show selected leads or the stated 1–2 bridge; read with the complete circuit." width=420 %}

<details markdown="1">
<summary>Earlier wide bench plan — supplementary</summary>

{% include _includes/extension-instruction-diagram.html id="bidirectional-level-shifting-board-v17-installation" src="/images/extensions/bidirectional-level-shifting-board/guides/prime-installation-wiring.svg" title="Channel 1 bench voltage measurement" alt="Smoothieboard V2 Prime GF/J37 wired to the level shifter, with B1 and ground connected to a DC voltmeter." caption="Twelve source-numbered conductors. Retained P11 Prime artwork uses a source-checked P12 GF/J37 assignment. Physical mating and installed firmware remain open." width=3300 %}

</details>

1. With power removed, verify JP1 connects **1–2 (A → B)** and JP8 connects **1–2 (VCCB = host 5 V)**. Never bridge all three contacts. Leave the external supply connector J3 disconnected.
2. Connect four individual Prime **GF/J37 leads to J1: 1→1, 2→2, 3→3 and 10→10**. Leave all other host and J1 contacts unconnected. Contact 1 supplies VCCA from host 3.3 V, contact 2 supplies VCCB through JP8 from host 5 V, contact 3 carries PB1 to A1, and contact 10 is ground. The enlarged keys show source PCB contact positions; they do not establish a fitted plug viewing side or ribbon-stripe instruction.
3. Connect **J2.3 (B1)** to the meter's voltage input and **J2.10 (ground)** to COM. J2.1/J2.2 forwarded supply rails and J2.4–9 remain unused. Do not drive B1 while JP1 selects A → B.
4. Reserve PB1 as a digital output and measure B1 in the output's LOW and HIGH states. U1 performs active translation; the A and B sides share ground. Source R1/R8 are 100 kΩ pull-downs and C1/C8 are 100 nF bypass capacitors. Measured levels, power sequencing, dynamic timing and the host rail budget still need qualification.

## Smoothieware use

The translator requires no serial protocol or dedicated driver. For the meter-only example, use the V2 digital `switch` output below. Reserve **PB1** from every other module and verify that no existing handler uses **M42.17/M43.17** before adding this subsection to your configuration. Keep all tools and motion loads disconnected during this bench test.

```ini
[switch]
level_test.enable = true
level_test.output_pin = PB1
level_test.output_type = digital
level_test.input_on_command = M42
level_test.input_off_command = M43
level_test.subcode = 17
level_test.startup_state = false
level_test.halt_set_to = false
```

After loading the configuration, send **`M43.17`** for LOW, then **`M42.17`** for HIGH, and finally **`M43.17`** to return LOW. Read J2.3 relative to J2.10 on the meter: the selected A → B channel translates PB1's 3.3 V logic to the 5 V B-side domain. Actual voltages must be measured; this example does not qualify timing or load-driving capability. The `.17` command suffix must match `subcode = 17`.

This example is source-checked against [SmoothieV2 Switch.cpp at commit 2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp): the parser selects digital output, initializes it LOW, matches command and subcode, and sets HIGH/LOW in the command handler. `halt_set_to = false` requests LOW on software halt. It does not establish the installed firmware version, boot/reset state, power-sequencing behavior or a hardware safety function.

A real attached peripheral may require additional firmware support and different signal timing. If required support is absent, email **wolf.arthur@gamil.com**.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Fluke 114/115/117 user manual](https://assets.fluke.com/manuals/114_____umeng0100.pdf), PN 2572573, revision 1 (February 2007), printed pages 6, 11 and 23 — voltage/COM terminals, dedicated DC-voltage mode and input impedance. The named meter does not qualify the board’s load drive or dynamic timing.


- [Selected v17 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/bidirectional-level-shifting-board/attempt/versions/v17)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** The selected meter example fixes the electrical endpoints, channel direction and rail selection. Assembled jumper continuity, physical connector orientation, host rail allowance, installed firmware behavior, measured logic levels, timing and actual viewer review remain open.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="bidirectional-level-shifting-board" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
