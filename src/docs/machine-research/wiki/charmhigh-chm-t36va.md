# Charmhigh CHM-T36VA pick-and-place machine

**Wiki evidence status:** London Hackspace lists the exact model as working and training-required (last edited 2022-05-12). Model-specific community documentation adds a machine layout, motion/peripheral inventory, a rear RS-232 connector and USB-B camera-capture connection. This does not establish the installed unit's board revision, firmware, connector cavity functions, or present status.

## Identity and status

London Hackspace lists “Charmhigh CHM-T36VA Pick-and-Place Machine” in its Fabrication inventory. The inventory says it is located in the Murder Kitchen, working, and training-required. The wiki entry was last updated 12 May 2022; that date means the status is historical and should not be treated as a live machine check.

## Model-specific interface evidence

The OpenPnP community's CHMT36VA material describes an internal STM32F407 controller, X/Y closed-loop NEMA 23 steppers with optical encoders, a Z homing disk, two nozzle-rotation steppers, two mechanical X/Y home switches, vacuum and blower hardware, a drag-pin solenoid and sensor, lighting, buzzer, cameras and feeders. These are model-family descriptions, not proof of the London machine's fitted options.

The same community documentation identifies a rear nine-pin RS-232 connector and a USB-B connector routed to the camera capture card. Its later CHM-T36VA firmware repository publishes a stock-controller GPIO assignment file, but explicitly says no official schematics are available. Those MCU assignments are controller design references, not exposed machine harness contacts; they do not establish any SmoothieBox route. The RS-232 pin functions and connector view are not established by the source. USB-B contacts may be named by the standard only; the exact connector implementation/revision is unverified.

## Operation, pinout, and visuals

The London Hackspace wiki material contains no machine-specific wiring map. Charmhigh's 48-page CHM-T36VA User Manual says this model requires a computer, installation of a USB-to-serial driver, a USB-to-serial line, and a separate USB camera line (p. 3). This corroborates separate host-control and camera links but supplies no serial connector view or contact assignments. Community documentation identifies the rear nine-pin link as RS-232; it does not map the DE-9 contacts. No external driver, sensor, actuator, or serial connector pin assignment is verified for the London installation. Do not infer that a source-reverse-engineered controller GPIO is an accessible harness pin.

## Source

- [Equipment — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Equipment) — exact model, location, historical working status and training requirement.
- [CharmHigh CHMT36VA — OpenPnP wiki](https://github.com/openpnp/openpnp/wiki/CharmHigh-CHMT36VA) — community model-family description, machine peripherals and rear serial/USB interface.
- [Charmhigh modifications for OpenPnP](https://github.com/openpnp/openpnp/wiki/Charmhigh-modifications-for-OpenPnP) — board location, four-pin programming header and retrofit procedure; not an installed-unit pinout.
- [Smoothieware-CHMT source repository](https://github.com/c-riegel/Smoothieware-CHMT) — community firmware for stock STM32F407 control board; states that official schematics are unavailable. Its branch `chmt` `src/config.default` maps logical MCU ports to functions but does not document accessible external harness contacts.
- [USB-B connector pin assignment](https://onlinedocs.microchip.com/oxy/GUID-235ED391-98DA-4853-8086-D8B4EA690956-en-US-2/GUID-DE6538AF-320C-46DC-88EF-BAFEEF4622A6.html) — standard four-contact USB mapping, applied as connector-standard reference only.
- [CHM-T36VA User Manual (Charmhigh)](https://www.charmhigh-smt.com/file/datasheet/chm-t36va_user_manual_new.pdf) — p. 3 requires a computer-side USB-to-serial link and a separate USB camera cable; no connector pinout is given.

**Unknowns:** current status and installed revision; external driver/harness terminals; full serial connector function assignments and mating view; safety circuit; exact camera-capture USB implementation; peripheral wiring, polarities, ratings and returns. No machine-side route is established.
