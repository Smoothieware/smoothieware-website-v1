---
layout: default
title: "Intel Edison breakout"
permalink: /extensions/intel-edison-breakout
---

# Intel Edison breakout

This is a host carrier for the Intel Edison module, a platform Intel has discontinued. The circuit includes an AP63200 regulator, an SN74AXC4T774 translator and a 70-contact Edison connector.

## Interfaces, power and operating limits

J1 U input contacts 3 RESET_OUT_N, 4 UART_RX_IN, 5 UART_TX_OUT and 6 PWR_OFF carry translated control/serial functions. J2 is external1 positive, 2 ground and is labelled 5–24 V. JP1 chooses external or host source and must never be treated as permission to parallel supplies. J3 supplies the Edison VSYS contacts and exposes the 1.8 V UART pins46 TX and 61 RX. J4 is USB Micro-B. Most Edison contacts remain explicitly unconnected; do not infer a general GPIO breakout.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board.
- Cyan: Selectable supply — check the jumper or rail-selection instructions.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Default solder-link footprints do not show whether a link is closed on your board.

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-overview" src="/images/extensions/intel-edison-breakout/guides/reader-compact-overview.png" title="Intel Edison carrier — overview" alt="Intel Edison carrier — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j1-1-5" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j1-1-5-central-pills.png" title="J1 · Host UART — j1 1 5" alt="J1 · Host UART — j1 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j1-6-10" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j1-6-10-central-pills.png" title="J1 · Host UART — j1 6 10" alt="J1 · Host UART — j1 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j2-1-2" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j2-1-2-central-pills.png" title="J2 · External supply — j2 1 2" alt="J2 · External supply — j2 1 2" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-1-5" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-1-5-central-pills.png" title="J3 · Edison70 contacts — j3 1 5" alt="J3 · Edison70 contacts — j3 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-6-10" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-6-10-central-pills.png" title="J3 · Edison70 contacts — j3 6 10" alt="J3 · Edison70 contacts — j3 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-11-15" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-11-15-central-pills.png" title="J3 · Edison70 contacts — j3 11 15" alt="J3 · Edison70 contacts — j3 11 15" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-16-20" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-16-20-central-pills.png" title="J3 · Edison70 contacts — j3 16 20" alt="J3 · Edison70 contacts — j3 16 20" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-21-25" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-21-25-central-pills.png" title="J3 · Edison70 contacts — j3 21 25" alt="J3 · Edison70 contacts — j3 21 25" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-26-30" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-26-30-central-pills.png" title="J3 · Edison70 contacts — j3 26 30" alt="J3 · Edison70 contacts — j3 26 30" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-31-35" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-31-35-central-pills.png" title="J3 · Edison70 contacts — j3 31 35" alt="J3 · Edison70 contacts — j3 31 35" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-36-40" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-36-40-central-pills.png" title="J3 · Edison70 contacts — j3 36 40" alt="J3 · Edison70 contacts — j3 36 40" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-41-45" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-41-45-central-pills.png" title="J3 · Edison70 contacts — j3 41 45" alt="J3 · Edison70 contacts — j3 41 45" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-46-50" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-46-50-central-pills.png" title="J3 · Edison70 contacts — j3 46 50" alt="J3 · Edison70 contacts — j3 46 50" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-51-55" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-51-55-central-pills.png" title="J3 · Edison70 contacts — j3 51 55" alt="J3 · Edison70 contacts — j3 51 55" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-56-60" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-56-60-central-pills.png" title="J3 · Edison70 contacts — j3 56 60" alt="J3 · Edison70 contacts — j3 56 60" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-61-65" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-61-65-central-pills.png" title="J3 · Edison70 contacts — j3 61 65" alt="J3 · Edison70 contacts — j3 61 65" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j3-66-70" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j3-66-70-central-pills.png" title="J3 · Edison70 contacts — j3 66 70" alt="J3 · Edison70 contacts — j3 66 70" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j4-1-5" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j4-1-5-central-pills.png" title="J4 · USB micro-B — j4 1 5" alt="J4 · USB micro-B — j4 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-j4-6-6" src="/images/extensions/intel-edison-breakout/guides/reader-compact-j4-6-6-central-pills.png" title="J4 · USB micro-B — j4 6 6" alt="J4 · USB micro-B — j4 6 6" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-jp1-1-3" src="/images/extensions/intel-edison-breakout/guides/reader-compact-jp1-1-3-central-pills.png" title="JP1 · Supply selection — jp1 1 3" alt="JP1 · Supply selection — jp1 1 3" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-uart" src="/images/extensions/intel-edison-breakout/guides/reader-compact-uart.png" title="UART translation directions — uart" alt="UART translation directions — uart" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-reset" src="/images/extensions/intel-edison-breakout/guides/reader-compact-reset.png" title="Reset state translation — reset" alt="Reset state translation — reset" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-source" src="/images/extensions/intel-edison-breakout/guides/reader-compact-source.png" title="External versus host supply — source" alt="External versus host supply — source" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-buck" src="/images/extensions/intel-edison-breakout/guides/reader-compact-buck-underside-caption.png" title="Protected supply and buck — buck" alt="Protected supply and buck — buck" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-off" src="/images/extensions/intel-edison-breakout/guides/reader-compact-off.png" title="Power-off control — off" alt="Power-off control — off" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-usb" src="/images/extensions/intel-edison-breakout/guides/reader-compact-usb.png" title="USB data and VBUS path — usb" alt="USB data and VBUS path — usb" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-led" src="/images/extensions/intel-edison-breakout/guides/reader-compact-led.png" title="Supply indicator — led" alt="Supply indicator — led" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-faults" src="/images/extensions/intel-edison-breakout/guides/reader-compact-faults-underside-caption.png" title="Protection status LEDs — faults" alt="Protection status LEDs — faults" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-fault-clamp" src="/images/extensions/intel-edison-breakout/guides/reader-compact-fault-clamp-underside-caption.png" title="Fault LED reverse clamp — fault clamp" alt="Fault LED reverse clamp — fault clamp" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-aux" src="/images/extensions/intel-edison-breakout/guides/reader-compact-aux-underside-caption.png" title="Protection auxiliary paths — aux" alt="Protection auxiliary paths — aux" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-tests0" src="/images/extensions/intel-edison-breakout/guides/reader-compact-tests0-underside-caption.png" title="Supply / control test pads — tests0" alt="Supply / control test pads — tests0" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-tests5" src="/images/extensions/intel-edison-breakout/guides/reader-compact-tests5-underside-caption.png" title="Supply / control test pads — tests5" alt="Supply / control test pads — tests5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="intel-edison-breakout-v21-reader-compact-mounts" src="/images/extensions/intel-edison-breakout/guides/reader-compact-mounts.png" title="Mounts / module retention — mounts" alt="Mounts / module retention — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

Read the overview and all focused sheets together; use the connection section for installation.

The following is the pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or voltage and current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Check the selector bridge position on your board before altering it.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| intel-edison-breakout / J1 | GADGETEER U IN | Connector | 1: +3V3; 2: /+5V_HOST; 3: /RESET_OUT_N; 4: /UART_RX_IN; 5: /UART_TX_OUT; 6: /PWR_OFF; 7: unconnected-(J1-Pin_7-Pad7); 8: unconnected-(J1-Pin_8-Pad8); 9: unconnected-(J1-Pin_9-Pad9); 10: GND |
| intel-edison-breakout / J2 | EXT 5-24V DC + GND | Connector | 1: /EXT_IN; 2: GND |
| intel-edison-breakout / J3 | EDISON 70P DF40 | Connector | 1: GND; 2: /VSYS; 3: /USB_ID; 4: /VSYS; 5: GND; 6: /VSYS; 7: unconnected-(J3-MSIC_SLP_CLK3-Pad7); 8: unconnected-(J3-3.3V-Pad8); 9: GND; 10: unconnected-(J3-3.3V-Pad10); 11: GND; 12: /EDI_1V8; 13: GND; 14: /VSYS; 15: GND; 16: /USB_DP; 17: unconnected-(J3-PWRBTN#-Pad17); 18: /USB_DN; 19: GND; 20: /USB_VBUS; 21: unconnected-(J3-PSW-Pad21); 22: unconnected-(J3-GP134_UART_2_RX-Pad22); 23: unconnected-(J3-V_VBAT_BKUP-Pad23); 24: unconnected-(J3-GP44-Pad24); 25: unconnected-(J3-GP165-Pad25); 26: unconnected-(J3-GP45-Pad26); 27: unconnected-(J3-GP135_UART_2_TX-Pad27); 28: unconnected-(J3-GP46-Pad28); 29: unconnected-(J3-Unused-Pad29); 30: unconnected-(J3-GP47-Pad30); 31: unconnected-(J3-RCVR_MODE-Pad31); 32: unconnected-(J3-GP48-Pad32); 33: unconnected-(J3-GP13_PWM1-Pad33); 34: unconnected-(J3-GP49-Pad34); 35: unconnected-(J3-GP12_PWM0-Pad35); 36: /EDI_RESET_OUT_N; 37: unconnected-(J3-GP182_PWM2-Pad37); 38: unconnected-(J3-Unused-Pad38); 39: unconnected-(J3-GP183_PWM3-Pad39); 40: unconnected-(J3-Unused-Pad40); 41: unconnected-(J3-GP19_I2C_1_SCL-Pad41); 42: unconnected-(J3-GP15-Pad42); 43: unconnected-(J3-GP20_I2C_1_SDA-Pad43); 44: unconnected-(J3-GP84-Pad44); 45: unconnected-(J3-GP27_I2C_6_SCL-Pad45); 46: /EDI_UART1_TX; 47: unconnected-(J3-GP28_I2C_6_SDA-Pad47); 48: unconnected-(J3-GP14-Pad48); 49: unconnected-(J3-Unused-Pad49); 50: unconnected-(J3-GP42-Pad50); 51: unconnected-(J3-GP111-Pad51); 52: unconnected-(J3-GP40-Pad52); 53: unconnected-(J3-GP110-Pad53); 54: unconnected-(J3-GP41-Pad54); 55: unconnected-(J3-GP109-Pad55); 56: unconnected-(J3-GP43-Pad56); 57: unconnected-(J3-GP115-Pad57); 58: unconnected-(J3-GP78-Pad58); 59: unconnected-(J3-GP114-Pad59); 60: unconnected-(J3-GP77-Pad60); 61: /EDI_UART1_RX; 62: unconnected-(J3-GP79-Pad62); 63: unconnected-(J3-GP129_UART_1_RTS-Pad63); 64: unconnected-(J3-GP82-Pad64); 65: unconnected-(J3-GP128_UART_1_CTS-Pad65); 66: unconnected-(J3-GP80-Pad66); 67: unconnected-(J3-OSC_CLK_OUT_0-Pad67); 68: unconnected-(J3-GP83-Pad68); 69: unconnected-(J3-FW_RCVR-Pad69); 70: unconnected-(J3-GP81-Pad70) |
| intel-edison-breakout / J4 | USB MICRO-B | Connector | 1: /USB_VBUS; 2: /USB_DN; 3: /USB_DP; 4: /USB_ID; 5: GND; 6: GND |
| intel-edison-breakout / D3 | LED GREEN | Indicator | 1: GND; 2: LED_D3_DISABLE |
| intel-edison-breakout / DF2 | LTST-C170KRKT | Indicator | 1: /P_edison_FLT; 2: /P_edison_FLT_A |
| intel-edison-breakout / DF5 | LTST-C170KRKT | Indicator | 1: /P_edison_OV_K; 2: /P_edison_OV_A |
| intel-edison-breakout / DF8 | LTST-C170KRKT | Indicator | 1: /P_edison_C1; 2: /P_edison_REV_A |
| intel-edison-breakout / TP1 | TP GND | Observation only | 1: GND |
| intel-edison-breakout / TP10 | TP BUCK_EN | Observation only | 1: /BUCK_EN |
| intel-edison-breakout / TP2 | TP VIN | Observation only | 1: /VIN |
| intel-edison-breakout / TP3 | TP VSYS | Observation only | 1: /VSYS |
| intel-edison-breakout / TP4 | TP EDI_1V8 | Observation only | 1: /EDI_1V8 |
| intel-edison-breakout / TP5 | TP GND | Observation only | 1: GND |
| intel-edison-breakout / TP6 | TP +3V3 | Observation only | 1: +3V3 |
| intel-edison-breakout / TP7 | TP +5V_HOST | Observation only | 1: /+5V_HOST |
| intel-edison-breakout / TP8 | TP RESET_OUT_N | Observation only | 1: /RESET_OUT_N |
| intel-edison-breakout / TP9 | TP GND | Observation only | 1: GND |
| intel-edison-breakout / JP1 | SRC EXT / HOST | Service link/selector | 1: /EXT_D; 2: /VIN_RAW; 3: /+5V_HOST |
| intel-edison-breakout / JP2 | CUT TO DISABLE D3 | Service link/selector | 1: LED_D3_DISABLE; 2: /LED_A |
| intel-edison-breakout / SJF1 | CUT FAULT LED | Service link/selector | 1: /P_edison_FLT_R; 2: /P_edison_FLT_A |
| intel-edison-breakout / SJF2 | CUT OV LED | Service link/selector | 1: /P_edison_OV_R; 2: /P_edison_OV_A |
| intel-edison-breakout / SJF3 | CUT REVERSE LED | Service link/selector | 1: /P_edison_REV_R; 2: /P_edison_REV_A |

</div>

</details>

## Practical connection to Smoothieboard V2 Prime

Do not power the carrier until you have checked the power circuit, power sequencing and cable orientation.

Identify the exact Edison module and its power and sequencing requirements before powering the carrier. Trace J3 orientation and every VSYS/ground contact, leave the host disconnected and use a limited bench supply only after the power circuit has been checked. The Prime GB/J33 UART1 signal allocation is documented below; it does not cover power ordering, translator enables or reset/shutdown integration. The carrier's U socket does not match the Prime Raspberry-Pi-Zero host interface.

The GF/J37 contact map applies only to **V2 P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground, and contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded; verify numbered continuity and cable orientation with power removed. Reserve pins in the complete machine configuration. No rail-current allowance, other Prime board, timer route or bus mux is implied by this map.

## Smoothieware behaviour and commissioning

### Host setup still required

The carrier’s serial path is Edison UART1: module contact46 is TX and61 is RX; the UART2 contacts22/27 are not connected to that path. The Intel hardware guide establishes these signal identities, not a Linux serial device or working carrier image. Choose UART1 setup instructions for the actual Edison software image and verify translator direction, enable/reset sequencing and power domains before using a Prime serial console. USB connector presence does not establish a command-host protocol or replace that setup.

The carrier translator requires no high-level driver by itself, but a working Edison link needs a defined serial/USB protocol, boot/reset sequence and host software. SmoothieV2 does not include these.

### Prime console for the Edison carrier

The carrier uses Edison UART1, not UART2. Prime GB/J33.4 PB9 TX reaches board J1.4 `/UART_RX_IN`, U2 B2/pin13 → A2/pin4, then Edison J3.61 RX. Edison J3.46 TX reaches U2 A1/pin3 → B1/pin14, J1.5 `/UART_TX_OUT`, then Prime GB/J33.5 PH14 RX. J1.10 is signal ground. The SN74AXC4T774 translator has a 1.8 V module domain and 3.3 V host domain; this topology does not itself set its power ordering, reset or enables. Leave J1.3 reset observation and J1.6 PWR_OFF unconnected in the three-signal console allocation unless separately assigned; UART firmware does not implement an Edison shutdown service.

Once supplies, module, cable and translator operation are checked, use:

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

Enable UART1 with the installed Edison image's supported setup; verify its pin ownership and serial client without assuming a device pathname. Set 115200/8N1 with no hardware flow control and send `version` followed by LF (`\n`); CRLF works; CR alone does not dispatch. A response shows communication only; it says nothing about power, reset or shutdown behaviour.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Sources

- [Intel Edison carrier PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/attempt/versions/v21/intel-edison-breakout.kicad_pcb)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/specs.md)
- [Architecture](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary views</summary>

{% include _includes/extension-board-visuals.html slug="intel-edison-breakout" %}

</details>
