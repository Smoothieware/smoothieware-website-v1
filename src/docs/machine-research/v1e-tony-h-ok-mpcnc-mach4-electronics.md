# Tony H.'s Oklahoma MPCNC with Ethernet SmoothStepper and Mach4

**Machine identity:** Tony H. (`kausticklown`)'s individual MPCNC router build, described in a V1E forum build thread opened 25 October 2025. The thread describes an earlier and a current iteration; the identity of any reused frame parts is not fully documented, so this dossier treats it as one evolving machine and does not count the earlier iteration separately.

**Commissioning state:** The owner said he still needed to adjust the limit switches before the current build could run. On 25 October 2025 he explicitly said the current iteration had not made any cuts. He reported that the earlier STB5100/Mach3 version had made MDF spoil boards and a sign, but he was unhappy with the sign; the thread does not establish which parts of that earlier arrangement persisted in the current machine.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `kausticklown`, `My OK, USA MPCNC Build`, `Warp9 Ethernet Smooth Stepper`, `C25X`, and the thread identifier. No matching dossier was found. This is a named individual machine build, not a new MPCNC design.

## Mechanical build and work area

Tony said he began in winter 2023 and took a phased approach. The build uses 1-inch stainless tubing for the frame and standard MPCNC bearings, fasteners, lead screws, and related hardware. He printed parts in PLA; some were printed with Smooth-On Smooth Cast 326, and he reprinted corner parts with gyroid infill before backfilling them with two-part epoxy. He also placed cut timing belt between the 1-inch tubes and other parts to reduce slippage, used inductive limit switches, and made a custom clamp for a Ridgid R2401 router.

He first tried a homemade electronics cabinet with inexpensive mechanical switches and an STB5100 board. He described that first arrangement as only partly working. In the later build he added a fiberglass electronics enclosure and purchased drag chain after the chain he printed did not work as intended. He said he had recently got the frame square and that the earlier build had never been square. The forum thread gives no measured cutting area or squareness tolerance.

## Motion control and machine equipment

| Function | Owner-reported equipment/configuration | Limits of the evidence |
|---|---|---|
| Motion controller | Warp9 Ethernet SmoothStepper (ESS) | No firmware/configuration file or verified signal test is included. |
| Breakout | CNC4PC C25X breakout board | The post gives no numbered terminal/contact mapping. |
| Control software | Mach4 Hobby | The earlier iteration used an STB5100 controller with Mach3; the present arrangement is described as ESS/C25X/Mach4. |
| Motors/drives | Five Stepper Online 17HS19-2004S1 motors; driver model changed from TB6600 to DM542 | Driver current, step mode, and motor coil/contact assignments are not stated. |
| Limits | NPN inductive limit switches | Switch model, supply voltage, output wiring, and input assignments are not supplied. Switch positions still needed adjustment in the latest build post. |
| Router | Ridgid R2401, with the factory cord removed and replaced by an extended cord; custom clamp | No spindle-control interface is reported. |
| PC/network | Beelink EQR Mini PC with dual LAN; one interface reserved for a static ESS network, the other for web/remote desktop. Shielded CAT6 bulkhead connector between ESS and PC. | No IP settings, connector contact map, or grounding/shield termination details are included. |

## Electrical enclosure and operator controls

The owner listed a Mean Well 120-24 supply for the ESS and five Mean Well 60-24 supplies for the stepper drivers. In a later reply he said he used a separate supply for each driver because he wanted each one to have a dedicated supply; no electrical necessity or measured benefit was claimed.

The pictured enclosure contains the ESS/C25X control area, five stepper driver modules, and multiple power supplies. The owner also listed DIN rail, custom 3D-printed DIN-rail mounts, internal breakers, fused AC power, and power-indicator LEDs. His mains distribution has four circuits: two 15 A and two 20 A, with one 20 A circuit on a double-pole breaker intended to shut everything off in an emergency. He reported an operator-side E-stop and a second E-stop incorporated into the far side of the cabinet. He still needed to install 12 V PWM-controlled cabinet fans and a digital ammeter/voltmeter for the ESS supply and accessories.

These descriptions and the photos identify components and general enclosure layout only. They do not show a complete safe wiring schematic, protective-earth continuity, isolation boundaries, breaker coordination, E-stop contact arrangement, or verified signal assignments. The photos must not be read as a wiring diagram.

## Current work and unresolved items

On 25 October 2025 Tony said the remaining step before operation was setting and dialing in the limit-switch distances from the corners. He also said the current iteration had not cut material. The custom dust shoe was unfinished because he had not found sufficiently soft brushes; cooling fans and an ammeter/voltmeter were also listed as not yet installed. In December 2025 he said he planned to cut aluminum for another CNC build in the future; that is a separate future project, not evidence that this MPCNC has cut aluminum.

The thread contains no verified connector-level pinout, ESS signal-to-C25X mapping, motor coil map, inductive-switch contact assignment, or complete mains/E-stop wiring diagram. Do not use this dossier as construction or electrical safety instructions.

## Forum photos reviewed

The operator-station photo shows the assembled gantry and router over the worktable with the computer/keyboard station. It supports the machine's physical build and current workshop setup, but not evidence of a successful cut on this iteration.

![Tony H.'s MPCNC and operator station](https://us2.dh-cdn.net/uploads/db5587/original/3X/e/e/eeedf7bd50599c3d5b3791f3756b2ce6002281c0.jpeg)

The exterior photo shows the fiberglass control enclosure attached beside the table, with labelled operator controls visible on the panel. The inside photo shows the ESS/control board area, multiple stepper driver modules, and power-supply units. Neither image exposes a legible complete connection map, and no pin assignments are inferred from image appearance.

![Exterior of Tony H.'s MPCNC control enclosure](https://us2.dh-cdn.net/uploads/db5587/original/3X/9/e/9e0d72aed9328a4fda4432464aefda3321be7b7a.jpeg)

![Interior of Tony H.'s MPCNC control enclosure](https://us2.dh-cdn.net/uploads/db5587/original/3X/f/1/f168cb3973ae567a6c757ff77c2c2f2484c20238.jpeg)

Local forum-image review-copy SHA-256 values (respectively): `beaada44bd425d03679f48fd2e06eee9f4b9820ea9e66221d9a9d97b2f9c27f5`, `426e7cb8a48506fd24aca80ca1fd8877953daef8dc36061c31d913512ff985e8`, and `0aa12e2b2d4b1393f351450fee2bd8d6c13af6786efccbcd583666dc34beb8d5`.

## Forum sources

1. V1E.com Forum, Tony H. (`kausticklown`), [“My OK, USA MPCNC Build”](https://forum.v1e.com/t/my-ok-usa-mpcnc-build/51687), opening post and posts 2–4, 25 October 2025. The owner describes the frame, controller, wiring cabinet and latest commissioning state; post 4 explicitly distinguishes the uncut current iteration from the earlier STB5100/Mach3 setup.
2. Same thread, [posts 8–11](https://forum.v1e.com/t/my-ok-usa-mpcnc-build/51687/8), 7 November–1 December 2025. The owner clarifies why he chose separate supplies and describes plans for a future machine. No additional operation of the current MPCNC is reported there.
