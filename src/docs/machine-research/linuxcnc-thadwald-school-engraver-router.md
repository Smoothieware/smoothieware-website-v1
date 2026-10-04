# thadwald's school engraver/router retrofit

## Machine and conversion

LinuxCNC Forum member thadwald documents a school engraver/router whose manufacturer and model are not stated. It had originally run from a printer-driver-style engraving system. The owner retrofitted it for G-code machining with LinuxCNC, using a 27-inch iMac as the main computer, a Mesa 7i96 for primary I/O, and a Mesa 7i73 pendant card to reuse the original panel's roughly 20 matrix-arranged membrane buttons and similarly numerous LEDs.

The owner reports replacing the original stepper motors with Teknic ClearPath SKSD integrated servo motors, controlled by step and direction. The original Toshiba VF-9 spindle drive was replaced with an AutomationDirect GS2 because the Toshiba unit did not provide the desired Modbus communication. The owner added two latching buffers to drive the panel LEDs and multiplex output signals after running out of direct outputs. Multiplexing was implemented in HAL; the owner describes this as an experiment rather than a recommended general approach.

The owner reports completing the retrofit and says the machine worked as a router. A later reply identifies leadscrews and round recirculating ball ways, which the owner called the system's weakest mechanical part and suited to its intended engraving and light wood-routing work. The owner specifies an air-cooled Elte spindle rated at 2 kW and 18,000 rpm with an integrated ER32 collet.

## Wiring evidence and limits

The owner states that the main I/O card, power supplies, and E-stop relays are inside the machine enclosure, while the 7i73, USB-to-RS232 converter, keyboard, and manual controls are in a custom panel. Forum attachments include LinuxCNC HAL and INI configuration files. The inspected forum text does not provide a verified physical terminal map, connector viewing convention, panel matrix wiring diagram, buffer schematic, or safety-circuit drawing. Configuration filenames and logical HAL names should not be interpreted as machine terminal numbers.

## Forum source

- thadwald, “[Engraver/Router Retrofit](https://forum.linuxcnc.org/show-your-stuff/36958-engraver-router-retrofit),” LinuxCNC Forum, posts dated 2019-07-12 through 2019-07-16.
