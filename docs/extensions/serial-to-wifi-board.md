---
layout: default
title: "Serial to WiFi Board"
permalink: /extensions/serial-to-wifi-board
---

# Serial to WiFi Board

This board is a UART-to-Wi-Fi bridge using ESP32-C3-MINI-1-N4X. It offers a network command path to the controller. A radio module alone does not establish a transparent, secure or reliable machine-control connection; the module firmware determines that.

## How it works

J1.4 RX_IN routes the controller’s TX to ESP32-C3 GPIO6; GPIO5 routes back through J1.5 TX_OUT toward the controller’s RX. These are configurable application GPIOs: module firmware must explicitly implement the serial bridge on them. The separate J3 programming connector uses UART0 on GPIO20 (RX) and GPIO21 (TX), so loading firmware that only uses the default programming UART does not establish a working host bridge. The module firmware also defines any AT-command interface and Wi-Fi provisioning.

A high signal on J1.3 turns on Q1 and pulls the module’s EN input low, holding it off/reset; SW1 also pulls EN low. Releasing EN lets the pull-up restart the module. GPIO4 returns application-defined status on J1.6; its meaning also requires module firmware. A TLV62569 creates the local ESP 3.3 V rail, separate from the host 3.3 V pass-through. Host 5 V through the JP4 bridge and programming-header 5 V feed the regulator through separate diodes; check backfeed behaviour and the host current budget.

## Power, signal direction and limits

The chain interrupts the locally used UART/reset/status contacts rather than forwarding two active transmitters onto one wire. J3 includes BOOT, programming RX/TX and EN; its +5V_HDR contact is not a 5 V UART logic permission. Keep the antenna area clear, allow for transmit-current peaks, and check update, provisioning, authentication and host-reset behaviour.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed on this board.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-overview" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-overview.png" title="ESP32-C3 serial / WiFi — overview" alt="ESP32-C3 serial / WiFi — overview for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-host-1-5" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART and control — host 1 5" alt="J1 · Host UART and control — host 1 5 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-host-6-10" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART and control — host 6 10" alt="J1 · Host UART and control — host 6 10 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-chain-1-5" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-chain-1-5-central-pills.png" title="J2 · Host chain output — chain 1 5" alt="J2 · Host chain output — chain 1 5 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-chain-6-10" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-chain-6-10-central-pills.png" title="J2 · Host chain output — chain 6 10" alt="J2 · Host chain output — chain 6 10 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-program-1-5" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-program-1-5-central-pills.png" title="J3 · 3.3V programming UART — program 1 5" alt="J3 · 3.3V programming UART — program 1 5 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-program-6-6" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-program-6-6-central-pills.png" title="J3 · 3.3V programming UART — program 6 6" alt="J3 · 3.3V programming UART — program 6 6 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-app" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-app.png" title="Application serial and status — app" alt="Application serial and status — app for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-reset" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-reset.png" title="Reset request and button — reset" alt="Reset request and button — reset for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-boot" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-boot.png" title="Programming / boot — boot" alt="Programming / boot — boot for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-power" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-power.png" title="Dual5V diode inputs — power" alt="Dual5V diode inputs — power for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-buck" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-buck.png" title="Local3.3V regulator — buck" alt="Local3.3V regulator — buck for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-esd" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-esd.png" title="ESD signal clamps — esd" alt="ESD signal clamps — esd for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-chain-links" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-chain-links.png" title="Chain spare-pin links — chain links" alt="Chain spare-pin links — chain links for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-led" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-led.png" title="Module indicator — led" alt="Module indicator — led for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-tests1" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-tests1-underside-caption.png" title="Power and serial tests — tests1" alt="Power and serial tests — tests1 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-tests5" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-tests5-underside-caption.png" title="Power and serial tests — tests5" alt="Power and serial tests — tests5 for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-board-v16-reader-compact-mounts" src="/images/extensions/serial-to-wifi-board/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for serial-to-wifi-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

### Connector contact map

The following is the PCB pad and net list; check physical continuity, mating orientation and current capacity on the board. Same-numbered duplicate lands are collapsed in this electrical table. `NC` is unconnected, not a spare.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
| --- | --- | --- |
| J1 — GADGETEER U IN | 1 | `/+3V3_HOST` |
| J1 — GADGETEER U IN | 2 | `/+5V_HOST` |
| J1 — GADGETEER U IN | 3 | `/RST_REQ_IN` |
| J1 — GADGETEER U IN | 4 | `/RX_IN` |
| J1 — GADGETEER U IN | 5 | `/TX_OUT` |
| J1 — GADGETEER U IN | 6 | `/STATUS_OUT` |
| J1 — GADGETEER U IN | 7 | `/P7` |
| J1 — GADGETEER U IN | 8 | `/P8` |
| J1 — GADGETEER U IN | 9 | `/P9` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J2 — GADGETEER U CHAIN | 1 | `/+3V3_HOST` |
| J2 — GADGETEER U CHAIN | 2 | `/+5V_HOST` |
| J2 — GADGETEER U CHAIN | 7 | `/CH_P7` |
| J2 — GADGETEER U CHAIN | 8 | `/CH_P8` |
| J2 — GADGETEER U CHAIN | 9 | `/CH_P9` |
| J2 — GADGETEER U CHAIN | 10 | `GND` |
| J2 | 3, 4, 5, 6 | NC |
| J3 — PROG UART 3V3 | 1 | `GND` |
| J3 — PROG UART 3V3 | 2 | `/BOOT` |
| J3 — PROG UART 3V3 | 3 | `/+5V_HDR` |
| J3 — PROG UART 3V3 | 4 | `/PROG_RX_IN` |
| J3 — PROG UART 3V3 | 5 | `/PROG_TX_OUT` |
| J3 — PROG UART 3V3 | 6 | `/PROG_EN` |

</div>

</details>

### Links, indicators and controls

The table lists the links and indicators. Check the fitted state of each link before cutting or bridging it. Indicator labels describe circuit signals.

| Item | Label | Contact nets |
| --- | --- | --- |
| JP4 | HOST 5V FEED | 1=/+5V_HOST; 2=/+5V_FEED |
| JP3 | CHAIN P9 | 1=/P9; 2=/CH_P9 |
| JP2 | CHAIN P8 | 1=/P8; 2=/CH_P8 |
| JP1 | CHAIN P7 | 1=/P7; 2=/CH_P7 |
| JP5 | CUT TO DISABLE LED1 | 1=LED_LED1_DISABLE; 2=/LED_A |
| SW1 | RESET | 1=/EN; 2=GND |
| LED1 | AMBER | 1=GND; 2=LED_LED1_DISABLE |

## Practical use with Smoothieboard V2 Prime

The intended use is an authenticated local-network serial console, which depends on the ESP firmware and its protocol.

### Serial cable — module firmware required

The cable below connects Prime GB/J33 contact 4 (PB9 TX) to board J1.4 and contact 5 (PH14 RX) to J1.5. Contact 2 supplies the board through its bridged JP4 and regulator; contact 10 is ground. Leave host reset/status contacts 3 and 6 and every chain contact disconnected in this four-lead example. Keep J3 unused and JP4 bridged. The numbered PCB-coordinate projections are not physical mating faces or a ribbon-stripe instruction.

Read the native-contact circuit with all three keys. Four individual leads land on the actual J33 and J1 artwork; dashed orange locators identify each crop on the complete board abstracts. The onboard ESP32-C3 is the serial/network peripheral. Its application UART uses GPIO6 RX and GPIO5 TX; the separate programming UART is unused. Keep JP4 bridged, J2/J3 unused and host 3.3 V disconnected. The module needs ESP bridge firmware and a matching network client.

{% include _includes/extension-instruction-diagram.html id="wifi-native-0" src="/images/extensions/serial-to-wifi-board/guides/native-contact/wifi-native-reader.png" title="Prime and ESP32-C3 carrier — four native-contact leads" alt="Prime and ESP32-C3 carrier — four native-contact leads" caption="Application UART circuit; host 5 V feeds the local regulator through bridged JP4. Check the supply allowance and physical mating, and load ESP bridge firmware." width=900 %}

{% include _includes/extension-instruction-diagram.html id="wifi-native-1" src="/images/extensions/serial-to-wifi-board/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="Prime GB/J33 — complete contact key" alt="Prime GB/J33 — complete contact key" caption="Application UART circuit; host 5 V feeds the local regulator through bridged JP4. Check the supply allowance and physical mating, and load ESP bridge firmware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wifi-native-2" src="/images/extensions/serial-to-wifi-board/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Carrier J1 — complete contact key" alt="Carrier J1 — complete contact key" caption="Application UART circuit; host 5 V feeds the local regulator through bridged JP4. Check the supply allowance and physical mating, and load ESP bridge firmware." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wifi-native-3" src="/images/extensions/serial-to-wifi-board/guides/native-contact/reader-contact-keys/JP4-numbered-pads.png" title="JP4 — host 5 V supply bridge" alt="JP4 — host 5 V supply bridge" caption="Application UART circuit; host 5 V feeds the local regulator through bridged JP4. Check the supply allowance and physical mating, and load ESP bridge firmware." width=420 %}

### Enlarged installation contact numbers

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-v16-installation-key-j1" src="/images/extensions/serial-to-wifi-board/guides/installation-contact-keys/J1-numbered-pads.png" title="J1 installation contact numbers" alt="Component-side pad projection for J1 with used contacts filled." caption="Read with the full circuit. Native relative pad positions; not cable mating faces. JP4 contacts 1 and 2 remain bridged." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-v16-installation-key-j33" src="/images/extensions/serial-to-wifi-board/guides/installation-contact-keys/J33-numbered-pads.png" title="J33 installation contact numbers" alt="Component-side pad projection for J33 with used contacts filled." caption="Read with the full circuit. Native relative pad positions; not cable mating faces. JP4 contacts 1 and 2 remain bridged." width=420 %}

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-v16-installation-key-jp4" src="/images/extensions/serial-to-wifi-board/guides/installation-contact-keys/JP4-numbered-pads.png" title="JP4 installation contact numbers" alt="Component-side pad projection for JP4 with used contacts filled." caption="Read with the full circuit. Native relative pad positions; not cable mating faces. JP4 contacts 1 and 2 remain bridged." width=420 %}

<details markdown="1">
<summary>Wider connector alternative</summary>

The individual-lead circuit above leaves the other host contacts disconnected.

{% include _includes/extension-instruction-diagram.html id="serial-to-wifi-v16-prime-installation-retained-alternative" src="/images/extensions/serial-to-wifi-board/guides/prime-installation-wiring.png" title="Prime UART cable to the ESP32-C3 board" alt="Prime GB J33 to serial Wi-Fi board J1 with ten numbered conductors and separate application and programming UART explanations" caption="Electrical hookup: module firmware must implement RX on GPIO6 and TX on GPIO5. Check the supply budget and physical cable orientation." width=2280 %}

</details>

The programming header is unused in this hookup. Confirm the fitted JP4, available 5 V current, numbered continuity and the module firmware before any powered test.

1. Identify the ESP firmware and its serial/network protocol before connecting it to a machine.
2. Allocate one Prime UART and optional reset/status contacts on the host. Keep chain UART outputs disconnected unless their source selection is known.
3. Use the programming header only with compatible 3.3 V serial signals and a suitable supply arrangement.
4. Establish safe disconnect/reconnect behavior and access control before enabling any motion command over Wi-Fi.

## Smoothieware configuration and use

The host-side UART example establishes only the Prime console settings. The module still needs firmware that uses GPIO6 for receive and GPIO5 for transmit and implements the selected network provisioning/client behavior. An image using the separate programming UART on GPIO20/GPIO21 is not sufficient.

For Smoothieboard V2 Prime, use this partial GB/J33 cable:

| Prime GB/J33 contact | J1 contact | Function |
| --- | --- | --- |
| 2 | 2 | Limited 5 V feed; check JP4 and its diode feed path |
| 4, PB9 TX | 4, RX_IN | Host transmit through the series resistors to module receive |
| 5, PH14 RX | 5, TX_OUT | Module transmit through the series resistors to host receive |
| 10 | 10 | Ground |

Leave all other contacts unused. Verify the fitted connector orientation and JP4 host-feed population; do not connect a second programming supply. This example assigns no reset or status behavior. Check supply transient and current capacity, logic thresholds and partial-power backfeed.

Channel 1 uses PB9/PH14. Reserve this console and both pins exclusively; this example is an alternative to other uses of that UART. Merge these settings into the existing section rather than creating a duplicate:

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

The module needs firmware that explicitly receives on GPIO6 and transmits on GPIO5 at 115200 baud, 8 data bits, no parity and one stop bit, without hardware flow control. Its separate programming UART on GPIO20/GPIO21 is not this bridge connection. The firmware must also implement the intended bridge protocol, provisioning and security policy.

With that firmware installed and its UART routing, network, provisioning and security set up, send the read-only shell command `version` followed by LF (`\n`) through the bridge; CRLF also works, while CR alone is ignored, and check the host response. A response shows host communication only, not Wi-Fi provisioning or remote machine control.

## Sources

- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/serial-to-wifi-board/attempt/versions/v16)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/design.md)
- [All extension boards](/extension-boards)

