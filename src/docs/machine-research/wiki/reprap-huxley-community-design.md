# RepRap Huxley (community design) — machine-side contact evidence

## Variant boundary

This profile covers the general RepRap Huxley community design at `reprap.org/wiki/Huxley`. It does not import the distinct RepRapPro Huxley kit wiring instructions or the eMaker Huxley fork. The design page says electronics may vary and requires any selected electronics to meet RepRap Interface Standard RIS 1.

## Source-supported machineside groups

The Huxley design page identifies three NEMA 14 axis stepper motors and one NEMA 17 stepper for the Bowden extruder. It does not assign the three NEMA 14 motors to individual axes or provide motor connector/contact counts, winding pairs, cable order, or a fitted controller. The motor peripherals are named and their SmoothieBox routes remain OPEN.

RIS 1 defines a controller feature set and expressly does not specify whether electronics use one or multiple boards, or set motor/heater/sensor voltages. The standard requires support for at least four steppers, three RIS 2 endstops, one thermistor-type sensor, and one heater of at least 60 W. These requirements do not establish a fitted Huxley controller or installed peripheral schedule.

RIS 2 defines one conditional endstop connector reference: Molex KK100-compatible 3-pin header, 2.54 mm spacing, with the standard diagram order `Vs | GND | Vcc`. These are sequence labels; the standard does not assign numeric pin numbers. It documents separate 3.3 V and 5 V electrical options and states that Sanguinololu 1.3a does not match this pinout; neither option is selected for a Huxley build here. These three named positions are **conditional standards references**, not the pinout of a fitted machine. The Huxley page provides no axis-to-header mapping, switch or harness schedule, mating-face view, or continuity evidence. All three references remain OPEN to SmoothieBox.

## Route and variant limits

- No dotted route is justified by the design-level motor counts or the generic controller requirements; zero guesses are shown.
- No controller board, step/dir/enable terminal, heater/thermistor contact schedule, endstop harness, polarity beyond the conditional RIS 2 reference labels, power voltage, or machine-specific connector order is assigned.
- Do not copy RepRapPro Huxley cable paths, its 19 V power-socket pins, NC switch wiring, Melzi pinouts, or eMaker motor topology to this community design.
- No reviewed community-design source identifies a DB25 connector.

## Sources checked 2026-09-27

- [RepRap Huxley community design](https://reprap.org/wiki/Huxley): any RIS 1-compliant electronics; three NEMA 14 motors; one NEMA 17 Bowden-extruder motor; variant boundary.
- [RepRap Interface Standard](https://reprap.com/wiki/RepRap_Interface_Standard): RIS 1 controller feature requirements and conditional RIS 2 endstop connector positions/order.
- [RepRapPro Huxley wiring](https://reprap.org/wiki/RepRapPro_Huxley_wiring): checked only to establish a separate kit-specific variant; its wiring is excluded.
