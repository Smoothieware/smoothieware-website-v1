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

{::nomarkdown}
<review id="mosfets:main-content">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Smoothie has up to 6 MOSFET controls (6 on 5X, 4 on 4X, and 2 on 3X).

The MOSFETs act as switches to ground: loads must be connected between the power source and the MOSFET switched terminal.

When the MOSFET is switched on, power will be applied to the load.

When the MOSFET is switched off, power will be removed, because one load terminal will be essentially disconnected and current cannot flow.

The exception being inductive load 'flyback' switching transients, discussed above.

Connect your PSU to the power input connector for those FETs (providing power to the load), and connect your power-consuming element (be it heating element, spindle, etc.) between the power output terminal and the MOSFET terminal.

Smoothie connects/disconnects the element's ground as needed to maintain temperature or as requested by G-codes.

There are three main pairs of MOSFETs on the board:

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## MOSFET Overview

Smoothieboard v2 has a simplified and safer MOSFET architecture compared to v1:

| Output Type | Count | Current | Purpose |
|-------------|-------|---------|---------|
| **Low-Current FETs** | 4 | ~5A each | Hotend1, Hotend2, Fan1, Fan2 |
| **Bed FET** | 1 (2× parallel) | ~10-12A | Heated bed |
| **SSR Outputs** | 2 | Milliamps | Solid-state relay control |

All MOSFET outputs are powered from the **VFET** power input (2× XT30 connectors, 30A total).

### Key Safety Feature: High-Side PFET Watchdog

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="shield-check"></sl-icon>
  <strong>Enhanced Safety</strong><br>
  The 4 low-current FETs share a common +VFET rail controlled by a high-side P-channel MOSFET (PFET) watchdog. The firmware can instantly kill power to all 4 outputs if a thermal runaway or fault is detected.
</sl-alert>
{:/nomarkdown}

**How it works:**
- All 4 low-current FETs (hotends, fans) connect to a shared +VFET power rail
- This rail is controlled by a high-side PFET watchdog
- If any low-side FET fails shorted (stuck ON), the high-side PFET can still disconnect power
- Provides an additional layer of protection against thermal runaway

**Bed FET Independence:**
- The heated bed FET is **NOT** controlled by the high-side PFET watchdog
- This is deliberate: allows the bed to remain on even if other FETs are shut down
- Bed thermal runaway protection is handled directly by firmware

### Low-Current FETs (Hotends, Fans)

| Specification | Value |
|---------------|-------|
| **Outputs** | 4 (hotend1, hotend2, fan1, fan2) |
| **Current Rating** | ~5A per output |
| **Voltage** | Up to 24V |
| **Power Source** | Shared +VFET rail |
| **Safety** | High-side PFET watchdog |
| **Control** | PWM capable (firmware-controlled frequency) |
| **LED Indicators** | Yes (per output) |

### Bed FET

| Specification | Value |
|---------------|-------|
| **Configuration** | 2× MOSFETs in parallel |
| **Combined Current** | ~10-12A |
| **Voltage** | Up to 24V |
| **Power Source** | Direct from VFET (not through PFET watchdog) |
| **Control** | PWM capable |
| **LED Indicator** | Yes |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Heated Bed Power Calculation</strong><br>
  <strong>200W bed @ 12V:</strong> 16.7A - Consider using an external SSR<br>
  <strong>200W bed @ 24V:</strong> 8.3A - Within bed FET capacity
</sl-alert>
{:/nomarkdown}

### SSR Outputs

| Specification | Value |
|---------------|-------|
| **Outputs** | SSR1, SSR2 |
| **Type** | Logic-level (3.3V or 5V signal) |
| **Current** | Milliamps (for SSR coil drive) |
| **Use Cases** | Solid-state relay control, auxiliary outputs |

Use SSR outputs to control external solid-state relays for:
- High-power heated beds (>12A)
- AC-powered heaters
- Other high-current loads

### Power LED Indicators

Each MOSFET output has its own LED indicator showing when it's active:
- **Hotend1 LED**: Hotend 1 heater active
- **Hotend2 LED**: Hotend 2 heater active
- **Fan1 LED**: Fan 1 active
- **Fan2 LED**: Fan 2 active
- **Bed LED**: Heated bed active

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Smoothie has up to 6 MOSFET controls (6 on 5X, 4 on 4X, and 2 on 3X).

The MOSFETs act as switches to ground: loads must be connected between the power source and the MOSFET switched terminal.

When the MOSFET is switched on, power will be applied to the load.

When the MOSFET is switched off, power will be removed, because one load terminal will be essentially disconnected and current cannot flow.

The exception being inductive load 'flyback' switching transients, discussed above.

Connect your PSU to the power input connector for those FETs (providing power to the load), and connect your power-consuming element (be it heating element, spindle, etc.) between the power output terminal and the MOSFET terminal.

Smoothie connects/disconnects the element's ground as needed to maintain temperature or as requested by G-codes.

There are three main pairs of MOSFETs on the board:

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="mosfets:detailed-pairs">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

- **Big MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>2.5</pin>{:/nomarkdown}** on the schematic, the input connector for them is found between them. They are found on the 4X and 5X boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Small MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>2.4</pin>{:/nomarkdown}** on the schematic, the input connector for them is found by their side, between P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown} and P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown}. They are found on all of the boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Mixed MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>1.22</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown}** on the schematic. The pair is called "mixed" because it consists of one big MOSFET and one small MOSFET. They do not have a specific input, they take power directly from VBB (the Stepper motors power input described in the Stepper Motors chapter). To power those MOSFETs, you need to provide them with power by wiring their power input (which is the same as the one for the stepper motors) to the power supply.

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Wiring MOSFET Outputs

### Power Connection

All MOSFET outputs on Smoothieboard v2 are powered from the **VFET** power input:

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Simplified Wiring</strong><br>
  Unlike v1, Smoothieboard v2 has a single VFET power input (2× XT30 connectors) that powers ALL MOSFET outputs. No separate power inputs for different MOSFET groups!
</sl-alert>
{:/nomarkdown}

**Wiring steps:**
1. Connect your 12-24V power supply to the VFET XT30 connectors
2. Connect your heaters/fans between the MOSFET output terminals and ground
3. That's it - no jumpers or multiple power connections needed!

### MOSFET Output List

| Output | Type | Current | Typical Use |
|--------|------|---------|-------------|
| **Hotend1** | Low-current FET | ~5A | First hotend heater |
| **Hotend2** | Low-current FET | ~5A | Second hotend heater |
| **Fan1** | Low-current FET | ~5A | Part cooling fan |
| **Fan2** | Low-current FET | ~5A | Auxiliary fan |
| **Bed** | Dual parallel FETs | ~10-12A | Heated bed |
| **SSR1** | Logic output | mA | External SSR control |
| **SSR2** | Logic output | mA | External SSR control |

### Polarity and Safety

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Polarity Important:</strong> MOSFET power inputs have a polarity, make sure you connect <code>+</code> on your PSU to the <code>+</code> terminal on the XT30 connectors.
  <br><br>
  Heater elements (resistive) do not have a polarity, so you do not have to worry about polarity on the outputs.
  <br><br>
  If you are using a Peltier element or a DC motor, you need to respect the polarity for the outputs.
</sl-alert>
{:/nomarkdown}

### High-Current Loads (>12A)

If you need to control more than 10-12A (the bed FET limit), use the SSR outputs to control an external Solid State Relay:

- **SSR1/SSR2** provide logic-level signals to drive SSR coils
- Use a properly rated SSR for your load (e.g., 40A SSR for AC-powered heated beds)
- SSRs are recommended for AC mains-powered heaters

For information see the [Solid State Relay Appendix](general-appendixes#solidstaterelay).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

- **Big MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>2.7</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>2.5</pin>{:/nomarkdown}** on the schematic, the input connector for them is found between them. They are found on the 4X and 5X boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Small MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>2.4</pin>{:/nomarkdown}** on the schematic, the input connector for them is found by their side, between P{::nomarkdown}<pin>2.6</pin>{:/nomarkdown} and P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown}. They are found on all of the boards. To power those MOSFETs, you need to provide them with power by wiring their power input to the power supply.

- **Mixed MOSFET pair**: Their outputs are labeled **P{::nomarkdown}<pin>1.22</pin>{:/nomarkdown}** and **P{::nomarkdown}<pin>1.23</pin>{:/nomarkdown}** on the schematic. The pair is called "mixed" because it consists of one big MOSFET and one small MOSFET. They do not have a specific input, they take power directly from VBB (the Stepper motors power input described in the Stepper Motors chapter). To power those MOSFETs, you need to provide them with power by wiring their power input (which is the same as the one for the stepper motors) to the power supply.

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

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
