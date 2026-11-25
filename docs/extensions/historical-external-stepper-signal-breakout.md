---
layout: default
title: "External STEP/DIR signal breakout"
permalink: /extensions/historical-external-stepper-signal-breakout
---

# External STEP/DIR signal breakout

This passive board redistributes one V2 control header into three external-drive command connectors. It carries STEP, DIR and a shared ENABLE; it does not contain motor power stages and cannot drive motor windings directly. It is useful when connecting separately powered commercial drivers with compatible logic inputs.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/StepXternal/tree/4f8760bac438c3a078ac421ea79f2562bbb123f2) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1 contacts 3–9 are DIR1,STEP1,STEP2,STEP3,DIR2,DIR3,ENABLE. J2/J3/J4 each use 1 selected +V, 2 STEP, 3 DIR, 4 shared ENABLE, 5 ground. JP1 centre +V selects host 5 V or 3.3 V. The selected rail supplies the external logic interface, not the motors; its current budget and the drive input topology must be checked. No isolation or universal optocoupler compatibility is implied.


### Supply selection does not change signal voltage

JP1 selects the voltage distributed to the output supply contacts. STEP, DIR and ENABLE remain passive signal connections: selecting 5 V does not turn a Prime 3.3 V GPIO output into a 5 V signal.

For example, the [Leadshine DM542E manual](https://www.leadshine.com/upfiles/downloads/d5375bf4c28b5c75b2d150c9762781c9_1651052967281.pdf), printed page 3, specifies a 4.5–5 V logic HIGH in 5 V mode, a 0–0.5 V LOW, pulses of at least 2.5 µs and direction setup of at least 5 µs. Its factory 24 V input selection must be changed with S2 for 5 V operation. Direct 3.3 V GPIO drive does not meet that HIGH requirement. A complete example with this drive needs a specified buffer or sink circuit, including input-current, return-path and power-sequencing checks; JP1 alone cannot provide it. Other drives require their own interface review.

## Board-reference diagram

These source-matched reference sheets show the historical board’s actual artwork, connector contacts and supply selector. The highlighted locations refer to PCB geometry, not a cable mating face. Read the numbered contact sheets before choosing any connection. They do not qualify a powered installation.

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-overview" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/overview.png" title="Historical external STEP/DIR board overview" alt="Historical external STEP/DIR board overview — historical source geometry and numbered contacts" caption="Source-matched board reference. This passive board distributes command signals; it contains no motor power stage. Signal voltage, mating and powered operation require separate checks." width=420 %}

### Host and drive contacts

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-J1-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/j1-pins-1.png" title="Host J1 contacts 1–5" alt="Host J1 contacts 1–5 — historical source geometry and numbered contacts" caption="Contact numbers and source net names identify this pinned PCB. Locations are not a mating-face or cable-orientation guarantee; STEP, DIR and shared ENABLE remain passive signals." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-J1-pins-2" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/j1-pins-2.png" title="Host J1 contacts 6–10" alt="Host J1 contacts 6–10 — historical source geometry and numbered contacts" caption="Contact numbers and source net names identify this pinned PCB. Locations are not a mating-face or cable-orientation guarantee; STEP, DIR and shared ENABLE remain passive signals." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-J2-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/j2-pins-1.png" title="Drive channel 1 · J2" alt="Drive channel 1 · J2 — historical source geometry and numbered contacts" caption="Contact numbers and source net names identify this pinned PCB. Locations are not a mating-face or cable-orientation guarantee; STEP, DIR and shared ENABLE remain passive signals." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-J3-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/j3-pins-1.png" title="Drive channel 2 · J3" alt="Drive channel 2 · J3 — historical source geometry and numbered contacts" caption="Contact numbers and source net names identify this pinned PCB. Locations are not a mating-face or cable-orientation guarantee; STEP, DIR and shared ENABLE remain passive signals." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-J4-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/j4-pins-1.png" title="Drive channel 3 · J4" alt="Drive channel 3 · J4 — historical source geometry and numbered contacts" caption="Contact numbers and source net names identify this pinned PCB. Locations are not a mating-face or cable-orientation guarantee; STEP, DIR and shared ENABLE remain passive signals." width=420 %}

### Supply selector and mounting

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-JP1-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/jp1-pins-1.png" title="Supply selector JP1" alt="Supply selector JP1 — historical source geometry and numbered contacts" caption="JP1 centre contact is +V; the outer contacts are +5 V and +3V3. The footprint does not prove the fitted solder bridge. Supply selection does not translate signal levels." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-H1-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/h1-pins-1.png" title="H1 mounting hole" alt="H1 mounting hole — historical source geometry and numbered contacts" caption="Unnumbered mechanical hole with no assigned electrical net. Fastener fit and assembled clearances require verification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-reference-H2-pins-1" src="/images/extensions/historical-external-stepper-signal-breakout/guides/annotated-reference/h2-pins-1.png" title="H2 mounting hole" alt="H2 mounting hole — historical source geometry and numbered contacts" caption="Unnumbered mechanical hole with no assigned electrical net. Fastener fit and assembled clearances require verification." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/StepXternal.kicad_pcb), revision `4f8760bac438c3a078ac421ea79f2562bbb123f2`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-signal-breakout-factual-j2-signals" src="/images/extensions/historical-external-stepper-signal-breakout/guides/factual-circuits/j2-signals-font-matched.png" title="Driver J2 shared logic" alt="Driver J2 shared logic — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-signal-breakout-factual-j3-signals" src="/images/extensions/historical-external-stepper-signal-breakout/guides/factual-circuits/j3-signals-font-matched.png" title="Driver J3 shared logic" alt="Driver J3 shared logic — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-signal-breakout-factual-j4-signals" src="/images/extensions/historical-external-stepper-signal-breakout/guides/factual-circuits/j4-signals-font-matched.png" title="Driver J4 shared logic" alt="Driver J4 shared logic — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-external-stepper-signal-breakout-factual-supply-selector" src="/images/extensions/historical-external-stepper-signal-breakout/guides/factual-circuits/supply-selector-font-matched.png" title="Conditional supply selection" alt="Conditional supply selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| StepXternal.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: DIR1; 4: STP1; 5: STP2; 6: STP3; 7: DIR2; 8: DIR3; 9: EN; 10: GND |
| StepXternal.kicad_pcb | J2 | Conn_01x05_Male | 1: +V; 2: STP1; 3: DIR1; 4: EN; 5: GND |
| StepXternal.kicad_pcb | J4 | Conn_01x05_Male | 1: +V; 2: STP3; 3: DIR3; 4: EN; 5: GND |
| StepXternal.kicad_pcb | J3 | Conn_01x05_Male | 1: +V; 2: STP2; 3: DIR2; 4: EN; 5: GND |
| StepXternal.kicad_pcb | JP1 | SolderJumper_3_Bridged12 | 1: +5V; 2: +V; 3: +3V3 |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For one external stepper drive, select its exact logic interface and identify pulse/direction/enable polarities from its manual. Keep motor power disabled while mapping J2 to those inputs. A conditional GF/J37 allocation gives STEP1=J37.4 PJ4, DIR1=J37.3 PB1 and ENABLE=J37.9 PJ2, matching the board contact order rather than modern breakout assumptions. Select JP1 only after confirming rail compatibility and verify both enable states before any motor movement.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware: named single-motor bench example

The passive breakout needs no device driver. This source-derived example uses channel 1 with a [Pololu #2128 A4988 Black Edition carrier](https://www.pololu.com/product/2128) and a secured, unloaded [17HS19-2004S1 motor](https://www.omc-stepperonline.com/nema-17-bipolar-59ncm-84oz-in-2a-42x48mm-4-wires-w-1m-cable-connector-17hs19-2004s1). It is a conditional diagnostic procedure, **not a tested installation or a complete machine configuration**. The required complete wiring illustration and physical mating checks remain open.

### Connect the selected channel

Use individually numbered leads; the breakout's five-pin header does not mechanically match the carrier. With every supply off:

| Prime GF/J37 | Breakout input | Breakout output → carrier |
|---|---|---|
| 3 · PB1 | J1.3 DIR1 | J2.3 → DIR |
| 4 · PJ4 | J1.4 STP1 | J2.2 → STEP |
| 9 · PJ2 | J1.9 EN | J2.4 → EN |
| 10 · GND | J1.10 GND | J2.5 → logic GND |

Connect Prime GF/J37.1 limited 3.3 V **separately to carrier VDD**. Verify the host rail's available current and fitted carrier load; the A4988 IC's 8 mA maximum logic-supply characteristic is not a complete carrier or host power budget. Do not parallel another 3.3 V supply onto Prime. Leave GF/J37.2, breakout J1.1/.2, J2.1 and every J3/J4 output disconnected. JP1's source footprint defaults to 1–2, selecting +5 V for unused +V; this example does not change that bridge or use that output rail.

On the carrier, connect RST and SLP to VDD, and MS1/MS2/MS3 to ground for full steps. Connect a separate 12 V motor supply only to VMOT and motor GND, with a common logic return. Follow Pololu's local decoupling instructions, including at least 47 µF electrolytic close to VMOT/GND; independently check capacitor voltage rating, polarity and supply transients. Never put motor voltage on the breakout or Prime logic headers.

For an actual post-2017 carrier with verified 0.068 Ω sense resistors, an example 0.5 A trip limit requires **VREF = 8 × 0.5 × 0.068 = 0.272 V**. Set and measure it following the carrier instructions, with motor power off; older 0.050 Ω assemblies need a different calculation. Full-step winding current is approximately 70% of the trip setting. This reduced-current example does not promise rated torque or thermal qualification. Supply current is not coil current.

Connect carrier 1A/1B to the named motor's Black/Green winding and 2A/2B to Red/Blue. Verify the actual winding pairs with power removed; never connect or disconnect motor leads while powered. The named motor has 1.8° full steps and a 2 A phase rating. Keep the shaft free of belts, screws, tools and loads.

### Configure and issue two slow pulses

Use an otherwise valid Prime configuration with alpha registered as X. Reserve these pins, merge entries into existing sections and remove conflicting owners. Disconnect all other actuators: **M17 enables every configured motor**. Alpha alone owns the shared enable line.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PJ4
alpha.dir_pin = PB1
alpha.en_pin = PJ2!
beta.en_pin = nc
gamma.en_pin = nc
```

These six settings do not program carrier current or microstep straps. The inverted enable drives physical LOW when enabled, as required by A4988. Host reset or loss of power does not guarantee a safe enable state. Keep motor power off during host startup and configuration; send `M18` and verify EN HIGH before enabling the motor supply. After checking rails, current reference, polarity and windings, send `M17`, wait at least five seconds, then:

```text
test pulse x 2
M18
```

At the pinned firmware revision, this diagnostic asserts STEP for five seconds, then deasserts it for five seconds, twice. It neither changes direction nor enables the motor itself. Two full steps request nominally 3.6° total, apart from initial rotor alignment; this is not measured motion or steps-per-millimetre calibration. Turn motor power off after `M18`; keep the host/common return connected until other supplies are off. Arbitrary hot-plugging and power order are not qualified.

The [A4988 datasheet](https://www.pololu.com/file/0J450/A4988.pdf) specifies 1 µs minimum STEP HIGH/LOW, 200 ns input setup/hold and logic thresholds of 0.7×VDD HIGH / 0.3×VDD LOW. Its input-current limits are ±20 µA under the stated tests. A common 3.3 V logic supply avoids the DM542E's incompatible 5 V-mode HIGH requirement, but fitted Prime output margins, carrier loading, cabling, resets and fault handling still need verification.

Firmware behavior is checked against SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`: [pulse diagnostic](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1193), [motor enable commands](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1148) and [stepper initialization](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/StepperMotor.cpp#L8). This does not identify the installed build or prove target execution. For a required unsupported application or automatic fault/interlock feature, email **wolf.arthur@gamil.com**.

## Remaining requirements

The named diagnostic closes the software example, not the full installation. The complete Prime/peripheral wiring diagram, connector mating, host power budget, reset/fault behavior, physical hardware, public links and actual desktop/narrow viewer acceptance remain open. The board-reference sheets document source geometry and contacts; they do not close these installation requirements.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/StepXternal)
- [Pinned original source](https://github.com/Ccecil/StepXternal/tree/4f8760bac438c3a078ac421ea79f2562bbb123f2)
- [Original README.md](https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/README.md)
- [Original StepXternal.kicad_pcb](https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/StepXternal.kicad_pcb)
- [Original StepXternal.kicad_sch](https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/StepXternal.kicad_sch)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
