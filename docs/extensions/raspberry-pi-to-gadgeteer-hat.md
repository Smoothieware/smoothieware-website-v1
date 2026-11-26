---
layout: default
title: "Raspberry Pi 40-pin to Gadgeteer HAT"
permalink: /extensions/raspberry-pi-to-gadgeteer-hat
---

# Raspberry Pi 40-pin to Gadgeteer HAT

This adapter makes a Raspberry Pi the host for Gadgeteer extension boards. It routes the Pi's 40-pin header to five keyed 10-contact sockets: general GPIO, SPI, UART, I²C and PWM. A Qwiic connector shares the I²C bus. Typical applications are a Pi-controlled indicator or buzzer, a 3.3 V I²C sensor, or a Pi application communicating with a compatible SPI or UART module. Compatibility must be established from the module's actual contacts and electrical requirements, not its socket letter alone.

**Do not energize this board without checking it first:** verify continuity, rails, polarity, current and boot state on your assembly before powered operation.

**Smoothieboard V2 Prime wiring and Smoothieware configuration are inapplicable:** the Pi is the host. This is not a Prime peripheral. Connecting two host sockets can join supplies and opposing outputs. The adapter contains no processor, GPIO expander, firmware or automatic module discovery. Its passive signal paths need a Pi application and, for a protocol device, that device's driver. No Smoothieware driver is supplied.

## Complete connection example: Pi host and Buzzer module

{% include _includes/extension-instruction-diagram.html id="pi-hat-v03-wiring" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/full-wiring.png" title="Pi host, HAT and Buzzer — connections" alt="Raspberry Pi Gadgeteer HAT with Pi host seating at underside J8 and a keyed ten-contact ribbon to the Buzzer module, carrying GPIO5 control, 5 V and ground" caption="The HAT sits above the Pi's 40-pin header. C1 is one mechanically grouped ribbon, not an electrical junction; every member is listed below. Board contact positions are true to the PCB. The Pi is represented by its header interface under the HAT. Plug bodies and the cable escape are schematic." width=1000 %}

The peripheral is the [Buzzer module](/extensions/buzzer-module), with its local buzzer and switching circuit. Use the HAT's **J1 Type Y** socket and the module's **J1 input**. The Pi's **BCM GPIO5** is **physical header pin 29**, HAT **J8.29** and, after **R4 (100 Ω)**, HAT **J1.3**. The module takes command on **J1.3**. Its local circuit, rather than the Pi GPIO, drives the buzzer load.

{% include _includes/extension-instruction-diagram.html id="pi-hat-v03-electrical" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/buzzer-electrical-paths.png" title="Follow command, supply and return" alt="Schematic electrical paths from Pi GPIO5 through HAT resistor R4 and ribbon contact 3 to Buzzer J1 contact 3, Pi 5 V through ideal diode U1 and contact 2, and common ground through contact 10" caption="This readable electrical panel deliberately spaces its contacts for explanation. It is not a mechanical connector-face drawing. It shows the complete paths." width=1000 %}

| Duty | Complete path | Direction and notes |
| --- | --- | --- |
| Command | Pi physical 29 / GPIO5 → HAT J8.29 `GPIO5_H` → R4.1–2, 100 Ω → HAT J1.3 `J1_P3` → cable C1.3 → Buzzer J1.3 `/Y_P3` → its local control circuit | Pi output to module input. Check the 3.3 V command margin and boot state. |
| Supply | Pi physical 2 and 4 → HAT J8.2/4 `H5V` → U1.1 VIN → U1.6 VOUT `P5V` → HAT J1.2 → C1.2 → Buzzer J1.2 → Buzzer JP1.1–2 → local buzzer supply | One Pi supply; check the voltage and available load current. |
| Return | Buzzer J1.10 → C1.10 → HAT J1.10 `GND` → HAT J8 ground contacts → Pi ground | Common circuit return, not protective earth. |
| Unused rail | HAT J1.1 `P3V3` → C1.1 → Buzzer J1.1 | The cable carries the rail; the Buzzer circuit does not load it. |

The other seven cores remain present in the 10-contact ribbon. They are **not extra Buzzer commands**: contacts 4–9 carry the HAT's other GPIO allocations but have no local load in this Buzzer example; contact 1 carries 3.3 V. Leave other devices and the Buzzer chain output J2 disconnected. Leave Buzzer external input J3 disconnected. On the module, bridge **JP1 contacts 1–2 only** to select Gadgeteer 5 V; do not also bridge 2–3.

{% include _includes/extension-instruction-diagram.html id="pi-hat-v03-cable" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/cable-contact-key.png" title="C1 ribbon — all ten contacts" alt="Every contact from HAT J1 to Buzzer J1, with same-number mapping, GPIO5 command, supply and return, and the unused module contacts identified" caption="The required electrical map is 1→1 through 10→10. The red edge is only a contact-one identifier after you have checked it. Keying, stripe position and equal connector pitch alone do not prove a cable's continuity or mating-face orientation." width=1000 %}

### Connect and check the assembly

1. Keep the Pi supply and every external supply disconnected. Confirm the connectors fitted on your HAT and Buzzer.
2. Identify Pi physical pin 1 and HAT J8 contact 1. Seat the underside female J8 on the complete 2×20 Pi header without a one-row or one-column offset. Use the proper supports; header height, PoE clearance, case fit and standoff selection need checking on your assembly.
3. Check the ribbon out of circuit: every contact must keep its number from HAT J1 to Buzzer J1, with no cross-shorts. Identify the connector mating faces and contact 1 from the actual assembly. Do not infer contact numbering from a photograph or the stripe.
4. Select Buzzer JP1 1–2 and connect C1 to HAT J1 and Buzzer J1. Leave the module's J2/J3 and every other HAT port unused for this example. Do not attach another 5 V source through a module or Qwiic connector.
5. Check continuity, rails, polarity, current and boot state before powered operation. The HAT's indicators are observations of local rail branches, not proof that GPIO, wiring or power is safe. Check command voltage at both sides of R4 and at the Buzzer input, not just whether an LED lights.
6. Only after those checks, reserve BCM GPIO5 for this application and use the Pi software example below. Stop with the command low before disconnecting the module.

### Pi software example

GPIO Zero's documented output API uses **BCM numbering**, so `5` means GPIO5 / physical 29, not physical pin 5. Its `Buzzer` class produces on/off control; it does not generate musical tones. Use a Pi-supported GPIO backend; current GPIO Zero documentation identifies `lgpio` as the supported backend on Pi 5. GPIO device access permissions must be correct for the account running the script. See the [GPIO Zero Buzzer API](https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer) and [backend documentation](https://gpiozero.readthedocs.io/en/stable/api_pins.html).

This is an application example, not firmware. It assumes the module's active-high command operates correctly at the Pi-side voltage. Save as `hat_buzzer.py` on the Pi:

```python
from time import sleep
from gpiozero import Buzzer

# BCM GPIO5 = Pi physical 29 = HAT J1 contact 3.
with Buzzer(5, active_high=True, initial_value=False) as buzzer:
    try:
        buzzer.on()
        sleep(0.2)
    finally:
        buzzer.off()
```

Run with the supported backend installed and configured:

```sh
GPIOZERO_PIN_FACTORY=lgpio python3 hat_buzzer.py
```

No Smoothieware setting, G-code command, device overlay or I²C/SPI enable step is required for this GPIO-only example. Other protocols require the corresponding Pi interface configuration and a driver for the chosen module. This guide does not claim deterministic motion timing from Linux GPIO or compatibility with every Gadgeteer board.

## Board reference and connector locations

{% include _includes/extension-instruction-diagram.html id="pi-hat-v03-reference" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/board-reference.png" title="Annotated HAT reference" alt="Top view of the Raspberry Pi HAT with connector callout pills for Pi header J8, GPIO J1, SPI J2, UART J3, I2C J4, PWM J5 and Qwiic J6" caption="The drawing is generated from the PCB. Grey leaders locate connector groups and are not conductors. J8 is on the underside: its contacts are shown as a top-view projection. J6 is the fitted Qwiic connector; the alternate J7 lands remain unpopulated. Enlarged keys below explain every contact." width=1000 %}

The board is 65 × 56 mm with 3 mm corner radii, 1.6 mm nominal thickness and four 2.75 mm drilled HAT mounting holes on a 58 × 49 mm pattern. Two additional 2.5 mm cable-tie holes and six fiducials are mechanical/manufacturing features, not electrical contacts. Check connector fit and PoE-stack clearance on your assembly. The electrical interface is intended for the standard 40-pin Pi header, including Pi models with a fitted header; that does **not** establish that this HAT physically fits every Pi, Zero, Pi 400, cooler, case or stacked accessory. The PoE keep-out is approximate.

All GPIO signals are **3.3 V only and not 5 V tolerant**. The board has no level shifters, analog inputs or galvanic isolation. A 100 Ω resistor and ESD diode do not convert a 5 V signal into a suitable Pi input. This agrees with the [Raspberry Pi GPIO electrical guidance](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#gpio). Signal directions below describe the protocol; a general GPIO's direction comes from software.

### Five Gadgeteer sockets: complete map

Each J1–J5 socket has ten contacts at 1.27 mm pitch. On every socket, **1 = filtered 3.3 V `P3V3`**, **2 = forwarded 5 V `P5V`**, and **10 = common `GND`**. Power goes from the Pi to the module. GPIO numbers in this table are BCM numbers; `Pi` is the physical 40-pin header contact.

| Socket | Contact | Signal / direction in protocol use | Pi physical contact |
| --- | --- | --- | --- |
| J1 Y · GPIO | 3 / 4 / 5 / 6 / 7 / 8 / 9 | GPIO5 / 27 / 7 / 22 / 25 / 23 / 24; software-selected input or output | 29 / 13 / 26 / 15 / 22 / 16 / 18 |
| J2 S · SPI | 3 / 4 / 5 | GPIO26 / 6 / 16; software-selected | 37 / 31 / 36 |
| J2 S · SPI | 6 | GPIO8 CE0; Pi → peripheral | 24 |
| J2 S · SPI | 7 | GPIO10 MOSI; Pi → peripheral | 19 |
| J2 S · SPI | 8 | GPIO9 MISO; peripheral → Pi | 21 |
| J2 S · SPI | 9 | GPIO11 SCLK; Pi → peripheral | 23 |
| J3 U · UART | 3 | GPIO18; software-selected | 12 |
| J3 U · UART | 4 / 5 | GPIO14 TX, Pi → peripheral / GPIO15 RX, peripheral → Pi | 8 / 10 |
| J3 U · UART | 6 / 7 / 8 / 9 | Not connected | — |
| J4 I · I²C | 3 / 6 | GPIO17 / GPIO4; software-selected | 11 / 7 |
| J4 I · I²C | 8 / 9 | GPIO2 SDA, bidirectional / GPIO3 SCL, Pi clock role | 3 / 5 |
| J4 I · I²C | 4 / 5 / 7 | Not connected | — |
| J5 P · PWM | 3 / 6 | GPIO21 / GPIO20; software-selected | 40 / 38 |
| J5 P · PWM | 7 / 8 / 9 | GPIO12 PWM0 / GPIO13 PWM1 / GPIO19 PWM1, Pi → peripheral | 32 / 33 / 35 |
| J5 P · PWM | 4 / 5 | Not connected | — |

GPIO2–27 are each assigned once among these five sockets. The Qwiic/header ports deliberately share the J4 I²C signals. GPIO13 and GPIO19 expose the same classic Pi hardware PWM channel; do not treat them as independent hardware waveforms. Alternate-function availability and operating-system setup still depend on the Pi model and its software. SPI settings, UART console allocation and any competing overlays must be checked before use; arbitrary GPIO access does not by itself enable these protocols.

Older Pi firmware can briefly drive GPIO6, GPIO14 and GPIO16 during boot: HAT J2.4, J3.4 and J2.5. The 100 Ω series resistors do not suppress that state. Keep startup-sensitive loads disconnected until you have checked their boot behaviour.

Each enlarged key below carries all ten contacts, including supplies, returns and NCs. Their row order is an electrical inventory, **not a mating-face view**. Use the board contact marker and the actual connector drawing to resolve orientation.

{% include _includes/extension-instruction-diagram.html id="pi-hat-j1" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j1.png" title="J1 — seven GPIO" alt="All ten Type Y contacts and their Raspberry Pi physical pin assignments" caption="GPIO5 on contact 3 is used in the Buzzer example." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-j2" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j2.png" title="J2 — SPI and GPIO" alt="All ten Type S contacts, SPI directions and Pi header pin assignments" caption="MOSI, MISO, clock and CE0 use the Pi's SPI0 signal allocation." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-j3" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j3.png" title="J3 — UART and GPIO" alt="All ten Type U contacts with Pi TX and RX and four unused contacts" caption="TX and RX are named from the Pi's perspective; connect a peripheral's RX to Pi TX, and its TX to Pi RX." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-j4" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j4.png" title="J4 — shared I²C and GPIO" alt="All ten Type I contacts and the common GPIO2 SDA and GPIO3 SCL assignments" caption="J4, J6 and J7 share one bus; they are not independent I²C controllers." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-j5" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j5.png" title="J5 — PWM and GPIO" alt="All ten Type P contacts including PWM0, two PWM1 outputs and unused contacts" caption="GPIO13 and GPIO19 must not be assumed to supply independent classic hardware PWM channels." width=1000 %}

### Qwiic J6 and alternate J7

| Contact | J6 and J7 function | Origin |
| --- | --- | --- |
| 1 | Ground | Common GND |
| 2 | 3.3 V only | Filtered `P3V3` |
| 3 | SDA | GPIO2, Pi physical 3, shared with J4.8 |
| 4 | SCL | GPIO3, Pi physical 5, shared with J4.9 |

J6 is a JST SM04B-SRSS-TB Qwiic connector; its mounting pads are grounded mechanical pads, not additional signal contacts. J7 is the alternative 1×4 2.54 mm header in the same connector area. The board fits **J6 and leaves J7 unpopulated**; fit one or the other, not both. Neither port provides 5 V. J6 has D27/D28 on SDA/SCL; J7 has no separate local TVS pair and shares the common protected net. All attached I²C devices must tolerate the same 3.3 V bus and avoid duplicate addresses. Additional module pull-ups appear in parallel with the Pi's fixed 1.8 kΩ SDA/SCL pull-ups; the HAT adds none. Check the combined pull-up load and bus capacitance for the chosen devices and wiring.

{% include _includes/extension-instruction-diagram.html id="pi-hat-j6" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j6.png" title="J6 — fitted Qwiic" alt="Four Qwiic contacts: ground, filtered 3.3 V, GPIO2 SDA and GPIO3 SCL" caption="Pin numbers identify electrical contacts; establish the actual cable mating face before use." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-j7" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/contacts-j7.png" title="J7 — unpopulated alternative" alt="Four alternative 2.54 mm header contacts with the same I2C mapping as J6" caption="This is the alternate header population, not a second fitted port on the board." width=1000 %}

### Pi header J8: all forty contacts

J8 is the underside 2×20 receptacle. Pi physical 1/17 supply `H3V3`, 2/4 supply `H5V`, and 6/9/14/20/25/30/34/39 are common ground. Physical **27/28 are GPIO0/1 HAT-ID (`ID_SD`/`ID_SC`) and are not connected**. There is no identification EEPROM or automatic overlay loading. The name “HAT” describes the intended form/interface; it is not HAT certification.

{% include _includes/extension-instruction-diagram.html id="pi-hat-header-one" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/pi-header-1.png" title="Pi J8 — contacts 1–20" alt="First twenty Pi header contacts including supplies, grounds, I2C, UART and SPI GPIO" caption="Physical header numbers are distinct from BCM GPIO numbers. This table is not a connector mating-face drawing." width=1000 %}
{% include _includes/extension-instruction-diagram.html id="pi-hat-header-two" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/pi-header-2.png" title="Pi J8 — contacts 21–40" alt="Last twenty Pi header contacts including reserved unconnected HAT-ID contacts 27 and 28" caption="The drawing shows true contact centres; verify contact 1 and orientation on the actual assembly." width=1000 %}

## Power, protection, indicators and test points

The board has two power paths. Pi `H3V3` passes through **FB1**, a ferrite bead, to the sockets' `P3V3`, with C3/C4 decoupling. Pi `H5V` passes through **U1 LM66100** to `P5V`, with C1 on its input and C2/C5 on its output. U1 contact 3 CE is tied to its output `P5V`; the [TI LM66100 Rev. A datasheet, pin-functions table](https://www.ti.com/lit/ds/symlink/lm66100.pdf) permits CE-to-VOUT for reverse-current protection. The ST contact 5 is unconnected. The device's own ratings do not set a board, header or cable rating.

The 5 V stage is there to block back-feeding into the Pi. There is **no output fuse or current limiter** on either forwarded rail. No usable current limit is specified for either rail. Do not use the Pi 4's 6 V absolute-maximum stress rating as an operating supply target. Power the Pi using its model-appropriate regulated supply and account for its own loads and every module.

Every routed GPIO channel has a 100 Ω series resistor and TPD1E10B06 ESD diode; D1–D26 cover the 26 GPIO paths, and D27/D28 add local I²C protection. A ground-return via sits beside each of the 28 TVS diodes. There is no signal-level conversion or sustained-overvoltage protection. Motors, relays and other power loads require their own appropriate driver/interface rather than a direct GPIO load.

| Item | Role | Reader action |
| --- | --- | --- |
| JP1 | Bridged solder jumper feeding R27/LED1 from `P3V3` | Cutting it disables only the 3.3 V indicator branch. It does not disconnect socket power. |
| JP2 | Bridged solder jumper feeding R28/LED2 from `P5V` | Cutting it disables only the 5 V indicator branch. It does not disconnect socket power. |
| LED1 | Green 3.3 V indicator through R27 1 kΩ | Shows its local branch state, not a voltage or current measurement. |
| LED2 | Green 5 V indicator through R28 2.2 kΩ | An unlit LED does not prove absence of power. |
| TP1 / TP2 | `H3V3` / `H5V`, before FB1/U1 | Pi-side rail measurement points. |
| TP3 / TP4 | `P3V3` / `P5V`, after FB1/U1 | Module-side rail measurement points. |
| TP5 / TP6 | `GND` / `GND` | Common circuit-ground references. |

There are no user switches, adjustment controls, programming connectors or module-power selection jumpers on the HAT. Do not confuse the HAT's LED jumpers with the Buzzer's separate supply-selection jumper.

{% include _includes/extension-instruction-diagram.html id="pi-hat-v03-controls" src="/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/power-controls.png" title="Power and control reference" alt="All HAT indicator jumpers, LEDs, rail test points and power stages" caption="Circuit roles. An indicator is not a measurement." width=1000 %}

## Source files

[Download the source files and notices](/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/native-source.zip). It contains the PCB, hierarchical KiCad schematics, project settings, custom footprints, BOM, netlist and notes. Three-dimensional models and standard KiCad libraries are not bundled. The hardware source declares CERN-OHL-S-2.0; retain original notices and consult the source's license terms.

[Diagram source manifest](/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/source-manifest.json) records the exact PCB, schematic, contract, module and artwork hashes, contact identities and cable membership. [Shared-router input and result](/images/extensions/raspberry-pi-to-gadgeteer-hat/guides/routing-scenes.json) distinguish the mechanical cable jacket from the separately spaced electrical explanation. The generator is `smoothie-diagrams/src/host-adapter-guides/raspberry_pi_hat.py`; generated SVGs are not edited by hand.

Primary references: [Raspberry Pi header and GPIO documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#gpio), [Raspberry Pi HAT source/design guide](https://github.com/raspberrypi/hats), [HAT mechanical drawing](https://github.com/raspberrypi/hats/blob/master/hat-board-mechanical.pdf), [TI LM66100 datasheet](https://www.ti.com/lit/ds/symlink/lm66100.pdf), and the source download above.
