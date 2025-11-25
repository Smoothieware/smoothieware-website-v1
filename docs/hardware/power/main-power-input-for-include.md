{::nomarkdown}
<div style="float: right; margin-left: 1rem;">
<a href="/images/power-supply.png">
  <img src="/images/power-supply.png" alt="Be careful, mains voltage is dangerous" style="width: 320px; height: auto;"/>
</a>
<p style="text-color: #eee; text-size: 0.8em; text-align: center"> Be careful, mains voltage is dangerous </p>
</div>
{:/nomarkdown}


# Main Power Input

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety First:</strong> This page involves working with mains power (110V/220V). Always exercise extreme caution and never work on live circuits.
</sl-alert>
{:/nomarkdown}

Without power, your board cannot do much.

The board uses power to operate the control logic, move stepper motors, power heating elements, fans, and other peripherals.

{::nomarkdown}
<review id="main-power-input:power-architecture">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## How to choose a power supply unit (PSU)

Two power supplies are required, 5.0V and 'bulk' power (V<sub>BB</sub>).

### 5.0V supply

- **Voltage** (V): The 5.0V supply should be regulated to 5% tolerance (4.75V to 5.25V). This supply provides power for the control logic circuitry, and should be a good quality regulated power supply (which is inexpensive). Using a cheap buck regulator from a higher voltage is *not recommended*, as **ever** exceeding 5.5V on this supply may instantly and permanently damage the control logic on your Smoothieboard.
- **Current** (A): The 5.0V supply should be rated to supply at least 1A continuous current (or more). Typical load is roughly 0.5A.

### VBB supply

- **Voltage** (V): V<sub>BB</sub> can be from 12 to 24V. While most of the components on the Smoothieboard are rated up to 32V, it is not recommended or supported to use that high of a voltage. 12V PSUs are more common, and generally cheaper. However, the higher the voltage, the higher performance you can get from your stepper motors. This is the reason some designers use 24V PSUs. However, be careful that with a 24V PSU, you will need 24V fans, and will need to reduce the PWM setting for your heating elements or (preferred, and safer) use 24V heating elements.
- **Current** (A): The total current required is the current for each stepper motor, plus the current for every peripheral on your machine Smoothieboard will control. This depends on your machine type. On a typical 3D printer, you can safely consider 10A to be sufficient for the heated bed, and 10A or a bit less for the rest of the loads. Go for a 17 to 20A PSU if you have a heated bed. 7A to 10 is probably enough if you do not have a heated bed (or if you are setting up a CNC mill or a laser cutter). If you bought your machine as a kit, a PSU with appropriate current is most probably provided (or one is recommended). If building your machine yourself by self-sourcing, the documentation for the machine model will also most probably recommend a current rating. A power supply that is able to supply more current than is needed is not a problem. Having not enough current to drive your hot-end, heater bed, or motors is a problem.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## Power Architecture Overview

Smoothieboard v2 uses a **dual power architecture** that separates motor power from MOSFET (heater/fan) power. This provides better current handling and more flexibility.

| Power Domain | Connector | Voltage | Purpose |
|--------------|-----------|---------|---------|
| **Vmot** | 1× XT30 | 12-24V DC | Stepper motors + 5V logic regulator |
| **VFET** | 2× XT30 | 12-24V DC | All MOSFET outputs (heaters, fans) |
| **5V** | Built-in | 5V DC | Logic power (from Vmot regulator) |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Simplified Power Supply</strong><br>
  Unlike v1, Smoothieboard v2 has a built-in 3A, 5V switching regulator. You typically only need a single 12-24V power supply for everything!
</sl-alert>
{:/nomarkdown}

## How to Choose a Power Supply Unit (PSU)

### Vmot (Motor Power)

| Specification | Value |
|---------------|-------|
| **Connector** | XT30 |
| **Voltage Range** | 12-24V DC (24V recommended) |
| **Powers** | Stepper motor drivers + onboard 5V regulator |
| **Typical Current** | 5-15A depending on motors |

- **24V is recommended** for better stepper motor performance (higher top speed, less heating)
- Components are rated to 32V, but 24V maximum is supported
- The onboard 5V regulator draws from Vmot, so ensure your PSU can handle motor current + ~1A overhead

### VFET (MOSFET Power)

| Specification | Value |
|---------------|-------|
| **Connectors** | 2× XT30 |
| **Voltage Range** | 12-24V DC |
| **Current per Connector** | 15A continuous |
| **Total Current** | 30A combined |
| **Powers** | All heaters, fans, SSR outputs |

**Why 2× XT30 instead of 1× XT60?**
- Lower vertical profile (fits in enclosures better)
- 12V heated beds draw high current and need both connectors
- 24V systems often only need one connector

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>12V vs 24V Systems</strong><br>
  <strong>12V heated bed (200W):</strong> 16.7A → <strong>Requires BOTH XT30 connectors</strong><br>
  <strong>24V heated bed (200W):</strong> 8.3A → Single XT30 sufficient
</sl-alert>
{:/nomarkdown}

### Power Budget Examples

**Typical 24V 3D Printer:**

| Component | Current @ 24V |
|-----------|---------------|
| 4× Stepper motors (1.5A each) | 6A |
| Heated bed (250W) | 10.4A |
| 2× Hotends (80W total) | 3.3A |
| 2× Fans (10W total) | 0.4A |
| Board logic + peripherals | ~2A equivalent |
| **Total** | ~22A |

**Recommended PSU:** 24V, 25-30A (600-720W)

**Typical 12V 3D Printer:**

| Component | Current @ 12V |
|-----------|---------------|
| 4× Stepper motors (1.5A each) | 6A |
| Heated bed (250W) | 20.8A |
| 2× Hotends (80W total) | 6.7A |
| 2× Fans (10W total) | 0.8A |
| Board logic + peripherals | ~4A equivalent |
| **Total** | ~38A |

**Recommended PSU:** 12V, 40-50A (480-600W)

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>24V Saves Current</strong><br>
  Notice how 24V systems draw roughly half the current for the same power. This means smaller wires, less heat, and often cheaper power supplies!
</sl-alert>
{:/nomarkdown}

### 5V Logic Power

The onboard 3A switching regulator provides 5V logic power automatically when Vmot is connected. See [Logic Power](logic-power) for details on alternative 5V sources.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## How to choose a power supply unit (PSU)

Two power supplies are required, 5.0V and 'bulk' power (V<sub>BB</sub>).

### 5.0V supply

- **Voltage** (V): The 5.0V supply should be regulated to 5% tolerance (4.75V to 5.25V). This supply provides power for the control logic circuitry, and should be a good quality regulated power supply (which is inexpensive). Using a cheap buck regulator from a higher voltage is *not recommended*, as **ever** exceeding 5.5V on this supply may instantly and permanently damage the control logic on your Smoothieboard.
- **Current** (A): The 5.0V supply should be rated to supply at least 1A continuous current (or more). Typical load is roughly 0.5A.

### VBB supply

- **Voltage** (V): V<sub>BB</sub> can be from 12 to 24V. While most of the components on the Smoothieboard are rated up to 32V, it is not recommended or supported to use that high of a voltage. 12V PSUs are more common, and generally cheaper. However, the higher the voltage, the higher performance you can get from your stepper motors. This is the reason some designers use 24V PSUs. However, be careful that with a 24V PSU, you will need 24V fans, and will need to reduce the PWM setting for your heating elements or (preferred, and safer) use 24V heating elements.
- **Current** (A): The total current required is the current for each stepper motor, plus the current for every peripheral on your machine Smoothieboard will control. This depends on your machine type. On a typical 3D printer, you can safely consider 10A to be sufficient for the heated bed, and 10A or a bit less for the rest of the loads. Go for a 17 to 20A PSU if you have a heated bed. 7A to 10 is probably enough if you do not have a heated bed (or if you are setting up a CNC mill or a laser cutter). If you bought your machine as a kit, a PSU with appropriate current is most probably provided (or one is recommended). If building your machine yourself by self-sourcing, the documentation for the machine model will also most probably recommend a current rating. A power supply that is able to supply more current than is needed is not a problem. Having not enough current to drive your hot-end, heater bed, or motors is a problem.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### General Notes

Multiple-output power supplies are available. In some cases, a minimum load must be applied to the primary output before the secondary output will be regulated to within tolerances. For example, a dual 5.0V and 12V supply might regulate the 5.0V well at no-load conditions, but the 12V output may be low until power is drawn from the 5.0V supply.

### EMI Filtering

**Electromagnetic Interference** (EMI): Digital logic and power circuitry (such as stepper motor drivers) switches currents and voltages on and off very rapidly. This produces EMI proportional to the voltage, current and rate of switching. EMI can be radiated (as radio waves) and/or conducted through the power line cord or other connections. EMI can interfere with (produce noise in or prevent proper operation of) other equipment, including sensors and motion encoder modules. To reduce these effects, an EMI filter module may be added to help reduce the conducted emissions. An EMI filter module may not strictly be needed, however it is often simpler to take protective measures from the start rather than e.g. searching for the cause of strange, intermittent behavior or coming back to failed 3D prints for months -- and **then** put in an EMI filter module.

### Fuses / Circuit Breakers

A typical US AC wall outlet provides 110V to 120V and is protected by a fuse or circuit breaker with a 15A or 20A rating. As (for example) a motor load such as a refrigerator or saw briefly draws a much higher starting current, in order to avoid 'nuisance trips' a 20A rating does not instantly remove power when that load is exceeded.

A V<sub>BB</sub> power supply rated (for example) 12V at 10A can provide up to 12V x 10A = 120W (Watts) of DC power. Power supplies are not 100% efficient, thus it will require 5% to 30% more than 120W of input power to produce 120W of output power. It is usually safe to assume at least 70% efficiency at full load (higher for more modern supplies), so the power supply will only need perhaps 1.5A at 120VAC input. A 1A, 5V supply will require much less than 1A at 120VAC input.

While the equipment can only use perhaps 2.5A, the AC wall outlet will provide at least 15A to 20A continuously without tripping the circuit breaker or blowing the fuse. It would be possible (though rare) for a fault condition that drew for example 10A at 120V = 1200W to occur, which would be a fire hazard, without tripping the breaker. If you wish to address this possibility, adding an additional fuse and/or circuit breaker with (for example) a 3A rating in line with the AC 'hot' wire will ensure that if there is a lot of excess power being drawn due to a circuit failure, then this fuse will blow or circuit breaker trip, and power will be removed. Too low a fuse or circuit breaker rating will result in 'nuisance' trips.

### Setup

Make sure you use a [Regulated Power Supply](http://en.wikipedia.org/wiki/Regulated_power_supply), make sure you connect the ground wire for the [mains](http://en.wikipedia.org/wiki/Mains_electricity) to the power supply, and if it has a fan, make sure it has sufficient space around it to let air flow and cool it appropriately.

To wire the power supply unit to [mains](http://en.wikipedia.org/wiki/Mains_electricity) (wall AC power), make sure you connect the right colored wires to the right connectors on the PSU. The 3 connectors are "live", "neutral" and "ground". Color changes from cable to cable. You can find charts for your specific country/cable on the internet, but the following colors are the most common:

| Standard | Load/live color | Neutral color | Earth color   |
| -------- | --------------- | ------------- | ------------- |
| US       | Black           | White         | Green         |
| Europe   | Brown           | Light blue    | Yellow/Green  |

Once the wires connected to the PSU, make sure none of your computers is doing something important (like a system upgrade). In case something goes wrong, plug the PSU into a power strip with an on/off button. Then turn that button ON. If your house loses power, you did something wrong. If an LED illuminates on the PSU, everything is fine: unplug the PSU and continue.

If you are new to wiring, please check our [how to wire guide](how-to-wire).

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>NEVER Manipulate Live Wires</strong>
  <br><br>
  <strong><a href="http://1.media.collegehumor.cvcdn.com/60/74/db2c0a0e1cbfdbe1eecf50a0289884d3-free-key-cleaner.jpg">NEVER</a></strong> manipulate mains (220/110V) power wires while they are plugged into the wall plug.
  <br><br>
  Unpleasantness and/or death are common consequences of not respecting this rule.
</sl-alert>

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Ground Your Machine</strong>
  <br><br>
  Ground your printer's frame by connecting it to the Earth terminal on your power supply.
  <br><br>
  In the (unlikely) event that a power supply wire comes undone and touches the printer's frame, this will prevent you from getting an unpleasant and/or deadly shock.
</sl-alert>

Now that the PSU is getting mains power, your PSU is converting it into 12V or 24V DC (Direct Current) power. You need to connect wires from it to the Smoothieboard to provide power.

The most important thing for DC is to respect polarity: **+** goes to **+**, **-** goes to **-**. On the PSU, **+** terminals are indicated as **+**, **V+**, **12V+** or **24V+**. Ground (**-**) terminals are indicated as **-**, **V-**, **COM** or **GND**.

On the Smoothieboard they are indicated simply as **+** and **-**.

{::nomarkdown}
<sl-alert variant = "primary" open>
<sl-icon  slot    = "icon" name = "diagram-3"></sl-icon>
  <a href="/images/main-power-input.png">
    <img src="/images/main-power-input.png" style="width: 100%;"/>
  </a>
  <p><strong>Wiring Diagram:</strong> Refer to the <a href="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-power.png?raw=true">Smoothieboard power connection diagram</a> for visual reference on connecting power supplies. </p>
</sl-alert>
{:/nomarkdown}

By convention, black (sometimes brown) wires are used for ground, and red (sometimes orange, white or yellow) wires are used for power connections.

You may want to turn on the power supplies and test the output voltages before connecting them to the Smoothieboard (and turn them back off before connecting).

Once the wires are correctly connected, you can turn the PSU ON. If everything was done correctly, the red LED (marked **VBB**) on the Smoothieboard will light up brightly.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>LED Not Lighting Up</strong>
  <br><br>
  If the <strong>VBB</strong> LED does not light up, immediately turn the PSU off.
  <br><br>
  Check polarity, and check all the connections are strong and properly done.
  <br><br>
  When you turn the PSU on, make sure you are ready to immediately turn it back off.
</sl-alert>

Now that the board has power, you can use that power to move things!

### Emergency stop

It is recommended you setup an emergency stop button on your machine, so that in case of a problem, you can easily and quickly turn the machine off. For information on how to do this, please read [EmergencyStop](emergencystop).
