---
layout: default
title: "PiPower \u2014 Pi power, UART and button shield"
permalink: /extensions/historical-pipower
---

# PiPower

PiPower is a small Raspberry Pi header shield that distributes 5 V, exposes serial TX/RX and provides a button interface for computer startup/shutdown behavior. It is companion-computer hardware rather than a GPIO expansion protocol for Smoothieware.

## Revision and use boundary

This guide follows [PiPower/PiPower.kicad_pcb](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb) at the exact linked source revision. It is a separate related hardware design, not a verified Prime-compatible adapter. The source description uses failsafe terminology where applicable; no safety certification, single-fault coverage or physical acceptance has been established.

## Operation, power and connectors

The PCB silk says PiPower V0.2. J5 PowerIn and J6 5v Out both use 1 +5V, 2 ground; no regulator is identified on this PCB, so do not feed it a machine’s 12/24 V supply. J4 is a ten-contact section of the Pi header, not a Gadgeteer host connector: its contacts 2/4 are 5 V, 6/9 ground, 8 Tx and 10 Rx. J7 is ground/Tx/Rx on 1/2/3. SW1 and J8 short the button node to ground. JP1 bridges that node to ON/OFF; its state must match the intended Pi software. Single-pad J1/J2/J3 expose ON/OFF and two otherwise automatic nets. The same repository also retains Pi_Power/RaspiSmoopiShield v11.fsch, an older Fusion schematic source without a matching board file in the recorded tree. It is not proven pin-compatible with V0.2.

The button is a logic input, not a supply disconnect. R1 (10 kΩ) pulls its node toward 5 V, C2 (1 µF) connects that node to ground, and SW1 or the remote switch at J8 grounds it. Bridging JP1 connects this node to J4.5 and J1.1 (ON/OFF). A closed JP1 can therefore expose the computer input to the 5 V pull-up; verify the exact computer input rating and required interface before connecting it. Software shutdown does not remove the common 5 V rail shared by J5.1, J6.1 and J4.2/J4.4.

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and **do not satisfy the missing populated board-reference diagram**. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/PiPower/blob/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb), revision `2747efeb41382769bcc09857d3e5fbcc05d891d4`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-power" src="/images/extensions/historical-pipower/guides/factual-circuits/power-font-matched.svg" title="Common 5V supply" alt="Common 5V supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-ground" src="/images/extensions/historical-pipower/guides/factual-circuits/ground-font-matched.svg" title="Common ground nodes" alt="Common ground nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-signals" src="/images/extensions/historical-pipower/guides/factual-circuits/signals-font-matched.svg" title="Direct signal terminals" alt="Direct signal terminals — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-on-off-link" src="/images/extensions/historical-pipower/guides/factual-circuits/on-off-link-font-matched.svg" title="On/off jumper path" alt="On/off jumper path — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-button" src="/images/extensions/historical-pipower/guides/factual-circuits/button-font-matched.svg" title="Parallel button contacts" alt="Parallel button contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-rc" src="/images/extensions/historical-pipower/guides/factual-circuits/rc-font-matched.svg" title="Source RC button node" alt="Source RC button node — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-unconnected" src="/images/extensions/historical-pipower/guides/factual-circuits/unconnected-font-matched.svg" title="J4.1 has no native peer" alt="J4.1 has no native peer — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Annotated board reference — pending

No matching abstract was located in smoothie-diagrams. A faithful revision-specific abstract and annotated diagram are required; a modern replacement or bare PCB render does not satisfy this diagram.

The following table comes directly from the selected PCB footprint pad nets. It is an inventory of named pads, not proof of copper continuity. Source line numbers refer to the exact linked PCB bytes.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| PCB reference | Value / control | Source line | Contact → net |
|---|---|---|---|
| J3 | Conn_01x01_Male | 88 | 1 → Net-(J3-Pad1) |
| J1 | Conn_01x01_Male | 175 | 1 → ON\\OFF |
| J4 | Conn_02x05_Odd_Even | 220 | 1 → unconnected-(J4-Pad1); 2 → +5V; 3 → Net-(J2-Pad1); 4 → +5V; 5 → ON\\OFF; 6 → GND; 7 → Net-(J3-Pad1); 8 → Tx; 9 → GND; 10 → Rx |
| J6 | 5v Out | 350 | 1 → +5V; 2 → GND |
| J7 | Conn_01x03_Male | 411 | 1 → GND; 2 → Tx; 3 → Rx |
| SW1 | SW_Push | 477 | 1 → GND; 2 → Net-(C2-Pad1) |
| J2 | Conn_01x01_Male | 589 | 1 → Net-(J2-Pad1) |
| J8 | On/Off | 634 | 1 → Net-(C2-Pad1); 2 → GND |
| J5 | PowerIn | 695 | 1 → +5V; 2 → GND |
| JP1 | Jumper_2_Bridged | 1879 | 1 → ON\\OFF; 2 → Net-(C2-Pad1) |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

A useful setup is a separately verified 5 V Pi supply plus a Linux serial G-code sender. Connect power only after proving Pi model/power budget and supply backfeed behavior; install and verify the computer’s button/shutdown software before relying on SW1. UART output/input direction must be traced from the Pi to a chosen Prime UART pair. J4 must never be plugged into Prime’s ten-contact Gadgeteer connector by shape alone.

### Complete practical wiring diagram — pending

No complete accepted cable or power-path diagram is available. The unresolved contact roles, voltage limits and fault states must be settled before depicting a usable Prime circuit. No arbitrary Prime GPIO assignment is supplied to conceal those gaps.

## Firmware and setup

### Host setup still required

The conditional UART example only exchanges console text with Prime; it does not install a Pi shutdown service or make a Smoothieware command power down Linux. Match the actual Pi model and Linux image, establish UART ownership and client settings, and separately document the PiPower power-button/shutdown behavior using matching source and service configuration. Keep the independent power domains and three-wire UART limitation from the existing example.


Prime can provide the UART console endpoint using channel 1 and the settings below: PB9 is TX and PH14 is RX. PiPower J7 exposes Pi-side UART nets directly; it is not a Gadgeteer socket and performs no UART level conversion. With the Pi and Prime independently powered and the actual Pi header/model and 3.3V serial levels verified, connect only the three signal/ground wires below. The Pi still needs its model- and OS-specific UART enabled, the serial login service removed from that port, and a serial client configured for 115200 baud, 8 data bits, no parity and one stop bit,/no hardware flow control. Those Linux steps are not established by the selected board source. Shutdown remains a Pi OS function, not a Smoothieware command. Email **wolf.arthur@gamil.com** if required Pi-side setup or additional integration support is missing.

**Qualify the Pi model, header orientation and 3.3 V UART levels before connecting these wires.** This source-level host mapping does not supply the missing model/OS-specific Pi setup or verify shutdown operation.

| Endpoint | Corresponding endpoint | Meaning / condition |
| --- | --- | --- |
| PiPower J7.2 Tx, same net as J4.8 | Prime GB/J33.5 PH14 RX via100R | Pi transmit to Prime receive |
| PiPower J7.3 Rx, same net as J4.10 | Prime GB/J33.4 PB9 TX via100R | Prime transmit to Pi receive |
| PiPower J7.1 GND | Prime GB/J33.10 GND | Common signal return |

No 5 V or 3.3 V power wire between independently powered Pi and Prime. Do not plug PiPower J4 into a Prime Gadgeteer header; J4 is a Pi-header segment. PiPower power/shutdown contacts require their separate documented setup and are not controlled by this example.

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

## Questions that remain before use

Pi model/header orientation, supply protection/current budget and backfeed; Linux button behavior and JP1 population; UART direction and Prime interface; older Fusion variant identity and missing board; no repository license recorded. Both required instructional diagrams, schematic-to-layout reconciliation, electrical testing and normal/narrow-width page review remain pending.

## Original files and attribution

Legacy Pi Zero carriers have regulator and wider GPIO-carrier layouts, while this 5 V-only small Pi header shield has a different circuit. Similar computer-host purpose does not establish duplication.

- [PiPower/PiPower.kicad_pcb](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb) — original source at the selected commit.
- [PiPower/PiPower.kicad_sch](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_sch) — original source at the selected commit.
- [Pi_Power/RaspiSmoopiShield v11.fsch](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/Pi_Power/RaspiSmoopiShield%20v11.fsch) — original source at the selected commit.

No repository license was recorded. Public availability is not public-domain permission; obtain an applicable license before redistributing source-derived assets.

Production status and current availability are not established by retained author links.

[All extension boards](/extension-boards)
