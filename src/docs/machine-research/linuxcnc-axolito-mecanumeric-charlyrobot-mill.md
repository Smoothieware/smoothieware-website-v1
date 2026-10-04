# Axolito's Mecanumeric / Charlyrobot school-fablab mill retrofit

## Machine and conversion

LinuxCNC Forum member Axolito describes retrofitting a “small” Mecanumeric / Charlyrobot milling machine at a French high-school fablab. The post says Charlyrobot was the actual manufacturer and the two companies later merged. It does not state the machine's model, serial number, or dimensions. The machine had been at the school for years and originally used a Windows XP PC with proprietary control software; the owner says its motherboard had developed several problems.

The owner reports reverse-engineering the machine wiring and implementing a replacement control using LinuxCNC and a Mesa 7i96S. The build also includes newly purchased drives, an MDF operator panel cut on a larger CNC, an Arduino-based panel interface using the Arduino Connector project, and a salvaged industrial touchscreen. The owner added a cover-open interlock that prevents program execution, a relay-controlled vacuum cleaner, and a tool probe made from a microswitch and 3D-printed parts.

The November 2024 post describes the retrofit as implemented largely as intended, but does not report production operation or a completed acceptance test. Treat it as an owner-reported retrofit state, not independently verified commissioning.

## Wiring evidence and limits

The owner states that the wiring was reverse-engineered, but the inspected posts do not publish a connector map, terminal assignments, electrical schematic, voltage/current ratings, drive models, motor details, or a complete I/O table. The thread includes photographs of the machine and retrofit details; those are installation evidence, not proof of individual wire paths or safety validation. No machine-specific contact pinout can be transcribed from the text.

## Forum source

- Axolito, “[Mecanumeric / Charlyrobot retrofit](https://forum.linuxcnc.org/show-your-stuff/54512-mecanumeric-charlyrobot-retrofit),” LinuxCNC Forum, posts dated 2024-11-19 and 2024-11-20.
