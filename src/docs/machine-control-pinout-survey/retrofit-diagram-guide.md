> Superseded presentation rules: read [the current machine wiring design rules](machine-wiring-design-rules.md) first. The current square controller layout and separate machine-page contract take precedence over the older placement instructions retained below.

# Machine retrofit diagrams and upgrade instructions

## Purpose

Help an owner decide whether a SmoothieBox, Smoothieboard V2 Core, or V2 Prime can replace or work with the existing machine controller, what hardware remains or must be added, and how each machine circuit connects. The main diagram is an installation guide, not a connector census.

## Evidence and uncertainty

1. Identify the exact machine, controller, drive, supply, and peripheral revisions in the cited sources. Separate reported fitment from manufacturer-family references and proposed hardware.
2. Use primary schematics, manuals, datasheets, and the exact machine's wiring diagrams where available. Cite page/sheet, revision, URL, and the exact claim supported. Distinguish logical signals, connector contacts, cable cores, and physical terminals.
3. Never transfer a pinout between superficially similar revisions or machines. Never infer a mating-face numbering, connector polarity, voltage, current, or electrical common from wire colour or connector shape.
4. When a proposed relationship is plausible but not established, draw it dotted and mark it `GUESS` in the legend. Give the evidence, the uncertainty, and a concrete measurement/manual check. A guess is not permission to energize it.
5. Keep confirmed source facts, proposed routes, and unresolved facts visibly distinct. An unknown detail should block only the affected connection when the rest of the system can still be explained.
6. Follow an unnamed PCB net into the matching schematic before declaring an output unidentified. Check the exact IC package pin map, connector footprint and recommended current limits; a shared rail name or a transistor maximum rating does not establish safe connector current.
7. A manufacturer pin assignment proves a terminal function, not an installed retrofit wire. Draw added controller/interface conductors as guesses even when both endpoint functions are sourced. Keep factory internal connections separate from wires the owner must install.

## Decide the conversion before drawing

For each machine, state a short retrofit plan: controller being removed/retained; Smoothie target and board revision; retained motors/drives/sensors/spindle/laser/safety equipment; replacement or added drivers, interface boards, relays, converters, and power supplies; unsupported functions; and unresolved prerequisites. Do not present a reference inventory as a conversion plan.

Assess SmoothieBox, V2 Core, and V2 Prime independently against their sourced physical pinouts, electrical ratings, firmware functions, and supported axes/features. A proposed SmoothieBox carrier schedule is not a Core or Prime connector schedule. Do not claim a target supports closed-loop servo, high-voltage I/O, or safety functions without evidence. Where hardware cannot make a direct connection, name the required interface or mark the function unsupported pending research.

## Main diagram

Give each machine one dominant, readable diagram organized around functional circuits. Show the path from the Smoothie target through any interface/peripheral to the machine load or sensor. Identify every device by model/revision and every physical terminal by connector plus pin/terminal mark. Show signal direction and separate logic/control, field I/O, motor power, spindle/laser power, mains, protective earth, and safety domains.

Include applicable complete paths:

- Stepper/servo command → required signal interface → driver command input; separately show driver DC supply and each motor/encoder connection. Never wire a motor winding to a STEP/DIR output.
- Endstop, home, probe, and fault circuits: signal, required supply, return/reference, polarity/type, conditioning, and destination.
- VFD/spindle command, run/enable, fault/feedback and the VFD-to-spindle power path, with any required isolated analog/PWM converter. Never connect controller logic directly to VFD mains or motor output.
- Laser control through the specified laser driver/PSU terminals, including command reference, enable and retained hardware interlocks. Keep hazardous power and safety-chain behavior explicit; software outputs are not safety interlocks.
- Printer heaters, bed, fans, thermistors/RTDs, and power domains when present, including the required switching/interface and sensor type.
- Supplies, protective earth, shields, and returns where the source and electrical design establish them. Label a deliberately separate return or safety path; do not silently omit it.

Keep DB25/DB44/IDC and other machine-side connectors as peripheral blocks that the Smoothie wiring connects into. Label all relevant contacts individually, including signal, ground/return, supply, shield, NC, and unused contacts. Do not turn an unsupported connector into an assumed standard pinout.

## Supporting instructions and complete pin schedule

Immediately with the diagram, provide: chosen retrofit architecture; required parts/interface ratings; exact terminal-to-terminal wiring table; conductor purpose and direction; board/drive configuration; staged de-energized inspection and commissioning checks; and specific unknowns that prevent connection. Tie every table row to endpoints in the diagram.

Account for every pin the source identifies and every target pin used. Preserve individual labels such as `X axis STEP`, `X axis min endstop signal`, and `X axis min endstop GND`; do not collapse banks into counts. Mark unused pins explicitly. Distinguish physical contacts from logic nets, inferred form positions, and source-unlisted positions. Keep service/reference inventories and source transcription detail in collapsed supporting sections so they do not overwhelm the main diagram.

## Page and profile presentation

Make the retrofit diagram and the owner-facing answer visible before source inventories. Keep prior published attempts in collapsed chronological history. A named page filter may isolate a chosen profile set, but it must preserve the default complete list, explain its state in visible text, work by keyboard, and not rewrite/remove profile content. Keep navigation and figures usable on desktop and mobile.

## Acceptance gate for each machine

An owner unfamiliar with the research can identify the selected Smoothie target, required retained/added hardware, and every connection required for the documented conversion from the main view and concise instructions. Every circuit shown has both ends and its necessary return/power/reference paths accounted for, or a clearly bounded unresolved dependency. All contacts are individually accounted for in the supporting schedule. Guess lines are dotted, explained, evidence-linked, and paired with checks. Revisions, unsupported functions, safety boundaries, and source limits are explicit. The SVG renders legibly at page size and when enlarged, its labels match the text/table, and the page filter works without hiding other profiles by default.

## Controller-centered main view: selected hardware architecture

Classify the original motion power stages before drawing the replacement:

- Separate stepper or servo drives accepting command signals: use SmoothieBox exterior STEP, DIR and ENABLE fields, with each separate field ground. The drive retains its motor-power, winding and feedback circuits. Never label an exterior case terminal with an internal Core header number.
- Drivers on the board being replaced: use V2 Prime motor phase outputs directly to measured winding pairs. Do not invent new external stepper drivers for this main path, and never attach a STEP/DIR signal to a motor coil.
- Analog-only servo systems require a demonstrated command-mode conversion or a retained compatible controller. A pulse-command field is not an analog closed-loop position controller.

The main drawing has one continuous controller enclosure in the center, devices around it, and one traceable wire per conductor. Pack related simple circuits on both sides. Keep intermediate interfaces and their returns explicit. Distinguish included, fitted, optional and unsupported accessories. Draw the probe, endstop, laser, air-pump, spindle, thermal, safety and operator interfaces established by the machine inventory; identify every unconnected terminal as unused or unresolved.

Immediately beneath it, list every wire ID, both physical endpoints, explained electrical purpose, source claim with a direct link, and the remaining qualification. A source describing a component does not prove a new retrofit cable; proposed routes remain dotted. Source the controller contact and receiving interface independently. Keep prior detailed drawings below this selected main path.
