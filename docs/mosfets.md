
> [!WARNING]
{::nomarkdown}
> ![Warning]<img src="images/Warning.png" alt="Warning">
{:/nomarkdown}
> If it will burn your skin, don't touch it. Simple.

Smoothie has up to 6 MOSFET controls (6 on 5X, 4 on 4X, and 2 on 3X). The MOSFETs act as switches to ground: loads must be connected between the power source and the MOSFET switched terminal. When the MOSFET is switched on, power will be applied to the load. When the MOSFET is switched off, power will be removed, because one load terminal will be essentially disconnected and current cannot flow. The exception being inductive load 'flyback' switching transients, discussed above.

Connect your PSU to the power input connector for those FETs (providing power to the load), and connect your power-consuming element (be it heating element, spindle, etc.) between the power output terminal and the MOSFET terminal. Smoothie connects/disconnects the element's ground as needed to maintain temperature or as requested by G-codes.

There are three main pairs of MOSFETs on the board:

- Big MOSFET pair: Their outputs are labeled **P2_7** and **P2_5** on the schematic, the input connector for them is found between them. They are found on the 4X and 5X boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.
- Small MOSFET pair: Their outputs are labeled **P2_6** and **P2_4** on the schematic, the input connector for them is found by their side, between P2_6 and P1_23. They are found on all of the boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.
- Mixed MOSFET pair: Their outputs are labeled **P1_22** and **P1_23** on the schematic. The pair is called "mixed" because it consists of one big MOSFET and one small MOSFET. They do not have a specific input, they take power directly from VBB (the Stepper motors power input described in the Stepper Motors chapter). To power those MOSFETs, you need to provide them with power by wiring their power input (which is the same as the one for the stepper motors) to the power supply.

> [!TIP]
> Contrary to other boards, Smoothieboard does not have a single power input, but multiple power inputs.
> 
> This allows you to use different voltages for different things if you want, and makes it easier to use more current as the current is shared between more connectors. It does mean wiring one or two more connectors though.
> 
> If you are trying to control MOSFETs and they are not turning on, make sure you provided power to their power input.

MOSFETs list:

| MOSFET group   | MOSFET name         | Controlling pin | Output connector | Input method                 | Voltage | Current    |
| -------------- | ------------------- | --------------- | ---------------- | ---------------------------- | ------- | ---------- |
| Big MOSFETs    | First big MOSFET    | `2.7`           | X15              | Big MOSFETs power input X13  | 12-24V  | 12.5A max  |
| Big MOSFETs    | Second big MOSFET   | `2.5`           | X10              | Big MOSFETs power input X13  | 12-24V  | 12.5A max  |
| Small MOSFETs  | First small MOSFET  | `2.4`           | X7               | Small MOSFETs power input X6 | 12-24V  | 3A max     |
| Small MOSFETs  | Second small MOSFET | `2.6`           | X8               | Small MOSFETs power input X6 | 12-24V  | 3A max     |
| Mixed MOSFETs  | Third big MOSFET    | `1.23`          | X16              | VBB (motor) input            | 12-24V  | 12.5A max  |
| Mixed MOSFETs  | Third small MOSFET  | `1.22`          | X9               | VBB (motor) input            | 12-24V  | 3A max     |

MOSFETs diagram:
{::nomarkdown}
!<img src="images/MOSFETs.png" alt="MOSFET Input Output">

{:/nomarkdown}
> [!WARNING]
> MOSFET power inputs have a polarity, make sure you connect `+` on that connector to `+` on your PSU, and `-` to `-` on the PSU. Heater elements, however, do not have a polarity, so you do not have to worry about polarity on the outputs. If you are using another output element like a Peltier or a Spindle, you need to be careful to respect the polarity for the outputs too.

Never use the big MOSFETS for more than 12.5A (and monitor connector and MOSFET temperatures at that current use, too much heating can be a sign of a bad wire connection), and the small MOSFETS should never be used for more than 3A.

Trying to power a 40W (or more) hotend cartridge heater at 12V with the small FETs will destroy them, usually locking (melting) them to the "ON" state (shorted) and possibly destroying the circuitry driving the MOSFET gate.

If you need to control more than 12 Amps, you cannot do it with one of the MOSFETS on board, however, you can use a Solid State Relay. For information see the [Solid State Relay Appendix on this page](general-appendixes.md#solidstaterelay).

> [!NOTE]
> In the case of both the Big MOSFETS pair and the Small MOSFETS pair, you take power from the PSU (Power Supply Unit) to them via their respective power input connectors.
> 
> There is an alternative, however (for currents up to 2 Amps or 4 Amps). For each pair, you can use jumpers (one jumper for the small MOSFETS pair (**JP28**), two parallel jumpers for the two big MOSFETS pair (**JP11** and **JP27**)). If you solder the pins for those OR connect a jumper to those pins, closing the circuit to VBB (the stepper motors power input), allowing you to take the power from those MOSFETS from the same place as the stepper motors do.
> 
> In the case of the big MOSFETS, you have to solder and put in place two jumpers, in parallel, in order to handle more current.

> [!WARNING]
> However, **WARNING**, each jumper is rated for only 2A of current. This means you cannot use this way of powering your MOSFETS if you are going to use more than 2A (for the small MOSFETS) or 4A (for the big MOSFETS, with both jumpers used, for 2 x 2A).
> 
> Do not use the jumpers to power a heated bed, for example, as it uses much more than 4A.
