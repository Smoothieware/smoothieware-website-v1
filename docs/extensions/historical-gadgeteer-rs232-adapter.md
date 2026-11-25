---
layout: default
title: "Gadgeteer RS-232 level adapter"
permalink: /extensions/historical-gadgeteer-rs232-adapter
---

# Gadgeteer RS-232 level adapter

A MAX3232 converts host UART/control signals into bipolar RS-232 electrical levels. It is for an actual RS-232 peripheral, not a TTL serial cable, RS-485 bus or CAN interface. The board includes TX/RX and two handshake signals, but interpretation depends on the endpoint and cable role.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/GDGT_RS232/tree/00cfe55d207b54cdbec19a07337f7cd58e95e8ef) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J2/J3 host map is 1 3.3 V, 2 5 V, 3 CTS, 4 Tx, 5 Rx, 6 RTS, 7–9 spare, 10 ground. DE9 J1 uses 2 TxD_, 3 RxD_, 5 ground, 7 CTS_, 8 RTS_; 1/4/6/9 are unconnected. Do not infer standard DTE/DCE roles solely from names or connector gender. The matching schematic identifies U2.11/14 as T1IN/T1OUT: host Tx reaches DE9 contact 2. U2.13/12 are R1IN/R1OUT: DE9 contact 3 reaches host Rx. The second transmitter takes host RTS through U2.10/7 to DE9 contact 8; the second receiver takes DE9 contact 7 through U2.8/9 to host CTS. A straight or null-modem cable still depends on the named peripheral’s connector role and pinout.

U2 supply pin 16 is tied to 5 V in this source, while pin 15 is ground. The Rx and CTS logic outputs therefore come from a 5 V-powered transceiver; this source does not establish their compatibility with Prime inputs. Do not substitute the direct TTL wiring recipe for a different serial adapter. Prove the fitted-device output levels and host tolerance, or provide a verified level-conversion plan before connecting.

## Board-reference diagram

The annotated reference below uses this board’s source-matched abstract artwork at revision **00cfe55**. It shows the populated board, the three connectors and all sixteen transceiver contacts. Start with the overview, then open the numbered connector and transceiver sheets. These are **PCB-side pad locations**, not a view into a mating plug; do not mirror them into a cable map.

The host UART side and bipolar RS-232 side are different electrical interfaces. U2 is supplied from the source 5 V rail; host-input tolerance and the exact fitted device remain unqualified. Keep the board disconnected while using these drawings to identify contacts.

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-overview" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/overview.png" title="Board overview and electrical domains" alt="Board overview and electrical domains — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

<details markdown="1">
<summary>Connector and transceiver contact reference</summary>

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-J1-contacts" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/J1-contacts.png" title="J1 — DE-9 contacts and unconnected positions" alt="J1 — DE-9 contacts and unconnected positions — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-J2-contacts" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/J2-contacts.png" title="J2 — two-row host header contacts" alt="J2 — two-row host header contacts — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-J3-contacts" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/J3-contacts.png" title="J3 — single-row host header contacts" alt="J3 — single-row host header contacts — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-U2-pins-1" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/U2-pins-1.png" title="U2 contacts 1–4 — charge pump" alt="U2 contacts 1–4 — charge pump — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-U2-pins-2" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/U2-pins-2.png" title="U2 contacts 5–8 — charge pump and RS-232" alt="U2 contacts 5–8 — charge pump and RS-232 — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-U2-pins-3" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/U2-pins-3.png" title="U2 contacts 9–12 — host logic" alt="U2 contacts 9–12 — host logic — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-rs232-reference-U2-pins-4" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/annotated-reference/U2-pins-4.png" title="U2 contacts 13–16 — RS-232, ground and supply" alt="U2 contacts 13–16 — RS-232, ground and supply — historical source-matched board reference" caption="Selected source 00cfe55; PCB-side contact identity only. Connector mating, host voltage tolerance and powered Prime use remain unqualified." width=420 %}

</details>

<details markdown="1">
<summary>Supplementary logical circuits</summary>

These independently drawn circuit sheets explain the selected source connectivity. They complement the populated board reference above and do not show physical cable construction. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/RS232_GDGT.kicad_pcb), revision `00cfe55d207b54cdbec19a07337f7cd58e95e8ef`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-tx" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/tx-font-matched.png" title="Data toward DE-9" alt="Data toward DE-9 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-rx" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/rx-font-matched.png" title="Data from DE-9" alt="Data from DE-9 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-rts" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/rts-font-matched.png" title="Control toward DE-9" alt="Control toward DE-9 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-cts" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/cts-font-matched.png" title="Control from DE-9" alt="Control from DE-9 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-host-1" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/host-1-font-matched.png" title="Logic header paths" alt="Logic header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-host-5" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/host-5-font-matched.png" title="Logic header paths" alt="Logic header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-host-9" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/host-9-font-matched.png" title="Logic header paths" alt="Logic header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-supply" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/supply-font-matched.png" title="Transceiver supply" alt="Transceiver supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-decoupling" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/decoupling-font-matched.png" title="Supply capacitor" alt="Supply capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-c1" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/c1-font-matched.png" title="Pump capacitor C1" alt="Pump capacitor C1 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-c4" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/c4-font-matched.png" title="Pump capacitor C4" alt="Pump capacitor C4 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-c2" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/c2-font-matched.png" title="Positive pump rail" alt="Positive pump rail — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-c3" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/c3-font-matched.png" title="Negative pump rail" alt="Negative pump rail — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-rs232-adapter-factual-boundaries" src="/images/extensions/historical-gadgeteer-rs232-adapter/guides/factual-circuits/boundaries-font-matched.png" title="Unconnected contacts and interface limits" alt="Unconnected contacts and interface limits — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

</details>

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| RS232_GDGT.kicad_pcb | J1 | DE9_Receptacle | 0: No assigned net; 1: unconnected-(J1-Pad1); 2: TxD_; 3: RxD_; 4: unconnected-(J1-Pad4); 5: GND; 6: unconnected-(J1-Pad6); 7: CTS_; 8: RTS_; 9: unconnected-(J1-Pad9) |
| RS232_GDGT.kicad_pcb | J2 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: CTS; 4: Tx; 5: Rx; 6: RTS; 7: P7; 8: P8; 9: P9; 10: GND |
| RS232_GDGT.kicad_pcb | J3 | Conn_01x10_Pin | 1: +3V3; 2: +5V; 3: CTS; 4: Tx; 5: Rx; 6: RTS; 7: P7; 8: P8; 9: P9; 10: GND |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a serial-instrument experiment, identify its electrical standard, pinout, baud/framing and handshake requirements first. Connect no signal until host-side logic levels, charge-pump supply and DE9 transmit/receive directions are verified. Select a Prime UART-capable socket with actual TX/RX and compatible handshake pins; GF/J37 GPIO alone is not a UART route. Do not connect the DE9 bipolar signals to an MCU or USB-TTL adapter.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### Interface and application limits

The pinned UART driver explicitly disables hardware flow control. The existing three-wire console example must therefore leave RTS/CTS unused and use an endpoint configured without that handshake. The MAX3232’s 5 V-powered logic receive output still needs a verified Prime input interface. Neither baud-rate settings nor a read-only version command fixes that electrical boundary or supplies an arbitrary instrument protocol.

The pinned V2 firmware does provide a UART console on channel 1: Prime PB9 transmits and PH14 receives at the settings below. This supports a controller-console experiment, not an arbitrary instrument protocol. The selected MAX3232 is powered from 5 V, so its Rx and CTS logic outputs are not yet qualified for Prime inputs. Do not connect the receive path until that electrical interface is verified or a specifically verified level-conversion circuit is supplied. Hardware RTS/CTS is not enabled by this UART driver. Leave handshake wires disconnected and configure the actual serial endpoint without hardware flow control. For required instrument protocol or handshake support, email **wolf.arthur@gamil.com**.

**Do not attach the Prime receive path while its 5 V logic compatibility is unresolved.** The table identifies source relationships, not an accepted complete cable. This is not a usable bidirectional console until that boundary and the actual endpoint/cable are qualified.

| Endpoint | Corresponding endpoint | Meaning / condition |
| --- | --- | --- |
| Prime GB/J33.2 limited 5 V | board J2.2 +5V | Only after supply/current budget qualification; no second supply |
| Prime J33.4 PB9 TX via 100 R | board J2.4 Tx | Host transmit into U2.11/T1IN then U2.14/T1OUT to J1.2 |
| Prime J33.5 PH14 RX via 100 R | board J2.5 Rx | U2.12/R1OUT from U2.13/R1IN and J1.3; withheld pending 5V logic-output qualification |
| Prime J33.10 GND | board J2.10 GND | Common logic return |
| board DE9 J1.2 TxD_ | verified endpoint contact2 RX | Only for an actual RS232 endpoint documented as RX2/TX3/GND5 |
| board DE9 J1.3 RxD_ | verified endpoint contact3 TX | Verify endpoint role, do not infer from gender |
| board DE9 J1.5 GND | verified endpoint contact5 GND | Signal ground |

J2.1/3/6–9, all J3 contacts and DE9 J1.1/4/6/7/8/9 remain unconnected in this three-wire example. Unconnected shell pads are not invented signal-ground connections.

### Conditional Prime console settings

This standalone example reserves channel 1 and PB9/PH14 exclusively. Check the complete installed configuration and other UART consumers first. Merge the settings into the existing section; do not combine competing channel-1 examples. The HAL fixes the channel’s pins; arbitrary TX/RX pin settings are not supplied.

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

Only after all electrical and endpoint prerequisites above pass, configure the serial client for 115200 baud, 8 data bits, no parity, one stop bit and no hardware flow control. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored) and check the controller response. This read-only shell command requests no motion. A response checks the host communication path only; it does not qualify the instrument protocol, power behavior or shutdown workflow.

These settings are grounded in [SmoothieV2 revision `2a21c0108b1d095ecd8b2b9358e94055f053c003`](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src). The source-level fragment is not a complete boot configuration and does not identify the firmware installed on your controller. Hardware/runtime and the complete accessory procedure remain unverified.

## Remaining requirements

MAX3232 exact supply/population, DTE/DCE direction, handshaking, host UART mux and endpoint protocol/configuration remain unresolved. The canonical annotated reference is provided above; its desktop/narrow viewer verification remains pending. Complete Prime wiring and public source/link availability remain open.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/GDGT_RS232)
- [Pinned original source](https://github.com/Ccecil/GDGT_RS232/tree/00cfe55d207b54cdbec19a07337f7cd58e95e8ef)
- [Original README.md](https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/README.md)
- [Original RS232_GDGT.kicad_pcb](https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/RS232_GDGT.kicad_pcb)
- [Original RS232_GDGT.kicad_sch](https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/RS232_GDGT.kicad_sch)

The retained inventory did not identify a project license file. Preserve attribution and resolve redistribution rights before importing original artwork/layouts; absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
