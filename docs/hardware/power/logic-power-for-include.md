# Logic Power Inputs



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/smoothieboard-logic-inputs.svg">
  <img src="/images/smoothieboard-logic-inputs.svg" alt="Logic Power Inputs" style="width: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

There are different ways of providing logic power to your board.

Your board needs two sorts of power to work:

- **12-24V power** to turn motors, heat hotends, etc.
- **5V (or "logic") power** to power the microcontroller (the brain)

## Three Ways to Provide 5V Power

There are three ways to provide 5V power to the board:

### 1. Via USB cable

USB cables provide 5V directly to the board.

This is the simplest method and works well for testing and setup.

### 2. Via voltage regulator

By soldering a [voltage regulator](voltageregulator) to the board (and providing 12+24V, which the voltage regulator then turns into 5V).

This allows the board to be powered from your main power supply.

### 3. Direct 5V input

By providing 5V directly to the 5V power input (next to the VBB power input).

This requires a separate 5V power supply.

## Simplest Solution

If you want to keep it simple, the easiest solution is just to connect your Smoothieboard to your computer via USB.

## Multiple Power Supplies

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  You can connect several different power supplies at the same time, with no issue at all.
</sl-alert>
{:/nomarkdown}

Smoothieboard has diodes on-board that will simply get the power from the one with the highest voltage.

This means you can even turn one off and the other will be used without a reset.

## Understanding Voltage and Current

If voltage and current are strange concepts to you, it's probably a good idea before you continue setting up your board, that you read [this introduction](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law).

## Power Consumption

The board's logic circuits (5V line) typically consume up to 500mA current (what is standard for a USB port).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Your board needs two sorts of power to work:

- **12-24V power** to turn motors, heat hotends, etc.
- **5V (or "logic") power** to power the microcontroller (the brain)

## Three 5V Power Sources

Smoothieboard v2 supports three different 5V power sources, with automatic switching between them:

### 1. Onboard 5V Regulator (Recommended)

The board has a built-in **3A switching regulator** that converts your motor power (Vmot, 12-24V) to 5V.

| Specification | Value |
|---------------|-------|
| **Output Current** | 3A continuous |
| **Input Source** | Vmot (12-24V) |
| **Efficiency** | 85-90% (switching regulator) |
| **Disable Jumper** | JP16 (near OSHW logo, top side) |

This is the preferred power source for most setups. It provides enough current to power:
- The board itself (~300-500mA)
- A Raspberry Pi (~500-1500mA)
- A small touchscreen (~400-700mA)

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Single Power Supply Setup</strong><br>
  Using the onboard regulator means you only need one power supply (12-24V) for your entire system - no separate 5V supply required!
</sl-alert>
{:/nomarkdown}

### 2. USB Power

USB provides 5V directly to the board, limited to ~500mA (USB specification).

| Specification | Value |
|---------------|-------|
| **Output Current** | ~500mA (USB spec limit) |
| **Disable Jumper** | JP15 (bottom side, near 5V input) |

This is useful for:
- Testing and initial setup
- Low-power configurations
- When Vmot is not connected

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>USB Power Limitation</strong><br>
  If you're connecting a Raspberry Pi to the board via USB, you may want to cut the JP15 jumper to prevent the Pi from attempting to power the board through USB (which could cause issues).
</sl-alert>
{:/nomarkdown}

### 3. External 5V Input

You can provide 5V directly via the dedicated 5V input header.

| Specification | Value |
|---------------|-------|
| **Connector** | 5Vin header |
| **Current Capacity** | Depends on your external supply (2-5A recommended) |

This is useful when you:
- Have a dedicated 5V power supply
- Need more than 3A for peripherals
- Want to keep 5V power independent from motor power

## Automatic Power Source Selection

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Ideal Diode Protection</strong><br>
  You can connect multiple 5V sources simultaneously! The board automatically selects the best source.
</sl-alert>
{:/nomarkdown}

Smoothieboard v2 uses **ideal diode ORing** for automatic power source selection:

- **Automatic switching**: The board selects the source with the highest voltage
- **Backflow prevention**: Power cannot flow backward between sources
- **Minimal voltage drop**: Only ~tens of mV loss (vs ~600mV with standard diodes on v1)
- **No manual switching**: Connect everything, and it just works

**Typical priority order:**
1. Onboard regulator (if Vmot present)
2. External 5V input
3. USB power (if jumpers intact)

This means you can turn off one power source and the board will seamlessly switch to another without resetting!

## Power Status LEDs

Smoothieboard v2 has several LEDs to help you monitor power status:

| LED | Indicates |
|-----|-----------|
| **Vmot LED** | Motor power present (12-24V) |
| **Vfet LED** | MOSFET power present (12-24V) |
| **3.3V LED** | Logic power present (board is on) |
| **MSD LED** | Mass Storage Device mode active |
| **Debug LEDs** | 4× programmable status LEDs |

## Disabling Power Sources with Jumpers

You can physically disable individual power sources by cutting jumpers:

- **JP15**: Cut to disable USB 5V input (useful when connecting Raspberry Pi via USB)
- **JP16**: Cut to disable onboard 5V regulator (if using external 5V supply exclusively)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Don't Cut Jumpers Unless Necessary</strong><br>
  Most users should leave all jumpers intact. Only cut them if you have a specific reason (like preventing USB backfeeding from a Raspberry Pi).
</sl-alert>
{:/nomarkdown}

## Understanding Voltage and Current

If voltage and current are strange concepts to you, it's probably a good idea before you continue setting up your board, that you read [this introduction](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law).

## Power Budget Example

Here's a typical power budget for a 3D printer with Raspberry Pi:

| Component | Current @ 5V |
|-----------|-------------|
| Board logic | ~300-500mA |
| Raspberry Pi 3 | ~500-1500mA |
| 7" touchscreen | ~400-700mA |
| **Total** | ~1.2-2.7A |

The onboard 3A regulator handles this comfortably with headroom to spare!

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}


