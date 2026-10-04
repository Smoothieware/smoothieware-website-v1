# Sculpfun SF-A9

**Evidence depth:** manufacturer user manuals located for the SF-A9 20 W and 40 W configurations, supplementing the original Appropedia catalogue lead. The 20 W manual labels three external ports and several physical controls/accessories, but provides no numbered machine connector pinout.

## Wiki-supported identity and facts

The Appropedia wiki names the SF-A9 as a diode-laser model. Sculpfun's [download center](https://www.sculpfun.com/pages/download-center) separately lists SF-A9 20 W and SF-A9 40 W user manuals. The 2023 [SF-A9 20 W manual, Version A](https://cdn.shopify.com/s/files/1/0628/0695/0066/files/SCULPFUN_SF-A9_20W_User_Manual_1.pdf?v=1780023301) identifies the included laser head as 20 W and gives a product/assembly and software-connection description. The separate 40 W manual is not evidence about the 20 W candidate configuration.

## Use, visuals, and electrical connections

The manufacturer's 20 W Version A manual (140 pages; downloaded PDF SHA-256 `cc698ffa2c48b6b2ae29799fca84d955591b6c726250a54f0332f6b0878f91b0`) was inspected at its machine overview and assembly/port drawings (manual pp. 3–6). The PDF identifies the included laser head as 20 W; this does not identify the power of the local wiki candidate. Its manual describes the machine's external interfaces by role: data-line interface, air-pump interface and power interface. It directs the user to connect the data line to a computer, connect the air pump power cord to the machine's air-pump interface, then connect machine power. It also documents USB and Bluetooth PC connection modes and an app workflow over Wi-Fi. The port diagram labels Data line interface, Air pump interface, and Power interface. It also identifies a BT/WiFi antenna, laser head, emergency-stop knob, switch button and key switch. The product list includes a motor wire for a rotary axis. These labels establish named peripherals or controls, not connector cavity schedules. The manual does not specify contact count/order, connector standard, voltage, current, polarity, motor coil order, or a laser-head signal pinout.

| Source-named peripheral/control | Manual evidence | Contact assignment |
|---|---|---|
| Data-line interface | Port label in machine view; connect to computer. PC connection section describes USB and a CH340 serial port. | Contact count, connector standard, and pin schedule not supplied. |
| Air-pump interface | Port label in machine view; accepts the air-pump power cord. | Contact count, supply voltage, and polarity not supplied. |
| Power interface | Port label in machine view; receives machine power. | Contact count, connector standard, voltage, and polarity not supplied. |
| Emergency-stop knob | Physical control identified in machine overview. | Switch contacts and safety-circuit topology not supplied. |
| Switch button | Physical control identified in machine overview. | Contact assignments not supplied. |
| Key switch | Physical control identified in machine overview. | Contact assignments not supplied. |
| BT/Wi-Fi antenna | Antenna is shown on the machine. | RF connector/contact details not supplied. |
| Laser head and cable | Included head is 20 W in this manual; head is mounted on X axis and connects by cable. | Cable pin count, voltage, and signal assignments not supplied. |
| Rotary-axis motor wire | One accessory wire is listed for the rotary axis. | Machine-side connector and motor contact assignments not shown. |

The manual identifies an emergency-stop knob, switch button and key switch; these labels establish physical controls, not switch contacts or the safety-circuit design. The source's default network details are omitted because they are not wiring facts and can be changed by the owner.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [SCULPFUN Download Center](https://www.sculpfun.com/pages/download-center) — separately lists SF-A9 20 W and 40 W manuals. The 40 W manual is not used for this 20 W source interpretation.
- [SF-A9 20 W Machine User Manual, Version A](https://cdn.shopify.com/s/files/1/0628/0695/0066/files/SCULPFUN_SF-A9_20W_User_Manual_1.pdf?v=1780023301) — manufacturer manual; 2023 copyright, external interface roles and operating/software workflow.
- [SF-A9 40 W Machine User Manual](https://cdn.shopify.com/s/files/1/0628/0695/0066/files/SCULPFUN_SF-A9_40W_User_Manual_1.pdf?v=1780023377) — distinct power configuration, not used to fill 20 W wiring gaps.

**Unknowns:** local candidate's laser-power variant, serial/controller/firmware revision, connector contact maps and ratings, laser-head electrical signals, and exact wiring of the key, E-stop and interlocks.
