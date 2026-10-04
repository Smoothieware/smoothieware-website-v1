# OpenPnP-OpenBuilds

**Evidence depth:** benchtop pick-and-place machine. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue describes an OpenPnP-compatible SMT pick-and-place machine based on OpenBuilds linear-motion components and marks it as somewhat outdated. It supplies no axis dimensions or electrical map.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The project's [build instructions](https://github.com/openpnp/openpnp-openbuilds/wiki/Build-Instructions) were last edited 2015-12-04 and describe a dual-nozzle Cartesian pick-and-place build with belt-driven X/Y, two Z axes and two rotary C axes. They warn that the documentation is incomplete and the builder must resolve design details; treat this as a community build, not a standard production configuration.

The original [electronics/plumbing diagram](https://raw.githubusercontent.com/openpnp/openpnp-openbuilds/develop/Images/Electronics%20and%20Plumbing.png) and [Smoothie configuration](https://raw.githubusercontent.com/openpnp/openpnp-openbuilds/develop/Smoothie/config) supply a specific builder's functional wiring and MCU software-pin assignments. The captured `develop/Smoothie/config` SHA-256 on 2026-09-23 was `94de9527f0b13a09818db64d93974b965849dc4d6730a3fde9a9eb33718605fd`.

| Function in this builder configuration | Smoothie MCU pin label |
|---|---|
| X step / direction / enable | `2.0` / `0.5!` / `0.4` |
| Y step / direction / enable | `2.1` / `0.11!` / `0.10` |
| Z step / direction / enable | `2.2` / `0.20!` / `0.19` |
| Nozzle 1 step / direction / enable | `2.3` / `0.22` / `0.21` |
| Nozzle 2 step / direction / enable | `2.8` / `2.13!` / `4.29` |
| X min / Y max / Z min endstop | `1.24^` / `1.27^` / `1.28^!` |
| N1 vacuum / exhaust outputs | `2.7` / `2.5` |
| N2 vacuum / exhaust outputs | `2.4` / `2.6` |
| Vacuum pump / LED output | `1.23` / `1.22` (PWM) |

The `!` and `^` characters are literal Smoothie configuration modifiers. These entries are MCU software-pin names, **not connector contact numbers**. The builder says X/Y home switches are NC and documents the Z switch as NO because its NC contact was broken. The diagram and configuration are a 2015-era community design reference; they do not establish a local machine's board revision, mating face, harness, or production wiring.

The [Electronics and Plumbing diagram](https://github.com/openpnp/openpnp-openbuilds/blob/develop/Images/Electronics%20and%20Plumbing.png) was retrieved and visually inspected on 2026-09-28 (SHA-256 `7ab7482721be9f12b9ceb4ce46b3c90118afcf8650988556f63197375973a730`). It depicts the Smoothieboard, five four-wire motor-driver headers, X/Y/Z home-switch groups, S1–S4 solenoids, vacuum pump, ring LED, and 12 V supply. Its drawn wires and component groups have no numbered machine-side connector/contact schedule; do not turn schematic wire order into a plug pinout. The current `develop/Smoothie/config` bytes retain SHA-256 `94de9527f0b13a09818db64d93974b965849dc4d6730a3fde9a9eb33718605fd`. The controller function table above covers all configured step/direction/enable, fitted min/max endstop, and accessory output software pins; unconfigured `nc` endstops are explicitly not present in that build configuration. Neither artifact proves the catalogue's fitted hardware or gives physical `GND`/supply/signal cavities on external plugs.
