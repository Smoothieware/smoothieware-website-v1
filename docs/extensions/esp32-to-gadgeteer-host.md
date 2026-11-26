---
layout: default
title: "ESP32 DevKit to Gadgeteer host board"
permalink: /extensions/esp32-to-gadgeteer-host
---

# ESP32 DevKit to Gadgeteer host board

This adapter lets an Espressif ESP32-DevKitC-32E act as a host for Smoothie Gadgeteer extension boards. The DevKit plugs into two 1x19 female 2.54 mm headers, and five Gadgeteer sockets (A, S, U, I and P) plus a Qwiic connector bring its pins out in the standard Gadgeteer pinout. It carries no firmware and no second microcontroller: only wiring, protection and power conditioning.

This board carries no firmware and no application: provide your own ESP32 firmware.

**Smoothieboard V2 Prime connection: inapplicable.** The ESP32 is the host. This board is not an extension that plugs into Prime; do not connect a Prime host socket to one of its host-output sockets. That would join host supplies and potentially opposing outputs. **Smoothieware settings: inapplicable.** No Smoothieware driver, ESP32 application or module firmware is supplied.

Use this adapter when developing an ESP32 application for a particular Gadgeteer peripheral: first select a socket whose actual contacts match that peripheral, then provide firmware for its protocol and startup behavior. A socket letter alone does not establish compatibility. The worked Buzzer circuit below illustrates one such connection.

## Board reference

{% include _includes/extension-instruction-diagram.html id="esp32-host-v03-reference" src="/images/extensions/esp32-to-gadgeteer-host/guides/board-reference.png" title="ESP32 host adapter — annotated board" alt="Top-view board drawing of the ESP32 Gadgeteer host adapter with its five socket roles, DevKit seating headers and alternate I2C connector" caption="The DevKit is removed to expose the carrier. Pills identify connector groups; grey leaders locate them and are not electrical wires. The selected drawing shows the normal 2.54 mm J6 population. Check physical fit and cable mating before use." width=1000 %}

Red denotes 3.3 V, orange 5 V, near-black circuit ground and blue the selected control signal. A white contact marker identifies native pin 1. The labels and numbered schedule determine electrical identity; colour alone does not. Circuit ground is not protective earth.

### Every contact, indicator and solder link

The details below cover **all 92 numbered connector contacts**, all **98 physical connector pad instances** (including the alternative J6 lands and its two ground mounting lands), and the **18 terminals of the LEDs, solder links and test pads**. Each row highlights its exact contact on a crop of the board drawing and names its function and direction or circuit duty. Grey leaders are annotations, not wires. General GPIO direction is application-defined; the protocol directions are the intended host roles.

These are coordinate locators, not mating-face drawings. The long DevKit receiver rows are rigidly rotated 90° in their details; the whole-board overview above locates each receiver. The normal J6 drawing uses the 2.54 mm header. The separate JST-SH sheets show alternative lands, including both MP ground lands, and do not imply that both connector populations should be fitted.

Underside controls are shown separately as **pad locators**, not added to the top assembly artwork. Their board-frame footprint origins, in millimetres measured from the upper-left board corner in the top-through-board coordinate frame, are: JP3 (41.6, 9.1), JP4 (41.6, 12.4), TP1 (15, 54.1), TP2 (18, 54.1), TP3 (21, 54.1), TP4 (32, 54.1), TP5 (34.7, 54.1), TP6 (38, 54.1). These coordinates are not a mirrored underside mating view.

<details markdown="1">
<summary>Analog socket A — J1</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j1-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j1-01.png" title="Analog socket A — contact detail 1" alt="J1 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j1-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j1-02.png" title="Analog socket A — contact detail 2" alt="J1 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>SPI socket S — J2</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j2-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j2-01.png" title="SPI socket S — contact detail 1" alt="J2 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j2-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j2-02.png" title="SPI socket S — contact detail 2" alt="J2 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>UART socket U — J3</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j3-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j3-01.png" title="UART socket U — contact detail 1" alt="J3 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j3-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j3-02.png" title="UART socket U — contact detail 2" alt="J3 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>I²C socket I — J4</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j4-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j4-01.png" title="I²C socket I — contact detail 1" alt="J4 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j4-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j4-02.png" title="I²C socket I — contact detail 2" alt="J4 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>GPIO socket P — J5</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j5-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j5-01.png" title="GPIO socket P — contact detail 1" alt="J5 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j5-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j5-02.png" title="GPIO socket P — contact detail 2" alt="J5 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>I²C header — J6</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j6-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j6-01.png" title="I²C header — contact detail 1" alt="J6 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>DevKit J2 receiver — J7</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j7-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j7-01.png" title="DevKit J2 receiver — contact detail 1" alt="J7 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j7-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j7-02.png" title="DevKit J2 receiver — contact detail 2" alt="J7 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j7-03" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j7-03.png" title="DevKit J2 receiver — contact detail 3" alt="J7 contact detail 3, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j7-04" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j7-04.png" title="DevKit J2 receiver — contact detail 4" alt="J7 contact detail 4, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>DevKit J3 receiver — J8</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j8-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j8-01.png" title="DevKit J3 receiver — contact detail 1" alt="J8 contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j8-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j8-02.png" title="DevKit J3 receiver — contact detail 2" alt="J8 contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j8-03" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j8-03.png" title="DevKit J3 receiver — contact detail 3" alt="J8 contact detail 3, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j8-04" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j8-04.png" title="DevKit J3 receiver — contact detail 4" alt="J8 contact detail 4, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>Top indicators and links — controls-top</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-controls-top-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-controls-top-01.png" title="Top indicators and links — contact detail 1" alt="Controls-top contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-controls-top-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-controls-top-02.png" title="Top indicators and links — contact detail 2" alt="Controls-top contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>Underside links and test pads — controls-bottom</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-controls-bottom-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-controls-bottom-01.png" title="Underside links and test pads — contact detail 1" alt="Controls-bottom contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-controls-bottom-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-controls-bottom-02.png" title="Underside links and test pads — contact detail 2" alt="Controls-bottom contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

<details markdown="1">
<summary>Alternative JST-SH copper — J6-alternative</summary>

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j6-alternative-01" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j6-alternative-01.png" title="Alternative JST-SH copper — contact detail 1" alt="J6-alternative contact detail 1, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

{% include _includes/extension-instruction-diagram.html id="esp32-v03-atlas-j6-alternative-02" src="/images/extensions/esp32-to-gadgeteer-host/guides/contact-atlas-j6-alternative-02.png" title="Alternative JST-SH copper — contact detail 2" alt="J6-alternative contact detail 2, with each exact contact highlighted beside its function and direction or circuit duty" caption="ESP32 adapter contact locator. Grey leaders identify contacts; they do not represent electrical connections." width=760 %}

</details>

## A complete example: ESP32 host and Buzzer module

{% include _includes/extension-instruction-diagram.html id="esp32-host-v03-wiring" src="/images/extensions/esp32-to-gadgeteer-host/guides/full-wiring.png" title="ESP32 host, adapter and Buzzer — complete connection" alt="ESP32 DevKitC seated on the host adapter, with a ten-contact cable to the Buzzer module and individually scheduled control, supply and return contacts" caption="The DevKit enclosure is an illustrative top view with its source dimensions and header positions. A same-number cable is required. Verify connector fit, actual rail voltage, GPIO drive and firmware before powered use." width=1100 %}

The peripheral is the [Buzzer module](/extensions/buzzer-module), including its actual local buzzer and switch stage. Use the module's Gadgeteer input J1, leave its chain output J2 and alternate input J3 disconnected, and select Gadgeteer power by bridging its JP1 contacts 1–2 only. Do not bridge contacts 2–3 as well. The adapter's PWM socket **J5 contact 3** supplies the command from **GPIO26**. No PWM waveform is required by an active buzzer: a steady asserted command is the intended sounding state; beeping requires application timing.

### Follow all three functional paths

| Function | Complete path | Direction and limit |
| --- | --- | --- |
| Buzzer command | DevKit J2.10 GPIO26 → adapter J7.10 → R10 100 Ω → adapter J5.3 `/P_P3` → cable 3 → Buzzer J1.3 `/Y_P3` → its diode-OR and gate circuit → local switching transistor | ESP32 output to module input; check the 3.3 V drive after the diode and the startup state |
| Buzzer supply | One USB supply into the DevKit → DevKit 5V header J2.19 → adapter J7.19 `/HOST_5V` → D1 anode 2, cathode 1 → `+5V` → adapter J5.2 → cable 2 → Buzzer J1.2 → JP1 1–2 → local buzzer supply | Host to module; socket voltage is reduced by the host and adapter diodes; check actual voltage and available current |
| Return | Buzzer ground and switching return → Buzzer J1.10 → cable 10 → adapter J5.10 `GND` → adapter J7.14 and J8.1/J8.7 → DevKit ground | Common circuit return; no earth or independent supply is implied |

The DevKit's USB lead supplies both its logic regulator and the forwarded 5 V path. Its 3V3 header J2.1 reaches adapter J7.1, ferrite FB1 and every Gadgeteer contact 1; cable contact 1 is forwarded by this Buzzer module but does not supply its local buzzer load. Do not add another power source through the cable.

{% include _includes/extension-instruction-diagram.html id="esp32-host-v03-cable-key" src="/images/extensions/esp32-to-gadgeteer-host/guides/cable-contact-key.png" title="ESP32-to-Buzzer cable — all ten contact identities" alt="All ten same-numbered cable contacts, including 3.3 V, 5 V, GPIO26 command, ground, unused contacts and the top-view keyed connector numbering" caption="The contact key is a board-top reference, not a mating-face drawing of a selected plug. Contact 1 must reach contact 1 and so on through both cable ends. A red ribbon edge is not sufficient proof. Establish the actual assembly orientation and de-energized continuity before use." width=1000 %}

| Adapter J5 contact → Buzzer J1 contact | Signal | Module use |
| --- | --- | --- |
| 1 → 1 | +3.3 V | Forwarded; no local buzzer load |
| 2 → 2 | +5 V after adapter D1 | Local buzzer power with JP1 1–2 selected |
| 3 → 3 | GPIO26 via 100 Ω | Buzzer command |
| 4 → 4 | NC at adapter | No local load; not an available host signal |
| 5 → 5 | NC at adapter | No local load; not an available host signal |
| 6 → 6 | GPIO15, strapping pin | No local load; forwarded to the disconnected chain port |
| 7 → 7 | GPIO25 | No local load; forwarded to the disconnected chain port |
| 8 → 8 | GPIO27 | No local load; forwarded to the disconnected chain port |
| 9 → 9 | GPIO2, strapping pin | No local load; forwarded to the disconnected chain port |
| 10 → 10 | GND | Common return |

There is no generic Y socket on this host. The Buzzer consumes contact 3, supply and return, so this specific use works with these connections. Do not assume the same for arbitrary Y modules or chain another module without tracing every consumed contact and load.

### Prepare and check the assembly

1. Identify the exact DevKitC variant.
2. With all power removed, seat a header-equipped WROOM DevKit only after comparing every header position. Put its antenna at ANTENNA and its USB connector at USB. Do not reverse it or offset either row.
3. Select Buzzer JP1 1–2 and leave the alternate input and chain connector unused. Check all ten cable identities end to end, key clearance, contact-1 markers and absence of supply shorts with the actual connector populations.
4. Provide an ESP32 application that configures GPIO26 as an output and establishes the intended silent state before enabling the peripheral.
5. Before applying power, complete the rail, drive, reset and current checks described below. Use one DevKit supply option only.

## References

The [Espressif DevKitC V4 user guide](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/esp32-devkitc/user_guide.html) establishes header numbering, the WROVER exclusions and mutually exclusive power options. See also the [V4 schematic](https://dl.espressif.com/dl/schematics/esp32_devkitc_v4_sch.pdf), [mechanical dimensions](https://dl.espressif.com/dl/schematics/esp32_devkitc_v4_dimensions.pdf), [ESP32 datasheet](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf), [Samtec connector drawing](https://suddendocs.samtec.com/prints/shf-1xx-01-x-d-xx-xx-xx-mkt.pdf).


## Which DevKit fits

- Designed for: ESP32-DevKitC-32E (V4 layout) with an ESP32-WROOM-32E module and male headers. The two carrier header rows are 25.40 mm apart and each has 19 pins. The 32UE variant has the corresponding WROOM pinout; check its physical fit.
- Does not fit without checking: other 38-pin ESP32 boards. Compare their header order with the table below first.
- Do not use a WROVER (PSRAM) module: GPIO16 and GPIO17 are its PSRAM lines and are used here for the U socket.
- The Espressif drawing dimensions the PCB body at 27.94 × 48.26 mm, with an additional 6.04 mm antenna projection above the body. The pin-1 row lies 1.30 mm below the body's top edge. The adapter is silk-marked ANTENNA at the pin-1 end and USB at the other end. Its symmetric socket arrangement does not prevent reversed insertion. Body, header height, antenna clearance, shrouded cable and Qwiic fit must be checked.

## Sockets and pinouts

Every Gadgeteer socket is a 2x5 1.27 mm shrouded keyed header. Pin 1 is 3.3 V, pin 2 is 5 V, pin 10 is GND; contacts not listed are not connected.

| Socket | Contact | ESP32 pin and function |
| --- | --- | --- |
| J1 A (analog) | 3 | GPIO36 (ADC1, input only) |
| | 4 | GPIO39 (ADC1, input only) |
| | 5 | GPIO34 (ADC1, input only) |
| | 6 | GPIO32 (ADC1) |
| J2 S (SPI) | 3 | GPIO33 |
| | 4 | GPIO13 |
| | 5 | GPIO14 |
| | 6 | CS, GPIO5 (boot strapping pin) |
| | 7 | MOSI, GPIO23 |
| | 8 | MISO, GPIO19 |
| | 9 | SCK, GPIO18 |
| J3 U (UART) | 3 | GPIO4 |
| | 4 | TX, GPIO17 (UART2) |
| | 5 | RX, GPIO16 (UART2) |
| J4 I (I2C) | 3 | GPIO35 (input only) |
| | 8 | SDA, GPIO21 |
| | 9 | SCL, GPIO22 |
| J5 P (PWM) | 3 | GPIO26 |
| | 6 | GPIO15 (boot strapping pin) |
| | 7 | PWM, GPIO25 |
| | 8 | PWM, GPIO27 |
| | 9 | PWM, GPIO2 (boot strapping pin) |
| J6 Qwiic / 2.54 mm | 1 GND, 2 3.3 V, 3 SDA, 4 SCL | same SDA/SCL as J4; no 5 V on this connector |

Not connected by this carrier: GPIO0, GPIO12, EN, the USB console pins GPIO1 and GPIO3, and the flash pins GPIO6 to GPIO11. There is no Y (7-GPIO) socket and no host-adapter daisy-chain connector. J1–J5 are separate host outputs. A module's chain connector does not create additional ESP32 GPIOs.

All J1–J5 contact 1 positions are +3.3 V, contact 2 positions +5 V and contact 10 positions GND. Individually NC contacts are J1.7/8/9; J3.6/7/8/9; J4.4/5/6/7; and J5.4/5. J2 uses all contacts. GPIO34, 35, 36 and 39 are input-only. UART TX is from the ESP32 and RX is into it. SPI MOSI and SCK are from the host, MISO is into the host and CS selects the peripheral. I²C SDA is bidirectional and SCL is host-clocked for the intended controller use; hardware pins do not set a particular firmware bus mode. Remaining GPIO directions and PWM operation depend on the application. All 22 signal paths include a 100 Ω series resistor and socket-side TVS protection; those parts do not make the GPIO 5 V tolerant.

### DevKit seating-header contact order

Viewed from above with ANTENNA at the top, adapter J7 receives DevKit J2 and adapter J8 receives DevKit J3. Contact 1 is at the antenna end and contact 19 at the USB end on both rows. The number order below is not a mating-face cable order. “NC” means the DevKit pin is present but not connected by this adapter.

| Contact | Adapter J7 / DevKit J2 | Adapter J8 / DevKit J3 |
| --- | --- | --- |
| 1 | 3V3 → HOST_3V3 | GND |
| 2 | EN; NC | GPIO23 |
| 3 | GPIO36 | GPIO22 |
| 4 | GPIO39 | GPIO1 TX0; NC |
| 5 | GPIO34 | GPIO3 RX0; NC |
| 6 | GPIO35 | GPIO21 |
| 7 | GPIO32 | GND |
| 8 | GPIO33 | GPIO19 |
| 9 | GPIO25 | GPIO18 |
| 10 | GPIO26 | GPIO5 |
| 11 | GPIO27 | GPIO17 |
| 12 | GPIO14 | GPIO16 |
| 13 | GPIO12; NC | GPIO4 |
| 14 | GND | GPIO0; NC |
| 15 | GPIO13 | GPIO2 |
| 16 | GPIO9 D2; NC | GPIO15 |
| 17 | GPIO10 D3; NC | GPIO8 D1; NC |
| 18 | GPIO11 CMD; NC | GPIO7 D0; NC |
| 19 | 5V → HOST_5V | GPIO6 CLK; NC |

## Supply and limits

- 3.3 V comes from the DevKit 3V3 pin (its onboard regulator, shared with the radio) through ferrite FB1 and 22 µF plus 100 nF local capacitance. Keep the total extension load within **100 mA**.
- 5 V comes from the DevKit 5V pin through Schottky D1 (B5819W-7-F). Expect about 4.4–4.6 V at the sockets under USB power because there are two series diodes. Keep the total extension load within **500 mA**. Check the actual source, host consumption, temperature, diode, connector and cable together. A separate 5 V header supply is an alternative to USB, not an additional simultaneous source. There is no regulated 5 V output on this carrier.
- The diode exists so that a 5 V source on a socket cable cannot push current back into the DevKit regulator input. It is not a reverse-polarity or over-voltage protector: the power rails are treated as trusted.
- Every signal goes through a 100 ohm series resistor and one channel of a TPD4E1U06 ESD array. There is no level shifting. Signals must stay within 3.3 V; the ESP32 pins are not 5 V tolerant.
- Qwiic and I2C: the DevKit has no I2C pull-ups, so 4.7 kohm pull-ups to 3.3 V are fitted on SDA and SCL, one solder jumper per line (JP3 and JP4, on the bottom) to remove them if another device already provides them.

Use exactly one DevKit power source, as required by Espressif. Do not inject 3.3 V through Gadgeteer contact 1 or J6, including while the DevKit is off: FB1 provides no DC isolation or reverse-current blocking. D1 isolates only the forwarded 5 V path. There is no enforced current limiter on either rail. The Smoothieboard regulator's current budget is irrelevant to this ESP32 host.

## Boot strapping warning

GPIO2, GPIO5 and GPIO15 are boot strapping pins exposed at J5 and J2. Their reset levels affect boot behavior; a peripheral can interfere with boot or flashing. Verify the particular module's reset-time pulls and loads against the selected ESP32 datasheet, rather than relying on a generic resistor threshold. GPIO34–39 have no internal pull resistors. Use ADC1 on the A socket for the intended Wi-Fi sensing case and check your ESP-IDF driver and version before relying on ADC2 with Wi-Fi. Check booting with the actual load attached.

## Options and jumpers

| Item | What it does | Default |
| --- | --- | --- |
| J6 Qwiic | Populate either the JST SH 4-pin Qwiic/STEMMA QT connector or a 1x04 2.54 mm pin header on the same pads. 3.3 V only. | One of the two is fitted when you order |
| JP1 | Cut to turn off the green 3.3 V LED | LED on |
| JP2 | Cut to turn off the green 5 V LED | LED on |
| JP3, JP4 | Cut to remove the SDA / SCL pull-ups | Pull-ups on |
| TP1 to TP6 | Test pads on the bottom: 3V3, 5V, GND, SDA, SCL and a second GND | |

## Mounting

Three M3 holes (ungrounded) sit in the middle channel, 20 mm apart. Three 2.5 mm holes beside the socket columns take cable ties for strain relief. The board outline is 52.4 x 56.0 mm, two copper layers, black solder mask, white silkscreen.

The board source declares CERN OHL-S 2.0.
