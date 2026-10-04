# Avid Plug and Play CNC controller 22.2 contact tables

Source: [Avid CNC Controller Technical Manual, Schematics, revision 22.2 / documentation version 2025Q1.1](https://www.avidcnc.com/support/instructions/electronics/pnp/manual/22.2/schematics/). Read on 2026-09-26. The manufacturer's page gives individual rows for the CRP850-00E Phoenix terminal blocks and the 14-pin control cable. This supplement records those rows for atlas profile `base-28`; it does not identify a particular installed box, mating face, cable continuity, or a SmoothieBox electrical interface.

## CRP850-00E Phoenix terminal blocks

The manufacturer's 42-row table lists the following terminal numbers and functions. Odd terminals 1–15 are NPN future inputs FF8 through FF1, each followed by a ground terminal. The table identifies the input section as a 12 V domain. Terminals 17, 19 and 21 are **5 V logic replicas** of relay control signals, not dry relay contacts. Terminals 33 and 34 are a separate spindle relay dry-contact pair. Motor 6 step and direction on 23 and 25 are controller outputs to an additional driver, not motor phase contacts. Spindle PWM on 35 is 0–5 V; the analog speed output on 37 is 0–10 V. The source's voltage column says `10V` for terminal 38, which is labelled ACM; the voltage-column entry should not be interpreted as proof that an analog common is held at +10 V.

| Terminals | Manufacturer functions |
| --- | --- |
| 1–16 | 1 FF8, 2 GND, 3 FF7, 4 GND, 5 FF6, 6 GND, 7 FF5, 8 GND, 9 FF4, 10 GND, 11 FF3, 12 GND, 13 FF2, 14 GND, 15 FF1, 16 GND |
| 17–26 | 17 Relay 1 OUT1, 18 GND, 19 Relay 2 OUT2, 20 GND, 21 spindle relay OUT3, 22 GND, 23 motor 6 step, 24 GND, 25 motor 6 direction, 26 GND |
| 27–34 | 27 motor enable, 28 GND, 29 5V input, 30 GND, 31 motor enable, 32 GND, 33 spindle relay FWD, 34 spindle relay DCM |
| 35–42 | 35 PWM, 36 GND, 37 spindle 0–10V, 38 spindle ACM, 39 12V input, 40 GND, 41 spindle fault input, 42 GND |

The manufacturer explains that future inputs close their NPN signal to ground, the 12 V input powers optocouplers, the motor-enable terminals are normally bridged by a switch, and the relay/analog outputs serve different interfaces. Those electrical distinctions prevent a mere name match from qualifying any direct SmoothieBox route.

## 14-pin control cable

The source's individually numbered cable table maps: 1 spindle fault ground (blue), 2 spindle fault signal (white), 3 plasma torch ON (orange/black), 4 plasma torch ON (green/black), 5 divided plasma voltage − (red/black), 6 divided plasma voltage + (red/white), 7 spindle FWD (orange), 8 spindle DCM (green), 9 spindle AVI (red), 10 spindle ACM (black), 11 optional spindle 10 V reference (blue/white), 12 plasma Arc OK (white/black), 13 plasma ground (blue/black), and 14 plasma Arc OK ground (green/white). These are the manufacturer's harness colors, not verified colors on any retrofit cable. The source says plasma pins are populated but disconnected by default on routing controllers, while spindle pins are populated but disconnected on plasma controllers. Population alone is therefore not evidence of a live circuit.

## Reconciliation with earlier atlas graph

The portable graph snapshot for `base-28` already represented all 56 positions but repeated one group-level phrase across each member of a group and stated that individual assignments were unverified. The manufacturer table above resolves those assignments for this revision. The new diagram replaces the two graph cards with this exact source-scoped 14 + 42 position reference. It preserves the contact numbers and leaves all SmoothieBox routes OPEN. Other Avid revisions and the control-cable analog-pair discrepancy noted in the older atlas text remain separate; this supplement does not project the 22.2 table onto them.
