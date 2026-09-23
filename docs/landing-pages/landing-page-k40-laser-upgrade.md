---
permalink: /landing-page-k40-laser-upgrade
title: K40 Laser Controller Upgrade with Smoothieboard
description: "Plan a K40 laser controller retrofit with Smoothieboard. Check wiring, power, interlocks, firmware, and software compatibility before installation."
---

# Upgrade a K40 Laser Cutter Controller with Smoothieboard

Smoothieboard is a controller option for a K40 laser cutter when the machine's motor, endstop, laser power control, power supply, and safety interlock connections have been identified and matched to the chosen board. K40 and blue box machines have different controller and power supply revisions, so there is no universal drop-in wiring plan.

Start with the [general laser cutter installation guide](/laser-cutter-guide), then read the [blue box laser guide](/bluebox-guide) for a machine-specific example. Check that its board and power supply match your machine before using any of its wiring details.

## Check your machine before buying parts

- Record the existing controller and laser power supply model and revision. Photograph and label every connector before disconnecting it.
- Identify each stepper motor, endstop, laser control signal, and return path from documentation or measurements made by a qualified person. Do not infer a pinout from wire color alone.
- Confirm the selected Smoothieboard model's input power and electrical interface requirements. Do not assume the K40's existing 5 V rail can power it.
- Keep the door, emergency stop, and any water-flow interlocks effective independently of software. Have a qualified person assess mains and laser power supply wiring.
- Decide which firmware version and host software you will use before adapting a configuration example. A guide for one Smoothieboard generation may not apply to another.

A controller replacement is not a repair for a faulty laser tube, power supply, cooling system, or unsafe enclosure. Diagnose those separately before a retrofit.

## Installation path

1. Read the [laser cutter guide](/laser-cutter-guide), including its safety and power sections.
2. Compare your machine with the [blue box guide](/bluebox-guide). Mark every connection that differs or remains unknown.
3. Select a board and power arrangement only after checking those interfaces against the board documentation.
4. Configure and test motors and endstops with laser power disabled.
5. Have a qualified person verify laser control and every hardware interlock before enabling the laser. Test the completed machine under supervision.

The [wiring guide](/how-to-wire) explains general Smoothieboard connections; it is not a universal K40 connector map.

## Software compatibility

[LightBurn lists Smoothieware among supported G-code controller firmware](https://docs.lightburnsoftware.com/2.0/Explainers/LaserTypes/) and [states that it does not support the stock M2 Nano controller found in many K40 machines](https://lightburnsoftware.com/pages/which-version-do-i-need). Replacing an M2 Nano with a compatible controller can make LightBurn an option, but the exact board, firmware, connection method, and features still need verification. Configure the board using the documentation for its firmware version.

## Common questions

**Is a Smoothieboard retrofit plug and play?** No. Verify the machine's connector functions, voltage levels, power needs, and interlocks before making connections.

**Can I reuse the stock power supply?** That depends on the exact power supply and selected board. Do not connect an unverified supply rail or laser control signal to the board.

**Will LightBurn work?** LightBurn lists Smoothieware as supported firmware, but specific features and connections depend on the hardware and configuration. Check the [LightBurn documentation](https://docs.lightburnsoftware.com/2.0/Explainers/LaserTypes/) for your setup.

**Where can I get a Smoothieboard?** See the [current Smoothieboard options at Robosprout](https://www.robosprout.com/product-category/smoothieboards/). Check the current product specifications and price before ordering.

**Found an error?** [Contact the documentation maintainers](mailto:wolf.arthur@gmail.com) so we can correct it.
