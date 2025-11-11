### MOSFETs

{::nomarkdown}
<a href="/images/temporary/mosfet-generic.jpg">
  <img src="/images/temporary/mosfet-generic.jpg" alt="Warning" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Warning:</strong> If it will burn your skin, don't touch it. Simple.
</sl-alert>
{:/nomarkdown}

Smoothie has up to 6 MOSFET controls (6 on 5X, 4 on 4X, and 2 on 3X).

The MOSFETs act as switches to ground: loads must be connected between the power source and the MOSFET switched terminal.

When the MOSFET is switched on, power will be applied to the load.

When the MOSFET is switched off, power will be removed, because one load terminal will be essentially disconnected and current cannot flow.

The exception being inductive load 'flyback' switching transients, discussed above.

Connect your PSU to the power input connector for those FETs (providing power to the load), and connect your power-consuming element (be it heating element, spindle, etc.) between the power output terminal and the MOSFET terminal.

Smoothie connects/disconnects the element's ground as needed to maintain temperature or as requested by G-codes.

{::nomarkdown}
There are three main pairs of MOSFETs on the board:

- **Big MOSFET pair**: Their outputs are labeled **P<pin>2.7</pin>** and **P<pin>2.5</pin>** on the schematic, the input connector for them is found between them. They are found on the 4X and 5X boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Small MOSFET pair**: Their outputs are labeled **P<pin>2.6</pin>** and **P<pin>2.4</pin>** on the schematic, the input connector for them is found by their side, between P<pin>2.6</pin> and P<pin>1.23</pin>. They are found on all of the boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Mixed MOSFET pair**: Their outputs are labeled **P<pin>1.22</pin>** and **P<pin>1.23</pin>** on the schematic. The pair is called "mixed" because it consists of one big MOSFET and one small MOSFET. They do not have a specific input, they take power directly from VBB (the Stepper motors power input described in the Stepper Motors chapter). To power those MOSFETs, you need to provide them with power by wiring their power input (which is the same as the one for the stepper motors) to the power supply.
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Multiple Power Inputs:</strong> Contrary to other boards, Smoothieboard does not have a single power input, but multiple power inputs.
  <br><br>
  This allows you to use different voltages for different things if you want, and makes it easier to use more current as the current is shared between more connectors. It does mean wiring one or two more connectors though.
  <br><br>
  If you are trying to control MOSFETs and they are not turning on, make sure you provided power to their power input.
</sl-alert>
{:/nomarkdown}

MOSFETs list:

| MOSFET group   | MOSFET name         | Controlling pin | Output connector | Input method                 | Voltage | Current    |
| -------------- | ------------------- | --------------- | ---------------- | ---------------------------- | ------- | ---------- |
| Big MOSFETs    | First big MOSFET    | <pin>2.7</pin>           | X15              | Big MOSFETs power input X13  | 12-24V  | 12.5A max  |
| Big MOSFETs    | Second big MOSFET   | <pin>2.5</pin>           | X10              | Big MOSFETs power input X13  | 12-24V  | 12.5A max  |
| Small MOSFETs  | First small MOSFET  | <pin>2.4</pin>           | X7               | Small MOSFETs power input X6 | 12-24V  | 3A max     |
| Small MOSFETs  | Second small MOSFET | <pin>2.6</pin>           | X8               | Small MOSFETs power input X6 | 12-24V  | 3A max     |
| Mixed MOSFETs  | Third big MOSFET    | <pin>1.23</pin>          | X16              | VBB (motor) input            | 12-24V  | 12.5A max  |
| Mixed MOSFETs  | Third small MOSFET  | <pin>1.22</pin>          | X9               | VBB (motor) input            | 12-24V  | 3A max     |

#### MOSFETs diagram

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/mosfet-generic.jpg">
    <img src="/images/temporary/mosfet-generic.jpg" alt="MOSFET Input Output" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Polarity Important:</strong> MOSFET power inputs have a polarity, make sure you connect <code>+</code> on that connector to <code>+</code> on your PSU, and <code>-</code> to <code>-</code> on the PSU.
  <br><br>
  Heater elements, however, do not have a polarity, so you do not have to worry about polarity on the outputs.
  <br><br>
  If you are using another output element like a Peltier or a Spindle, you need to be careful to respect the polarity for the outputs too.
</sl-alert>
{:/nomarkdown}

Never use the big MOSFETS for more than 12.5A (and monitor connector and MOSFET temperatures at that current use, too much heating can be a sign of a bad wire connection), and the small MOSFETS should never be used for more than 3A.

Trying to power a 40W (or more) hotend cartridge heater at 12V with the small FETs will destroy them, usually locking (melting) them to the "ON" state (shorted) and possibly destroying the circuitry driving the MOSFET gate.

If you need to control more than 12 Amps, you cannot do it with one of the MOSFETS on board, however, you can use a Solid State Relay.

For information see the [Solid State Relay Appendix on this page](general-appendixes#solidstaterelay).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Alternative Power Method:</strong> In the case of both the Big MOSFETS pair and the Small MOSFETS pair, you take power from the PSU (Power Supply Unit) to them via their respective power input connectors.
  <br><br>
  There is an alternative, however (for currents up to 2 Amps or 4 Amps). For each pair, you can use jumpers (one jumper for the small MOSFETS pair (<strong>JP28</strong>), two parallel jumpers for the two big MOSFETS pair (<strong>JP11</strong> and <strong>JP27</strong>)).
  <br><br>
  If you solder the pins for those OR connect a jumper to those pins, closing the circuit to VBB (the stepper motors power input), allowing you to take the power from those MOSFETS from the same place as the stepper motors do.
  <br><br>
  In the case of the big MOSFETS, you have to solder and put in place two jumpers, in parallel, in order to handle more current.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Jumper Current Limitation:</strong> However, <strong>WARNING</strong>, each jumper is rated for only 2A of current.
  <br><br>
  This means you cannot use this way of powering your MOSFETS if you are going to use more than 2A (for the small MOSFETS) or 4A (for the big MOSFETS, with both jumpers used, for 2 x 2A).
  <br><br>
  Do not use the jumpers to power a heated bed, for example, as it uses much more than 4A.
</sl-alert>
{:/nomarkdown}
