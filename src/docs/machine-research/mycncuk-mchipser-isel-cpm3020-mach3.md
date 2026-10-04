# mchipser’s Isel CPM 3020 Mach3 conversion

**Machine identity:** mchipser’s individual Isel CPM 3020 CNC router, which the owner says was the same model as another unit discussed earlier in the MYCNCUK thread. The owner’s “same CNC” wording plus a separate purchase/conversion history is treated here as a separate physical unit from craynerd’s CPM 3020; serial number and distinguishing options are not given.

**Novelty check:** On 2026-09-23, repository Markdown/HTML and the local atlas/wiki dossier material were searched for mchipser, Isel CPM 3020, and the thread title. No matching machine dossier was found. Generic CPM 3020 coverage may exist under a different name.

**Operating state:** In June 2018 the owner described buying this CPM 3020 and planning a Mach3 retrofit. He reported X/Y movement, then movement that stopped when limit switches were touched, and later said the conversion was complete. He also reported trouble with microstep/velocity setup and random X-axis missed steps, so the final motion configuration was still being corrected. “Conversion complete” in his post does not establish the later axis fault was solved.

## Owner-reported machine and conversion

| Area | Reported details | Limits |
|---|---|---|
| Base machine | Isel CPM 3020. The owner says he received the same CNC as craynerd’s machine. | Serial, year, options, travel, spindle/router model, and connector/revision details are absent. |
| Original motors/electronics | mchipser believed he could reuse the original stepper motors, but decided to replace the drivers and power supply and add a motion controller. Earlier owner craynerd reports that the CPM 3020 uses stepper motors and has an all-in-one control board; that board description belongs to craynerd’s separate physical machine unless confirmed same revision. | The mchipser posts do not identify the original drive/card or state definitively that every original motor and PSU was reused or discarded. |
| New drivers and supply | Owner’s parts list: three StepperOnline stepper drivers, 1.0–4.2 A and 20–50 V; a LETOUR 36 V, 350 W supply rated by the listing at 9.7 A. | No installed current/microstep DIP settings, measured supply behavior, fuses, or wiring diagram is included. |
| Motion controller | Owner lists a SainSmart five-axis breakout board and an Ethernet SmoothStepper he already owned. He also references a DB25 parallel adapter cable. | The final controller wiring/topology and exact motion-controller model/revision are not fully detailed. |
| Driver signal discussion | In June 2018 the owner says the breakout board labels were +5 V, EN, DIR, STEP; drivers used PUL+/−, DIR+/−, ENA+/−. He proposed EN→ENA, DIR→DIR+, STEP→PUL+ and asked where the breakout board’s extra +5 V should go. | The thread’s question is unresolved in the inspected excerpt; do not treat this proposed mapping as verified wiring. Polarity/common wiring and electrical compatibility remain unknown. |
| Machine cable connector | The owner reports that four stepper leads entered a DB9 connection and that the remaining bundled leads were limit-switch wires. | The post does not give a cavity map, connector gender/mating view, axis assignment, motor phase assignment, or limit-switch pin functions. Show all nine numbered DB9 cavities OPEN. |
| Controller-side DB25 adapter | The owner’s parts list names a C2G DB25 female parallel Add-A-Port cable. C2G describes part 10338 as a motherboard/I/O-card ribbon adapter with a DB25 female panel connector and 26-pin IDC end. | This is a host/controller mounting adapter, not evidence of a machine-mounted DB25. Keep it in retrofit context; do not draw it as a machine peripheral or infer a SmoothieBox route through it. |
| Software and workholding | Mach3; owner said he was setting up microstepping and motor velocity. | Mach3 version, port/pin configuration, steps per unit, acceleration, limits, homing, and spindle control are absent. |

## Owner-reported setup progression

The owner first reports X and Y moving and then reports that X, Y, and Z plus limit switches were wired: he says the axes moved and stopped when a limit switch was touched. He planned to add a router relay and make first chips. In the subsequent update he said the conversion was done and linked a video. A few days later he reported that microstep settings did not seem correct and that X randomly skipped a step. These reports establish substantial commissioning progress but not a verified finished machining setup.

The owner’s DB9 observation is a connector-level clue only: it supports a nine-position connector card with every cavity left OPEN. The separate C2G DB25 female adapter is identified by its manufacturer as a host-card bracket adapter; it is not the machine-side connector in this retrofit.

Other members discussed a separate buyer’s Isel and possible motor/driver configurations; those suggestions are not attributed to mchipser’s CPM 3020. An earlier participant’s description of craynerd’s all-in-one board likewise should not be copied onto this machine without inspecting its cabinet.

## Forum visuals

The MYCNCUK thread includes an owner-posted image illustrating a proposed eight-wire stepper hookup and a linked video of the conversion moving. The image/video pixels were not retrieved and inspected in this pass, and the wiring photo was posted as a proposal/question, not verified as the final motor wiring. See the [original MYCNCUK discussion](https://www.mycncuk.com/threads/9416-Isel-CPM-3020-run-with-mach3) and the specific [conversion-complete post](https://www.mycncuk.com/threads/9416-Isel-CPM-3020-run-with-mach3?p=103201).

## Pinout and safety limits

The owner’s question about the extra +5 V line remains unanswered in the inspected post excerpt. No axis connector map, motor phase identification, enable polarity, limit input pin map, E-stop circuit, door interlock, spindle relay wiring, or verified final Mach3 configuration is available. Do not wire the board from the owner’s tentative EN/DIR/STEP proposal or from advice about other Isel models.

## Source

1. MYCNCUK, mchipser, [“Isel CPM 3020 - run with mach3?”](https://www.mycncuk.com/threads/9416-Isel-CPM-3020-run-with-mach3), especially [post #59 on page 6](https://www.mycncuk.com/threads/9416-Isel-CPM-3020-run-with-mach3/page6) and posts 61–70 on 17–25 June 2018. Owner posts provide the DB9 cable observation, conversion shopping list, driver/breakout signal labels and unresolved question, motion/limit-switch progress, claimed completion, and subsequent X-axis missed-step problem. A different owner’s earlier CPM 3020 retrofit thread context is used only to explain the separate-machine distinction, not as this machine’s exact hardware facts.
2. C2G, [part 10338 product sheet](https://www.cablestogo.com/p/print/CG-10338.pdf), identifies a motherboard/I-O-card ribbon adapter with a DB25 female bracket connector; it does not establish a DB25 on the machine.
