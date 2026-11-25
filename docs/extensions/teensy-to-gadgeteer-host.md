---
layout: default
title: "Teensy 4.1 to Gadgeteer host board"
permalink: /extensions/teensy-to-gadgeteer-host
---

# Teensy 4.1 to Gadgeteer host board

Use this carrier to make a **PJRC Teensy 4.1 the controller** for Gadgeteer extension modules: read sensors, operate indicators, or communicate with a suitable SPI, UART or I²C peripheral. Six sockets bring out different Teensy functions. A Qwiic connector shares the I²C bus. The carrier contains no processor and runs no firmware; the program on the Teensy performs the work.

**Documented revision: v05, Qwiic population. This is an unbuilt, unqualified design study.** Native CAD and a matching pin contract exist, but the qualification record has no returned KiCad electrical/layout checks or physical test results. The drawings describe the saved source and a proposed electrical connection. Connector mating, loaded rail voltage, startup behavior and powered operation remain unverified.

This is an independent host adapter. **There is no Smoothieboard V2 Prime cable, Prime pin assignment or Smoothieware configuration for this use.** The practical example uses the Teensy itself to drive the [Buzzer module](/extensions/buzzer-module).

## How the carrier works

Each of the 31 assigned Teensy signals passes through a 100 Ω series resistor to its socket contact. A TPD4E1U06 array channel provides the source's ESD-protection arrangement. These parts provide **no level translation**: all signal contacts remain 3.3 V logic. A socket's capability letter describes its contact functions, not automatic software or module compatibility.

Teensy VIN feeds the socket 5 V rail through a Schottky diode. Teensy 3.3 V feeds the socket 3.3 V rail through a ferrite bead. All grounds are common. The I²C connectors share one bus; the other sockets connect to distinct Teensy pin groups. There is no second MCU, autonomous device discovery or adapter-side protocol conversion.

## Board reference

The source-coordinate abstraction preserves the selected v05 placement. The Teensy is removed in this view so its two receiving headers are visible. White dots identify source contact 1; they are not a qualified view into the mating plug. The contact keys provide the complete electrical pinout at a readable size.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-reference" src="/images/extensions/teensy-to-gadgeteer-host/guides/board-reference.png" title="Teensy host v05 — board reference" alt="Source-coordinate top view of the Teensy carrier with callouts to the analog, I2C, PWM, UART, SPI and GPIO sockets and both host headers." caption="Qwiic J7 fitted; alternative J8 unpopulated, with its copper contacts retained. The contact keys and power/service key below complete this reference. Source geometry does not establish manufactured fit or qualification." width=660 %}
{:/nomarkdown}

### Common socket contacts

Every Gadgeteer socket is a source-specified Samtec SHF-105-01-L-D-TH, keyed 2×5 at 1.27 mm pitch. Use the board's contact numbers and a continuity-checked cable. A ribbon's colored edge or visually similar connector does not prove its pin-1 orientation.

| Contact | Function on every socket | Direction and limit |
| --- | --- | --- |
| 1 | Filtered 3.3 V | Host output; 100 mA **total design budget**, shared with I²C connectors |
| 2 | Diode-fed 5 V | Host output; 500 mA **total design budget**, not a guaranteed available USB allowance |
| 10 | GND | Common signal and supply return |

The socket tables list every remaining contact. `NC` means not connected in this revision. GPIO direction is chosen by the Teensy program; unused signals must not be tied to a rail or another output.

### GPIO socket — J1, type Y

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 24 | GPIO |
| 4 | 25 | GPIO |
| 5 | 26 | GPIO |
| 6 | 27 | GPIO |
| 7 | 28 | GPIO |
| 8 | 29 | GPIO |
| 9 | 30 | GPIO |

These signals require **Teensy 4.1**. A Teensy 4.0 does not make the corresponding receiving-header connections.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-y-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j1-contacts-1-5.png" title="GPIO socket — contacts 1–5" alt="Readable electrical contact key for GPIO socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-y-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j1-contacts-6-10.png" title="GPIO socket — contacts 6–10" alt="Readable electrical contact key for GPIO socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### Analog socket — J2, type A

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 20 / A6 | Analog input |
| 4 | 21 / A7 | Analog input |
| 5 | 22 / A8 | Analog input |
| 6 | 23 / A9 | GPIO |
| 7 | NC | — |
| 8 | NC | — |
| 9 | NC | — |

Keep analog inputs within the Teensy's supported 0–3.3 V range. GPIO contact 6 also has an analog function on the Teensy; that does not change the socket type or provide a higher voltage range.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-a-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j2-contacts-1-5.png" title="Analog socket — contacts 1–5" alt="Readable electrical contact key for Analog socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-a-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j2-contacts-6-10.png" title="Analog socket — contacts 6–10" alt="Readable electrical contact key for Analog socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### SPI socket — J3, type S

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 4 | GPIO |
| 4 | 5 | GPIO |
| 5 | 6 | GPIO |
| 6 | 10 | CS → |
| 7 | 11 | MOSI → |
| 8 | 12 | MISO ← |
| 9 | 13 | SCK → |

Arrows are relative to the Teensy acting as SPI controller. Pin 13 also drives the Teensy's onboard LED. Configure chip select, mode, clock and the device driver for the actual peripheral; a socket letter supplies none of those settings.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-s-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j3-contacts-1-5.png" title="SPI socket — contacts 1–5" alt="Readable electrical contact key for SPI socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-s-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j3-contacts-6-10.png" title="SPI socket — contacts 6–10" alt="Readable electrical contact key for SPI socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### UART socket — J4, type U

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 2 | GPIO |
| 4 | 1 | TX1 → |
| 5 | 0 | RX1 ← |
| 6 | 3 | GPIO |
| 7 | NC | — |
| 8 | NC | — |
| 9 | NC | — |

Use Teensy `Serial1` on pins 0/1. These are **3.3 V logic UART** signals, not RS-232 or RS-485 levels. For a directly wired peripheral, host TX goes to peripheral RX, host RX goes to peripheral TX, and grounds must be common.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-u-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j4-contacts-1-5.png" title="UART socket — contacts 1–5" alt="Readable electrical contact key for UART socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-u-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j4-contacts-6-10.png" title="UART socket — contacts 6–10" alt="Readable electrical contact key for UART socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### I²C socket — J5, type I

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 17 | GPIO |
| 4 | NC | — |
| 5 | NC | — |
| 6 | 14 | GPIO |
| 7 | NC | — |
| 8 | 18 | SDA ↔ |
| 9 | 19 | SCL ↔ |

Pins 18/19 belong to the Teensy `Wire` bus. J5, Qwiic J7 and alternative J8 share addresses, capacitance and pull-up loading. Use 3.3 V bus pull-ups; never attach a module that pulls the bus to 5 V. Contact 3 is GPIO 17, not a PWM channel.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-i-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j5-contacts-1-5.png" title="I²C socket — contacts 1–5" alt="Readable electrical contact key for I²C socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-i-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j5-contacts-6-10.png" title="I²C socket — contacts 6–10" alt="Readable electrical contact key for I²C socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### PWM socket — J6, type P

| Contact | Teensy pin | Function |
| --- | --- | --- |
| 3 | 15 | GPIO |
| 4 | NC | — |
| 5 | NC | — |
| 6 | 16 | GPIO |
| 7 | 7 | PWM → |
| 8 | 8 | PWM → |
| 9 | 9 | PWM → |

Pin 9 is the third PWM channel; an older draft incorrectly assigned that function to pin 17. Pins 7/8 can alternatively serve Teensy `Serial2`, so do not enable that UART while using them as PWM. These are logic signals; power loads need an appropriate driver.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-p-1" src="/images/extensions/teensy-to-gadgeteer-host/guides/j6-contacts-1-5.png" title="PWM socket — contacts 1–5" alt="Readable electrical contact key for PWM socket contacts 1 to 5, including both supply contacts." caption="Read with the native top-view board map. Rows are expanded electrical keys, not a view into the physical cable plug." width=660 %}
{:/nomarkdown}
{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-p-2" src="/images/extensions/teensy-to-gadgeteer-host/guides/j6-contacts-6-10.png" title="PWM socket — contacts 6–10" alt="Readable electrical contact key for PWM socket contacts 6 to 10, including common ground." caption="The two keys together cover every socket contact, including contacts unconnected in the selected source." width=660 %}
{:/nomarkdown}

### Host headers, Qwiic and controls

Seat a Teensy 4.1 in the two 1×24 female 2.54 mm receiving headers, with its USB end at the marked end. The rows are 15.24 mm apart. The carrier is 76 × 56 mm, 1.6 mm thick, with four ungrounded M3 holes and three cable-tie holes. Seating, screw-head clearance and USB/microSD access remain unqualified.

Positions below run from the **USB end** along each row. They are receiving-header contact positions, not GPIO numbers.

| Position | VIN row J9 | GPIO-0 row J10 |
| --- | --- | --- |
| 1 | VIN | GND |
| 2 | GND | GPIO 0 |
| 3 | 3.3 V | GPIO 1 |
| 4 | GPIO 23 | GPIO 2 |
| 5 | GPIO 22 | GPIO 3 |
| 6 | GPIO 21 | GPIO 4 |
| 7 | GPIO 20 | GPIO 5 |
| 8 | GPIO 19 | GPIO 6 |
| 9 | GPIO 18 | GPIO 7 |
| 10 | GPIO 17 | GPIO 8 |
| 11 | GPIO 16 | GPIO 9 |
| 12 | GPIO 15 | GPIO 10 |
| 13 | GPIO 14 | GPIO 11 |
| 14 | GPIO 13 | GPIO 12 |
| 15 | GND | 3.3 V |
| 16 | GPIO 41 | GPIO 24 |
| 17 | GPIO 40 | GPIO 25 |
| 18 | GPIO 39 | GPIO 26 |
| 19 | GPIO 38 | GPIO 27 |
| 20 | GPIO 37 | GPIO 28 |
| 21 | GPIO 36 | GPIO 29 |
| 22 | GPIO 35 | GPIO 30 |
| 23 | GPIO 34 | GPIO 31 |
| 24 | GPIO 33 | GPIO 32 |

GPIO 31–41 are not assigned to the six Gadgeteer sockets. A proposed Teensy 4.0 population uses the first 14 positions of each row, leaving GPIO socket J1 disconnected; that alternative has not been fitted or tested.

Qwiic J7 is a four-contact JST SH connector at 1.0 mm pitch: **1 GND, 2 filtered 3.3 V, 3 SDA/Teensy 18, 4 SCL/Teensy 19**. Alternative J8 is a 1×4 2.54 mm header on the same numbered nets. Fit J7 **or** J8, not both; the artwork selects J7. Qwiic carries no 5 V.

| Feature | Source default | Effect |
| --- | --- | --- |
| JP1 / green LED D2 | Closed | Opening JP1 disables only the 5 V indicator |
| JP2 / green LED D3 | Closed | Opening JP2 disables only the 3.3 V indicator |
| JP3 / SDA pull-up | Closed | Opening disconnects its 2.2 kΩ pull-up to filtered 3.3 V |
| JP4 / SCL pull-up | Closed | Opening disconnects its 2.2 kΩ pull-up to filtered 3.3 V |
| Seven test pads | +5VS, +3V3P, HOST_VIN, GND ×2, SDA, SCL | Measurement access; not extra qualified supply inputs |

The adapter has no reset or programming control. Program the Teensy through its own USB interface. Reconcile all parallel I²C pull-ups before cutting links: these links affect the shared bus, not only Qwiic. See [PJRC's Wire reference](https://www.pjrc.com/teensy/td_libs_Wire.html) for the host API; each peripheral still needs its own compatible driver.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-service" src="/images/extensions/teensy-to-gadgeteer-host/guides/power-service-key.png" title="Teensy host — power and service key" alt="Readable Qwiic/header contact key, LED and I2C solder links, measurement pads and total design supply budgets." caption="Change solder links only with power disconnected. A lit indicator does not prove the rail is within specification or a peripheral works." width=660 %}
{:/nomarkdown}

## Power and connection limits

- In the example, the Teensy's USB connection supplies VIN and D1 feeds socket contact 2. The diode drop puts this rail below VIN; check its actual voltage at the module under load.
- The design ceilings are **500 mA total on 5 V** and **100 mA total on 3.3 V**, summed across every socket and I²C connector. Host consumption, USB capability, cable loss and temperature can lower the usable allowance. These are unmeasured budgets, with no enforced current limiter.
- Never inject external 3.3 V through socket contact 1, Qwiic or J8, including with the Teensy off. The ferrite provides no DC reverse-current isolation. D1 blocks back-feed only on the 5 V path.
- Do not join this carrier to a powered Smoothieboard or another powered host. This is not an isolated host-to-host bridge, and its signal contacts are not 5 V tolerant.
- Follow [PJRC's power instructions](https://www.pjrc.com/store/teensy41.html#power) for an external VIN supply and the VUSB–VIN link. The carrier diode does not isolate an external VIN source from USB at the Teensy itself.

## Practical example: sound the Buzzer module

Use **Teensy 4.1 + carrier v05 + Buzzer module v14**, without another module or power source. The buzzer uses GPIO socket contact 3: **Teensy digital pin 24**. The module's own transistor switches its sounder; the Teensy drives a control input, not the sounder's supply current.

The diagram below is an **electrical contact map, not a complete installation drawing**. Its detached cable rows establish the contact-number schedule; they do not show continuous connections to the native board contacts. Physical plug orientation, source-native cable fanout and cable fit still need qualification before this can serve as an assembly guide.

{::nomarkdown}
{% include _includes/extension-instruction-diagram.html id="teensy-v05-buzzer-wiring" src="/images/extensions/teensy-to-gadgeteer-host/guides/full-wiring.png" title="Teensy host to Buzzer — electrical cable contact map" alt="Source-derived Teensy v05 carrier and v14 buzzer board insets above a separate ten-conductor electrical contact map. The cable rows do not join the connectors in the board artwork. Contact 2 supplies 5 V, contact 3 carries Teensy 24 control and contact 10 supplies ground." caption="Electrical contact map only; the physical installation drawing is incomplete. The board insets retain source placement, but the numbered cable rows are detached from their native connector contacts and autorouted on a separate schematic grid. Physical plug orientation, source-native fanout and cable fit remain unqualified. Prove each cable contact number end-to-end; do not infer a mating-face layout from the rows. No Prime connection is applicable." width=660 %}
{:/nomarkdown}

| Carrier GPIO socket J1 | Buzzer input J1 | Role |
| --- | --- | --- |
| 1 | 1 | 3.3 V forwarded to chain; no local buzzer load |
| 2 | 2 | Diode-fed 5 V through the module's selected supply link |
| 3 / Teensy 24 | 3 | HIGH requests sound; LOW requests silence |
| 4–9 / Teensy 25–30 | Same numbered contact | Forwarded to chain; no local buzzer load |
| 10 | 10 | Common ground and supply return |

Unused conductors remain present in the ten-core cable. They do not become grounds or extra power contacts. Leave the buzzer's chain socket and alternate three-pin input disconnected for the first example.

### Assemble and commission

The source has not reached physical qualification. This is the intended procedure for a subsequently reviewed assembly, not a report that these tests passed.

1. Disconnect all power. Confirm carrier **v05**, Qwiic population and Teensy orientation, and Buzzer **v14**. Check for contact between mounting hardware, the module and exposed pads. The v05 source specifically leaves a mounting-screw clearance issue open; do not assume its M3 holes are cleared for use.
2. Set the buzzer's supply link **JP1 to 1–2 only** for Gadgeteer 5 V; keep 2–3 open and alternate input J3 disconnected. Its source-default JP2 forwards contact 3 to the chain; leave the chain unused.
3. With the cable detached, meter 1→1 through 10→10 and check for crossed or adjacent shorted contacts. Verify the actual contact-1 markers on both boards before mating.
4. Join the carrier's **GPIO/Y socket J1** to the buzzer's **input J1**. The carrier's other socket letters and the buzzer's chain socket are different interfaces.
5. First power the Teensy alone from USB and check the carrier's rails. Remove power, connect the verified cable, then check the loaded module supply against its requirements before running the example. A green LED is only a presence indicator.
6. Program the Teensy with **Teensy 4.1** selected. Observe digital pin 24 with a suitable meter/oscilloscope, then check sound/silence. Remove power if supply or signal levels fall outside the selected source limits.

### Teensy program

This uses [PJRC's digital-output API](https://www.pjrc.com/teensy/td_digital.html). It is a source-derived example, **not compiled or run on this unbuilt carrier**. The selected buzzer is active: a steady HIGH requests its own tone; PWM pitch generation is unnecessary.

```cpp
constexpr unsigned int BUZZER_PIN = 24;  // Carrier GPIO J1 contact 3.

void setup() {
    digitalWrite(BUZZER_PIN, LOW);
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    digitalWrite(BUZZER_PIN, HIGH);
    delay(100);
    digitalWrite(BUZZER_PIN, LOW);
    delay(900);
}
```

Expected program sequence: 100 ms sound request, then 900 ms silence request. This does not qualify reset, bootloader, disconnected power or fault behavior. If pin 24 changes but there is no sound, check module contacts 2/10, its JP1 1–2 supply link, the connector and fitted local driver before changing the host pin.

### Smoothieware support

No adapter firmware is flashed, and no Smoothieware setting or G-code command applies to this independent Teensy-host circuit. Use a Teensy application and the peripheral's driver. The supplied board sources establish no Smoothieware bridge or Teensy-target support. If you need that support, email **[wolf.arthur@gamil.com](mailto:wolf.arthur@gamil.com)** with the revision, peripheral and intended use.

## Sources and revision notes

**v05** PCB, schematic and design contract supply this page's selected artwork and assignments. v01–v04 are retained earlier revisions; v05 adds ground-pour thermal relief to v04. A separate **v06** candidate describes pad-angle/justification/unconnected-net emitter fixes, smaller signal resistors, placement/routing and silkscreen changes. It is **not** this page's selected artwork. It does not supply v05's missing checks, and it is absent from the v01–v05 qualification manifest.

- [Selected v05 native CAD and two connector populations](https://github.com/arthurwolf/extension-boards/tree/main/src/teensy-to-gadgeteer-host/attempt/versions/v05)
- [v05 design contract](https://github.com/arthurwolf/extension-boards/blob/main/src/teensy-to-gadgeteer-host/attempt/design-contract.json)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/teensy-to-gadgeteer-host/specs.md), [design](https://github.com/arthurwolf/extension-boards/blob/main/src/teensy-to-gadgeteer-host/design.md) and [qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/teensy-to-gadgeteer-host/qualification.md)
- [Separate v06 changes](https://github.com/arthurwolf/extension-boards/blob/main/src/teensy-to-gadgeteer-host/attempt/versions/v06/build-info.json)
- [Buzzer v14 sources](https://github.com/arthurwolf/extension-boards/tree/main/src/buzzer-module/attempt/versions/v14) and [module guide](/extensions/buzzer-module)
- [PJRC Teensy 4.1](https://www.pjrc.com/store/teensy41.html), [pin cards](https://www.pjrc.com/teensy/pinout.html), [dimensions](https://www.pjrc.com/teensy/dimensions.html) and [schematics](https://www.pjrc.com/teensy/schematic.html)
- [Diagram source manifest](/images/extensions/teensy-to-gadgeteer-host/guides/source-manifest.json): exact inputs, complete connector-pad identities, source-to-art transform, all 31 signal paths and ten routed electrical cable conductors.

**Open qualification:** KiCad loading, ERC/DRC/parity; native cable fanout and physical plug mapping; loaded power, back-feed, hot-plug, ESD and host/peripheral tests; Teensy 4.0 fit; and desktop/narrow viewer acceptance. A generated SVG or source geometry precheck proves none of these. Carrier source license: CERN-OHL-S-2.0. Printed URL: `smoothieware.org/extensions/teensy-to-gadgeteer-host`.
