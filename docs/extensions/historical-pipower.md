---
layout: default
title: "PiPower \u2014 Pi power, UART and button shield"
permalink: /extensions/historical-pipower
---

# PiPower

PiPower is a small Raspberry Pi header shield that distributes 5 V, exposes serial TX/RX and provides a button interface for computer startup/shutdown behavior. It is companion-computer hardware rather than a GPIO expansion protocol for Smoothieware.

## About this board

This guide follows [PiPower/PiPower.kicad_pcb](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb). It is a separate hardware design, not a Prime adapter, and it carries no safety certification.

## Operation, power and connectors

The PCB silk says PiPower V0.2. J5 PowerIn and J6 5v Out both use 1 +5V, 2 ground; no regulator is identified on this PCB, so do not feed it a machine’s 12/24 V supply. J4 is a ten-contact section of the Pi header, not a Gadgeteer host connector: its contacts 2/4 are 5 V, 6/9 ground, 8 Tx and 10 Rx. J7 is ground/Tx/Rx on 1/2/3. SW1 and J8 short the button node to ground. JP1 bridges that node to ON/OFF; its state must match the intended Pi software. Single-pad J1/J2/J3 expose ON/OFF and two otherwise automatic nets. The same repository also retains Pi_Power/RaspiSmoopiShield v11.fsch, an older Fusion schematic without a matching board file.

The button is a logic input, not a supply disconnect. R1 (10 kΩ) pulls its node toward 5 V, C2 (1 µF) connects that node to ground, and SW1 or the remote switch at J8 grounds it. Bridging JP1 connects this node to J4.5 and J1.1 (ON/OFF). A closed JP1 can therefore expose the computer input to the 5 V pull-up; verify the exact computer input rating and required interface before connecting it. Software shutdown does not remove the common 5 V rail shared by J5.1, J6.1 and J4.2/J4.4.

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and **do not satisfy the missing populated board-reference diagram**. Use the contact inventory and all companion sheets together. Check cable orientation and ratings before wiring.

Source: [selected original circuit](https://github.com/Ccecil/PiPower/blob/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-power" src="/images/extensions/historical-pipower/guides/factual-circuits/power-font-matched.png" title="Common 5V supply" alt="Common 5V supply — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-ground" src="/images/extensions/historical-pipower/guides/factual-circuits/ground-font-matched.png" title="Common ground nodes" alt="Common ground nodes — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-signals" src="/images/extensions/historical-pipower/guides/factual-circuits/signals-font-matched.png" title="Direct signal terminals" alt="Direct signal terminals — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-on-off-link" src="/images/extensions/historical-pipower/guides/factual-circuits/on-off-link-font-matched.png" title="On/off jumper path" alt="On/off jumper path — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-button" src="/images/extensions/historical-pipower/guides/factual-circuits/button-font-matched.png" title="Parallel button contacts" alt="Parallel button contacts — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-rc" src="/images/extensions/historical-pipower/guides/factual-circuits/rc-font-matched.png" title="Source RC button node" alt="Source RC button node — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pipower-factual-unconnected" src="/images/extensions/historical-pipower/guides/factual-circuits/unconnected-font-matched.png" title="J4.1 has no native peer" alt="J4.1 has no native peer — logical connections, not physical board layout" caption="Logical connections, not the physical layout." width=420 %}

## Practical use with Smoothieboard V2 Prime

A useful setup is a separately verified 5 V Pi supply plus a Linux serial G-code sender. Connect power only after proving Pi model/power budget and supply backfeed behavior; install and verify the computer’s button/shutdown software before relying on SW1. UART output/input direction must be traced from the Pi to a chosen Prime UART pair. J4 must never be plugged into Prime’s ten-contact Gadgeteer connector by shape alone.

## Firmware and setup

### Host setup still required

The conditional UART example only exchanges console text with Prime; it does not install a Pi shutdown service or make a Smoothieware command power down Linux. Match the actual Pi model and Linux image, establish UART ownership and client settings, and separately document the PiPower power-button/shutdown behavior using matching source and service configuration. Keep the independent power domains and three-wire UART limitation from the existing example.

Prime can provide the UART console endpoint using channel 1 and the settings below: PB9 is TX and PH14 is RX. PiPower J7 exposes Pi-side UART nets directly; it is not a Gadgeteer socket and performs no UART level conversion. With the Pi and Prime independently powered and the actual Pi header/model and 3.3V serial levels verified, connect only the three signal/ground wires below. The Pi still needs its model- and OS-specific UART enabled, the serial login service removed from that port, and a serial client configured for 115200 baud, 8 data bits, no parity and one stop bit,/no hardware flow control. Shutdown remains a Pi OS function, not a Smoothieware command.

**Check the Pi model, header orientation and 3.3 V UART levels before connecting these wires.** The Pi side also needs its own model- and OS-specific setup.

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

Only after all electrical and endpoint prerequisites above pass, configure the serial client for 115200 baud, 8 data bits, no parity, one stop bit and no hardware flow control. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored) and check the controller response. This read-only shell command requests no motion.

These settings are grounded in [SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src). The source-level fragment is not a complete boot configuration and does not identify the firmware installed on your controller.

## Questions that remain before use

Pi model/header orientation, supply protection/current budget and backfeed; Linux button behavior and JP1 population; UART direction and Prime interface; older Fusion variant identity and missing board; no repository license recorded.

## Original files and attribution

Legacy Pi Zero carriers have regulator and wider GPIO-carrier layouts, while this 5 V-only small Pi header shield has a different circuit. Similar computer-host purpose does not establish duplication.

- [PiPower/PiPower.kicad_pcb](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb) — original source.
- [PiPower/PiPower.kicad_sch](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_sch) — original source.
- [Pi_Power/RaspiSmoopiShield v11.fsch](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/Pi_Power/RaspiSmoopiShield%20v11.fsch) — original source.

No repository license was recorded. Public availability is not public-domain permission; obtain an applicable license before redistributing source-derived assets.

[All extension boards](/extension-boards)
