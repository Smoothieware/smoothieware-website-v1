---
layout: default
title: "BeagleBone breakout"
permalink: /extensions/beaglebone-breakout
---

# BeagleBone breakout

This UART carrier connects a BeagleBone header to a Smoothieboard UART. Its purpose is a separate Linux host for machine-control software; it does not add stepper drivers or replace the motion firmware.

This guide selects **v14** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v14 source package retains schematic title-block revision **v02**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The selected source buffers each UART direction with SN74LVC1G126 devices and gates the paths using the host and BeagleBone power/reset state. J1.4 receives host TX and J1.5 returns host RX. J2 exposes only the required P9 subset, including P9.11 receive, P9.13 transmit, grounds, 3.3 V reference and reset.

## Power, signals and limits

J1.2 (host 5 V) is unconnected. J2 P9.5–P9.9 are unconnected. P9.10 carries SYS_RESETn to the buffer-enable circuit; it is not an unused contact. This carrier is not a general BeagleBone power supply. Supply the selected BeagleBone through its supported independent input and verify its exact model and P9 definition. Both sides use the stated 3.3 V UART domain; RS-232 levels must never be applied.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-overview" src="/images/extensions/beaglebone-breakout/guides/reader-compact-overview.png" title="BeagleBone UART4 carrier — overview" alt="BeagleBone UART4 carrier — overview for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-host-1-5" src="/images/extensions/beaglebone-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART connector — host 1 5" alt="J1 · Host UART connector — host 1 5 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-host-6-10" src="/images/extensions/beaglebone-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART connector — host 6 10" alt="J1 · Host UART connector — host 6 10 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-bbb-1-5" src="/images/extensions/beaglebone-breakout/guides/reader-compact-bbb-1-5-central-pills.png" title="J2 · Physical P9 pins1–14 — bbb 1 5" alt="J2 · Physical P9 pins1–14 — bbb 1 5 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-bbb-6-10" src="/images/extensions/beaglebone-breakout/guides/reader-compact-bbb-6-10-central-pills.png" title="J2 · Physical P9 pins1–14 — bbb 6 10" alt="J2 · Physical P9 pins1–14 — bbb 6 10 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-bbb-11-14" src="/images/extensions/beaglebone-breakout/guides/reader-compact-bbb-11-14-central-pills.png" title="J2 · Physical P9 pins1–14 — bbb 11 14" alt="J2 · Physical P9 pins1–14 — bbb 11 14 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-host-tx" src="/images/extensions/beaglebone-breakout/guides/reader-compact-host-tx.png" title="Host to BBB data — host tx" alt="Host to BBB data — host tx for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-bbb-tx" src="/images/extensions/beaglebone-breakout/guides/reader-compact-bbb-tx.png" title="BBB to host data — bbb tx" alt="BBB to host data — bbb tx for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-enable" src="/images/extensions/beaglebone-breakout/guides/reader-compact-enable.png" title="Reset and power enable — enable" alt="Reset and power enable — enable for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-tests1" src="/images/extensions/beaglebone-breakout/guides/reader-compact-tests1.png" title="UART and ground tests — tests1" alt="UART and ground tests — tests1 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-breakout-v14-reader-compact-tests2" src="/images/extensions/beaglebone-breakout/guides/reader-compact-tests2.png" title="BBB supply and reset tests — tests2" alt="BBB supply and reset tests — tests2 for beaglebone-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated board-reference sheets above describe the selected source revision. Complete practical wiring and actual desktop/narrow viewer acceptance remain open; the contact table is a companion source aid.

### bbb-uart — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J1 — GADGETEER U IN | 1 | `+3V3_HOST` |
| J1 — GADGETEER U IN | 4 | `HOST_TX_IN` |
| J1 — GADGETEER U IN | 5 | `HOST_RX_OUT` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J1 | 2, 3, 6, 7, 8, 9 | NC |
| J2 — BBB P9 PLUG 1-14 | 1 | `GND` |
| J2 — BBB P9 PLUG 1-14 | 2 | `GND` |
| J2 — BBB P9 PLUG 1-14 | 3 | `VDD_3V3B` |
| J2 — BBB P9 PLUG 1-14 | 4 | `VDD_3V3B` |
| J2 — BBB P9 PLUG 1-14 | 10 | `SYS_RESETn` |
| J2 — BBB P9 PLUG 1-14 | 11 | `BBB_RXD_OUT` |
| J2 — BBB P9 PLUG 1-14 | 13 | `BBB_TXD_IN` |
| J2 | 5, 6, 7, 8, 9, 12, 14 | NC |

</div>

</details>


Selected active-component identities: `U2 SN74LVC1G126DBVR`; `U1 SN74LVC1G126DBVR`; `U3 SN74LVC1G08DBVR`. These identities are not a substitute for matching datasheet limits.



## Practical use with Smoothieboard V2 Prime

### Host UART reference — computer and rails disconnected

The intended computer is specifically BeagleBone Black Rev C. This carrier provides a buffered serial command-host interface, not another motion controller. The native-contact drawing identifies Prime GB/J33.4 PB9 TX to carrier J1.4 HOST_TX_IN, .5 PH14 RX to J1.5 HOST_RX_OUT, and .10 ground to J1.10. All twenty native header contacts and complete-board locators are retained. P11 artwork and P12 GB allocation are distinguished; the separated row crops do not establish mating-face orientation.

**Do not energize this incomplete candidate.** All rails and all BeagleBone P9 contacts remain disconnected. Host 5 V J1.2 is NC. The two 3.3 V domains must remain separate; they are not interchangeable supplies. No qualified startup, shutdown, brownout or partial-power sequence is established.

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-0" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-legibility-corrected/bbb-native-reader.png" title="Prime and BeagleBone carrier — native UART contacts" alt="Prime and BeagleBone carrier — native UART contacts" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-1" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — source contact key" alt="J1 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-2" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/J2-numbered-pads.png" title="J2 — source contact key" alt="J2 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-3" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — source contact key" alt="J33 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-4" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/U1-numbered-pads.png" title="U1 — source contact key" alt="U1 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-5" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/U2-numbered-pads.png" title="U2 — source contact key" alt="U2 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="beaglebone-native-6" src="/images/extensions/beaglebone-breakout/guides/native-contact/reader-contact-keys/U3-numbered-pads.png" title="U3 — source contact key" alt="U3 — source contact key" caption="Selected v14; three unpowered UART/ground candidates. Both 3.3 V domains and BeagleBone P9 remain disconnected. Power-transition, logic/reset margins, mating and actual-viewer acceptance remain open." width=420 %}

The carrier J2 covers only P9 contacts 1–14: .1/.2 ground, .3/.4 VDD_3V3B, .10 SYS_RESETn, .11 UART4 RX and .13 UART4 TX. Contacts .5–9, .12 and .14 are NC in this carrier. This does not support substituting another BeagleBone model or treating NC contacts as GPIO. U1 carries host TX to computer RX; U2 carries computer TX to host RX under reset-dependent enable. U3 combines SYS_RESETn and the raw host rail; it is not a power-good supervisor. The conditional named Debian/UART4 procedure below can be prepared with the adapter disconnected; no booted-image or communication test is claimed.

<details markdown="1">
<summary>Earlier unqualified computer and power wiring proposal</summary>

This retained proposal is not a powered connection instruction. The startup and interface limits below remain unresolved.

Use a separately powered BeagleBone Black Rev C as the intended serial command host. The named Linux procedure below establishes a source-backed UART4 setup example; booted-image behavior and the powered assembly remain unverified.

{% include _includes/extension-instruction-diagram.html id="bbb-v14-compact-prime-installation-wiring" src="/images/extensions/beaglebone-breakout/guides/compact-prime-installation-wiring.png" title="Prime to BeagleBone UART4 · thirteen-lead plan" alt="Prime to BeagleBone UART4 · thirteen-lead plan" caption="Both actual board abstracts with exact selected-contact locators. BeagleBone P9 and supply contacts are electrical endpoint symbols, not fabricated PCB art or mating views. Actual Linux execution, power sequencing, complete wiring and viewer acceptance remain open." width=420 %}

### Enlarged selected-contact keys

These preserve native PCB pad positions, not plug-face geometry. Filled pads identify the selected connections; all open pads stay unused. Use them with the complete plan and verify fitted connector orientation with power removed.

{% include _includes/extension-instruction-diagram.html id="bbb-v14-compact-J1-numbered-pads" src="/images/extensions/beaglebone-breakout/guides/compact-J1-numbered-pads.png" title="BeagleBone adapter v14 · J1" alt="BeagleBone adapter v14 · J1" caption="Native selected PCB contacts; not a cable mating face or proof of physical assembly." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bbb-v14-compact-J2-numbered-pads" src="/images/extensions/beaglebone-breakout/guides/compact-J2-numbered-pads.png" title="BeagleBone adapter v14 · J2" alt="BeagleBone adapter v14 · J2" caption="Native selected PCB contacts; not a cable mating face or proof of physical assembly." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bbb-v14-compact-J33-numbered-pads" src="/images/extensions/beaglebone-breakout/guides/compact-J33-numbered-pads.png" title="BeagleBone adapter v14 · J33" alt="BeagleBone adapter v14 · J33" caption="Native selected PCB contacts; not a cable mating face or proof of physical assembly." width=420 %}

<details>
<summary>Retained wide wiring-source comparison</summary>

{% include _includes/extension-instruction-diagram.html id="bbb-v14-prime-installation" src="/images/extensions/beaglebone-breakout/guides/prime-installation-wiring.png" title="Prime UART to BeagleBone Black UART4 — wiring candidate" alt="Thirteen continuous conductors connecting Prime, the v14 UART carrier, BeagleBone P9 contacts and its independent DC power supply" caption="Source-backed electrical path with retained Prime P11 artwork and P12 GB/J33 mapping. Actual Linux execution, physical mating, power sequencing and viewer acceptance remain open." width=4200 %}

The wider view describes the same selected electrical plan. Actual execution of the named Linux UART4 procedure, power ramp/backfeed, physical mating and reader acceptance remain unresolved.

</details>


With both boards unpowered, connect Prime GB/J33.1 to J1.1, .4/PB9 TX to J1.4, .5/PH14 RX to J1.5 and .10 ground to J1.10. **Host 5 V contact 2 is unused.** Verify numbered continuity and actual mating orientation; the electrical symbols are not connector mating faces.

Connect board J2.1/.2 to BeagleBone P9.1/.2 ground, J2.3/.4 to P9.3/.4 VDD_3V3B, J2.10 to P9.10 SYS_RESETn, J2.11 to P9.11 UART4 RX and J2.13 to P9.13 UART4 TX. Host TX reaches the BeagleBone RX through U1; the reverse path uses U2. The interface shares ground and is not galvanically isolated. Buffer enables depend on BeagleBone reset and host-alive logic; startup and backfeed behaviour remain unqualified.

Use the manufacturer's independent regulated 5 V ±0.25 V supply rated at least 1 A through the BeagleBone DC jack: 2.1 mm centre positive, 5.5 mm outer barrel ground. Do not infer that the host 5 V contact powers the computer. Resolve Linux UART4 pinmux, device node, client and matching baud before communication. Begin with harmless command/response and machine outputs disabled, never motion as a communications test.

</details>

### Power and startup limitation of the v14 carrier

Keep the two 3.3 V supplies separate: Prime J33.1 supplies the host-side buffer; BeagleBone P9.3/.4 supplies the BeagleBone-side buffer and enable logic. Their grounds are common. The BeagleBone needs an independent regulated 5 V ±0.25 V supply with at least 1 A capability through its 2.1 mm centre-positive, 5.5 mm outer-ground jack; peripherals can require additional current.

The circuit does not yet have a source-qualified startup sequence. U3, an SN74LVC1G08 AND gate powered by the BeagleBone, reads the raw Prime 3.3 V supply as a logic input. Its [TI datasheet](https://www.ti.com/lit/ds/symlink/sn74lvc1g08.pdf), sections 5.3 and 7.3.3, requires input transitions no slower than 10 ns/V at 3.3 V ±0.3 V and warns about slow CMOS inputs. The selected Prime P12 MT9700 current-limited switch has no matching guaranteed output edge in the retained source. U3 therefore does not establish that host power is stable. Neither “BeagleBone first” nor “Prime first” resolves this documented gap; shutdown and brownout behavior also remain unresolved.

The buffers’ partial-power-down leakage limit applies at a supply of exactly 0 V, rather than throughout a supply ramp. Reset drive and endpoint margins also need qualification. These are missing guarantees, not measurements showing that every assembly fails. Keep the connected test pending until the selected assembly has a qualified power/reset procedure; do not bypass the enable gates or join the rails to work around it. Email **wolf.arthur@gamil.com** with the carrier, Prime and BeagleBone revisions for the missing integration guidance. The Linux setup below can be prepared with the adapter disconnected.

## Smoothieware use

### Conditional Prime console setup

The pinned V2 application provides the Prime side of a UART console on channel 1: PB9 transmits and PH14 receives. The selected v14 adapter carries J1.4 HOST_TX_IN through U1 to J2.11 BBB_RXD_OUT, and J2.13 BBB_TXD_IN through U2 to J1.5 HOST_RX_OUT. The named Linux setup below is source-backed; actual booted-image behavior and powered installation remain unverified.

After qualifying actual model/header numbering, cable orientation, supply and reset behavior, the proposed partial P12 Prime GB/J33 cable is:

| Prime contact | Adapter contact | Function |
| --- | --- | --- |
| J33.1 limited 3.3 V | J1.1 +3V3_HOST | Host-side buffer supply only |
| J33.4 PB9 TX | J1.4 HOST_TX_IN | Through U1 to BBB receive contact J2.11 |
| J33.5 PH14 RX | J1.5 HOST_RX_OUT | From BBB transmit contact J2.13 through U2 |
| J33.10 ground | J1.10 ground | Common logic return |

Leave J1.2, J1.3 and J1.6–9 unused. Use no Prime 5 V or RTS/CTS wires. J2 is the board’s labelled BBB P9 contacts 1–14; its contacts 3/4 receive VDD_3V3B from the compatible, independently powered BeagleBone, while 1/2 are ground. **Do not join +3V3_HOST and VDD_3V3B.** J2.10 SYS_RESETn enables U2 directly and U1 through U3, which also checks the host supply. Do not bypass reset/output-enable circuitry. Supply/enable margins and power sequencing still need qualification.

### Named Linux example: BeagleBone Black Rev C, Debian 11.7 IoT

This software example selects the official **AM335x Debian 11.7 IoT microSD image dated 2023-09-02**, file `am335x-debian-11.7-iot-armhf-2023-09-02-4gb.img.xz`, with **kernel 5.10.168-ti-r71** and U-Boot 2022.04. The [official archive page](https://www.beagleboard.org/distros/am335x-11-7-2023-09-02-4gb-microsd-iot) identifies the image and checksum `58e76be5fd7415cca89f1187c6d96ed697b8d77fd2739ab4978f2d0ba9c87641`. This is a historical, version-pinned software example, not a recommendation to replace a maintained installation or expose an old image to untrusted networks. Image download/boot and the assembled carrier have not been tested here. Use the official image instructions on a separate microSD; this procedure does not flash the eMMC or replace firmware.

The following commands are **for the BeagleBone**, accessed through its existing independent SSH/USB-network session, not through the UART being configured. Do not run them on your workstation or Prime. First leave the adapter disconnected; the previously listed common-return, separate receiving-side 3.3 V supplies, independent DC input, reset/buffer and power-sequencing requirements remain prerequisites for later communication. A software procedure does not resolve those electrical limits.

1. Confirm the selected environment before changing pins:

   ```sh
   cat /etc/dogtag
   uname -r
   tr -d '\000' < /proc/device-tree/model
   command -v config-pin
   tr -d '\000' < /proc/device-tree/chosen/base_dtb
   ls -l /dev/ttyS4
   config-pin -l P9_11
   config-pin -l P9_13
   config-pin -q P9_11
   config-pin -q P9_13
   ```

   Require the dated Bullseye IoT image, kernel `5.10.168-ti-r71`, BeagleBone Black model, the `am335x-boneblack-uboot-univ.dts` base tree, readable helper queries and an available `uart` mode for **both** pins. The kernel's universal Black device tree provides those pinmux helpers and enables UART4; the matching driver uses its `serial4` alias for `/dev/ttyS4`. If these checks fail, stop this version-specific procedure. Do not guess a device name, download an arbitrary pin tool or apply instructions for an AI/AI-64/Blue board. Record the actual image/kernel and obtain a matching procedure.

2. Check ownership without stopping another service:

   ```sh
   cat /proc/cmdline
   systemctl is-active serial-getty@ttyS4.service
   command -v fuser
   sudo fuser -v /dev/ttyS4
   ```

   If `command -v fuser` reports no tool, install `psmisc` with `sudo apt-get install psmisc` before using it. `fuser` comes from that Debian package. The port must not be a kernel console, active serial login or another application's port. For a free port, the service should report `inactive`/not found and `fuser` should show no process (its nonzero exit for no user is expected). If occupied, resolve the specific owner in your configuration rather than blindly stopping a console. Do not use another serial client simultaneously.

3. Set only the two data pins for this session, with the carrier still disconnected:

   ```sh
   sudo config-pin P9_11 uart
   sudo config-pin P9_13 uart
   config-pin -q P9_11
   config-pin -q P9_13
   ```

   Both queries must report `uart`. P9.11 is BeagleBone UART4 **receive** and P9.13 **transmit**. These are pinmux changes, not logic-level conversion. They are session setup; repeat after a reboot and recheck ownership. Do not add a second UART overlay over these helpers or enable flow-control pins. The [official BeagleBoard UART example](https://docs.beagleboard.org/boards/capes/comms.html#test-code) uses this exact pin pair and `/dev/ttyS4`; only its UART pinmux instructions are relevant here, not the different cape's RS485 circuitry.

4. Install and authorize the actual serial client on the BeagleBone:

   ```sh
   sudo apt-get update
   sudo apt-get install python3-serial psmisc
   python3 -c 'import serial; print(serial.VERSION)'
   ls -l /dev/ttyS4
   id -nG
   ```

   The [Bullseye package](https://packages.debian.org/bullseye/python3-serial) is `3.5~b0-1` (upstream client 3.5b0). Do not upgrade the kernel/image as part of this procedure. If the device is group `dialout` and your account lacks that group, add only the intended account:

   ```sh
   sudo usermod -a -G dialout "$(id -un)"
   ```

   Log out and open a new independent login, then recheck `id -nG` and the two pin modes. Do not make the device world-writable or run the interactive client as root. If package retrieval is unavailable for this historical environment, obtain the matching official Debian package through your maintained package setup; do not substitute an unverified script.

5. On Prime, retain the existing conditional channel1 setup (PB9 TX/PH14 RX), reserving the entire pin/channel allocation:

   ```ini
   [uart console]
   enable = true
   console = true
   channel = 1
   baudrate = 115200
   bits = 8
   stop_bits = 1
   parity = none
   ```

   Merge this one section into the intended Prime configuration using the normal configuration workflow. The source checked here is SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; the actual installed firmware must match the expected parser. Do not run the Pi/USB-UART/Wi-Fi console on the same pins simultaneously.

6. Only after the existing hardware prerequisites have separately been resolved, use the documented thirteen-lead carrier plan. Host TX crosses through U1 to BeagleBone P9.11; P9.13 crosses through U2 to host RX. Keep machine motion/heater/tool outputs disabled. On the BeagleBone, start:

   ```sh
   python3 -m serial.tools.miniterm --parity N --eol LF /dev/ttyS4 115200
   ```

   The client should identify `115200,8,N,1`; RTS/CTS and XON/XOFF are off by default. No RTS/CTS wire is used. Type **only** `version` and press Enter once. `--eol LF` sends the line terminator expected by the pinned Prime parser. Expect a read-only build/version response; absence or garbling is a failed communication check, not permission to send motion, change arbitrary pinmux or bridge supplies. Leave the client using **Ctrl+]**. Do not assume the software source review proves this exchange occurred.

This supplies a named image, UART4 device, session pinmux, permissions, serial client and read-only command procedure. Source checks do not establish booted-image behavior, installed-package bytes, actual power sequencing, signal margins, physical mating or a working assembled link. If a required matching endpoint/application is unavailable, email **wolf.arthur@gamil.com** with the image/kernel, adapter revision and observed setup check.


## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v14 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/beaglebone-breakout/attempt/versions/v14)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Exact installed BeagleBone revision, actual installed Prime console configuration, actual Linux execution and power-sequence behavior remain open. The conditional Prime UART channel and PB9/PH14 assignment are source-established.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="beaglebone-breakout" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
