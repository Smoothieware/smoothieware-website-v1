# Smoothieboard/OpenPnP dual-head pick-and-place prototype

**Evidence depth:** exact-project identity and selected assembly-level facts are supported by the Appropedia catalogue row and John Deglavina’s Hackaday project log. Neither publishes the prototype’s physical connector/contact schedule. OpenPnP-OpenBuilds details below are a separate antecedent reference, not exact-prototype wiring.

## Catalogue identity

The Appropedia catalogue names John Deglavina, calls the machine a Smoothieboard/OpenPnP dual-head pick-and-place prototype, and says its model is based on OpenPnP-OpenBuilds. The row marks the license unclear and does not publish a pin map.

## Exact-project log evidence — 2026-09-28

The exact [Hackaday project log](https://hackaday.io/project/162599-pick-and-place-machine-smoothieboardopenpnp) says the build uses OpenPnP-OpenBuilds as a starting point while drawing on multiple machines. Its component list names one Smoothieboard 5X (originally acquired as 4X because of availability, then upgraded by adding components), OpenBuilds frame parts, 3D-printed automatic feeders, a desktop pick-and-place material stack, and a dual head with linear rails. Project logs/photos also describe two vacuum sensors on the controller, cameras, a feeder assembly, solenoids and vacuum pump, and LED lighting.

These establish identity or assembly-level context only. The exact-project material does not identify fitted machine-side contact numbers/cavities or a mapping from these functions to the Smoothieboard’s external headers. It does not specify motor driver wiring, endstop terminals, sensor conductors, accessory output channels, a mating-face view or an external connector pin schedule. Keep every such contact assignment and every SmoothieBox route OPEN. The controller photo shows an installed board and cables but is not a legible contact schedule.

## Ancestor boundary: OpenPnP-OpenBuilds

Separate [build instructions](https://github.com/openpnp/openpnp-openbuilds/wiki/Build-Instructions), [electronics/plumbing diagram](https://github.com/openpnp/openpnp-openbuilds/blob/develop/Images/Electronics%20and%20Plumbing.png), and [Smoothie config](https://github.com/openpnp/openpnp-openbuilds/blob/develop/Smoothie/config) describe the OpenPnP-OpenBuilds community design. The instructions themselves say the build is incomplete and inventive. Its config assigns Smoothie MCU software pins to axes, endstops and accessories, and the diagram shows groups of motors, switches, solenoids, pump and LED. Neither source is evidence that the wiki-209 prototype uses the same hardware connections; the MCU software labels are not numbered connector cavities. Do not copy those assignments into wiki-209 as fitted pins or routes. The corresponding ancestor machine has its own atlas profile (`wiki-184`); keep it distinct.

## Sources

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue identity.
- [John Deglavina — exact Smoothieboard/OpenPnP project](https://hackaday.io/project/162599-pick-and-place-machine-smoothieboardopenpnp) — prototype components, logs and photos.
- [OpenPnP-OpenBuilds instructions, image and config](https://github.com/openpnp/openpnp-openbuilds/wiki/Build-Instructions) — separate ancestor design only.
