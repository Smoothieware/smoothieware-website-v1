---
permalink: /bluebox-guide
---


# Your guide to installing Smoothieboard in a Blue Box Laser Cutting machine

( See also [blue-box-guide](blue-box-guide) )

<div class="grid" markdown="1">
<div class="col md-6" markdown="1">

« Blue Box » laser cutters ( sometimes also referred to as K40 ) are cheap Chinese machines basically designed for laser engraving of stamps.

The electronics and software that come with it are generally considered barely usable, and are at the very least very limited.

However, the machine itself, while cutting cost at all corners, and not being of the best quality, is a good option ( and the cheapest option possible ) for anybody looking at getting started with laser cutting.

These machines can be found for $700 or even sometimes less on eBay, and have become more and more popular as people have started replacing the internal electronics, first with Arduino-based boards, and now with Smoothieboard. This allows for easier use, more software options, and makes for an overall much better machine.

Their work area is roughly A4 size, and the laser power is about 40W.

This allows the machine to cut and engrave plywood, MDF, balsa, cardboard, paper, leather, cloth, and PMMA ( acrylic ), up to about 5mm thickness.

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

This guide is a [community](/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

<a href="/images/temporary/laser-cutter-generic.jpg">
  <img src="/images/temporary/laser-cutter-generic.jpg" alt="Blue Box Laser Cutter" style="width: 100%; max-width: 400px;"/>
</a>

</div>
</div>

<div class="clearfix"></div>

## About this guide

This guide is specific to the « Blue box » model that is very commonly found, but the information it contains should be useful for most Chinese laser cutters.

Larger Chinese models have higher quality, and function on basically the same principle ( except they use external stepper motor drivers ).

There is a more general guide: the [Laser Cutter Guide](/laser-cutter-guide). You should read it before you read this guide, as it contains much information you need to be familiar with to do things properly.

This guide is based on Stephane BUISSON's blue box build log.

## Safety

{% include machine-guides/laser-cutters/laser-warning-for-include.md %}
{% include hardware/wiring/warning-for-include.md %}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Interlock Integration</strong><br/>
  It is highly recommended to integrate a door safety interlock to prevent the laser from firing when the enclosure is open. The laser PSU provides a safety switch connection (P or WP pin) that must be connected to ground for the laser to fire. Connect this pin through a normally-open door switch so the circuit is only completed when the door is closed. This provides hardware-level protection independent of software controls.
</sl-alert>
{:/nomarkdown}

<div class="clearfix"></div>

## Inside the machine

If you look into your machine, you will see two main electronics items: 

<div class="clearfix"></div>

<div class="grid" markdown="1">
<div class="col md-6" markdown="1">

### The power supply

The laser Power Supply ( PSU ) converts the mains ( 110 or 220V AC ) power into very high voltage ( several thousand volts ) that is fed to the laser CO2 tube.

In the case of these small blue box laser cutters, this PSU also provides 5V power for the electronics' logic, and 24V for the stepper motors.

The exact model may vary depending on your exact machine's model, manufacturer, and version. Here in this tutorial, we will be using the MYJG40W from [Amazon](https://www.amazon.com/Cloudray-Laser-Supply-Engraver-Cutter/dp/B079MHKQXF?th=1), but other PSUs should be very similar in their wiring and function.

If your PSU is too different from the one in this guide to allow you to adapt the instructions, please contact the community.

</div>
<div class="col md-6">
<a href="/images/temporary/voltage-regulator-generic.jpg">
  <img src="/images/temporary/voltage-regulator-generic.jpg" alt="Power Supply Unit" style="width: 400px; height: 292px; float: right; margin-left: 1rem;"/>
</a>
</div>
</div>
<div class="clearfix"></div>

<div class="grid" markdown="1">
<div class="col md-12" markdown="1">

Here are the various connections you will find on your PSU:

| Connector | Connection label | Name | Description |
| --------- | ---------------- | ---- | ----------- |
| High power | `L-` | Mains Ground | Connects to the mains ground wire and to the enclosure for grounding |
| | `FG` | Laser Ground | The ground side of the tube connects to this connection |
| | `AC` | Mains | Alternative current from the mains cable |
| | `AC` | Mains | Alternative current from the mains cable |
| Logic | `G` | Logic Ground | Common ground for all logic signals |
| | `P` or `WP` | Safety switch | The laser won't fire unless this is connected to Ground, used for the door switch |
| | `L` or `TL` | Fire switch | The laser will fire if this is connected to Ground, used for the test switch |
| | `G` | Logic Ground | Common ground for all logic signals |
| | `IN` | Input | Reads an Analog or PWM signal to set the laser's power |
| | `5V` | Logic power | 5V to power the controller board's logic |
| Low power | `+24V` | Motor power | 24V to move the stepper motors |
| | `G` | Power Ground | Common ground |
| | `5V` | Logic power | Unconnected |
| | `L` | ? | Unconnected |

</div>
</div>
<div class="clearfix"></div>

<div class="grid" markdown="1">
<div class="col md-6" markdown="1">

### The controller board

The controller board connects via USB to your computer, receives data ( like an image to engrave ), and controls both the stepper motors and the laser power, to obtain the desired result ( an engraved image ).

The controller board that comes with the blue box is very limited, and can only interface with the crappy closed software that comes with it. This is essentially why you are reading this guide: the goal is to throw this board out, and replace it with a Smoothieboard.

</div>
<div class="col md-6">
<a href="/images/temporary/circuit-board-generic.jpg">
  <img src="/images/temporary/circuit-board-generic.jpg" alt="Controller Board" style="min-width: 640px; display: block; margin: 2rem auto;"/>
</a>
</div>
</div>
<div class="clearfix"></div>

## Basic power

First things first, you need to provide power to your Smoothieboard.

There is a 4-pin 5mm connector on your Smoothieboard with a VBB/GND and 5V labels.

You will want to connect 24V power to the VBB input on the Smoothieboard, 5V power to the 5V input on the Smoothieboard, and ground to GND:

<div class="grid" markdown="1">
<div class="col md-6" markdown="1">

| Connector | Connection label | Name | Description |
| --------- | ---------------- | ---- | ----------- |
| | `5V` | Logic power | Connect to the 5V power input on Smoothieboard |
| | `+24V` | Motor power | Connect to the VBB power input on Smoothieboard |
| | `G` | Power Ground | Connect to the Ground input on the Smoothieboard |

</div>
<div class="col md-6">
<a href="/images/polarity.png">
  <img src="/images/polarity.png" alt="Smoothieboard Polarity" style="width: 200px; height: 200px; float: right; margin-left: 1rem;"/>
</a>
</div>
</div>
<div class="clearfix"></div>

Once this is wired, if you power the laser PSU, the Smoothieboard should turn on, and both the red VBB LED, and the orange 3.3V LED should light up.

<div class="clearfix"></div>

## Controlling the stepper motors

<div class="grid" markdown="1">
<div class="col md-6" markdown="1">

Your machine has two stepper motors, one for the X axis, and one for the Y axis. Each motor has 4 wires, controlling two internal coils.

If you are using a Smoothieboard in a blue box, you will want to wire each of those stepper motors to one of the stepper motor drivers on the Smoothieboard ( M1 for X, and M2 for Y ).

If you are following this guide along but are using a larger machine than the blue box, then it's very likely your machine came with external stepper motor drivers, and you want to simply have Smoothieboard control those via their step/direction/enable interface. If this is the case, please look at the [laser cutter guide's](/laser-cutter-guide) section on external stepper motor drivers.

The first thing you want to do, is find the wires for each stepper motor, and follow them to the controller board.

</div>
<div class="col md-6">
<a href="/images/temporary/stepper-motor-generic.jpg">
  <img src="/images/temporary/stepper-motor-generic.jpg" alt="Stepper Motors" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
</div>
</div>
<div class="clearfix"></div>

Once you have located each set of 4 wires, separate them from the rest, and for each, make a 4-pin connector using the connectors and crimps that came with the Smoothieboard. 

**Note**: The stepper motor wires come on ribbon cables, and are arranged in a specific order. You need to keep that order when connecting them to the Smoothieboard, you cannot connect them in a random order. If you lost the order, look at the laser cutter guide, it has detailed information on how to figure this out.

Then connect the X stepper motor to the M1 stepper motor driver, and the Y stepper motor to the M2 stepper motor driver.



**Motor Configuration:**

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

In your configuration file, set the motor current and steps per mm:

```
alpha_current 1                    # X stepper motor current (1 Ampere)
beta_current 1                     # Y stepper motor current (1 Ampere)
alpha_steps_per_mm 157.575         # Steps per mm for X axis
beta_steps_per_mm 157.575          # Steps per mm for Y axis
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In your configuration file, set the motor current and steps per mm:

```ini
[current control]
alpha.current = 1                  # X stepper motor current (1 Ampere)
beta.current = 1                   # Y stepper motor current (1 Ampere)

[actuator]
x.steps_per_mm = 157.575           # Steps per mm for X axis
y.steps_per_mm = 157.575           # Steps per mm for Y axis
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



Once this is done, connect to the board via USB using software such as Pronterface or the web interface, power up the machine, and you should be able to move the stepper motors, and therefore the axes, using the controls in the software.

## Testing Laser Firing Safely

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Critical Safety Warning</strong><br/>
  Before testing laser firing, ensure proper eye protection is worn by all persons in the area, the enclosure is closed, and the area is clear of flammable materials. Never look directly at the laser beam or reflections. Always have a fire extinguisher nearby.
</sl-alert>
{:/nomarkdown}

After configuring your laser power control (see the [Laser Cutter Guide](/laser-cutter-guide) for detailed laser configuration), you can test laser firing using G-code commands:

**Basic Test Commands:**

```gcode
M3 S0.1     # Turn laser on at 10% power (S value from 0.0 to 1.0)
M5          # Turn laser off
```

**Testing Procedure:**

1. Start with very low power settings (S0.05 to S0.1)
2. Place a piece of dark material (cardboard or wood) in the cutting area
3. Ensure enclosure is closed and all safety interlocks are engaged
4. Send `M3 S0.1` to fire the laser at 10% power
5. Observe the laser spot on the material (should see a visible dot)
6. Send `M5` to turn the laser off immediately
7. Gradually increase power in small increments (S0.1, S0.2, etc.) to verify power control

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Tip:</strong> When testing, keep your finger on the emergency stop button and be ready to send <mcode>M5</mcode> or cut power immediately if anything appears abnormal. The laser should turn off instantly when <mcode>M5</mcode> is sent.
</sl-alert>
{:/nomarkdown}

## LightBurn Integration

LightBurn is a popular commercial laser cutting software that works excellently with Smoothieware-based laser cutters. It provides an intuitive interface for designing, importing, and cutting projects.

**Setting up LightBurn with Smoothieboard:**

1. Download and install [LightBurn](https://lightburnsoftware.com/) (free trial available)
2. Connect your Smoothieboard via USB
3. In LightBurn, go to **Devices** → **Find My Laser**
4. Select your Smoothieboard from the detected devices
5. Choose **Smoothieware** as the device profile
6. Configure your working area dimensions (approximately 300mm x 200mm for blue box machines)

**Key LightBurn Features:**

- Visual job preview and positioning
- Layer-based power and speed control
- Built-in design tools and image import
- Real-time position feedback
- Job time estimation
- Support for multiple file formats (SVG, DXF, AI, PDF, images)

**Recommended Settings:**

- Set your maximum feed rate to match your configuration
- Configure laser power range (0-100% mapped to your S value range)
- Enable "Start from current position" for easier job alignment
- Use the frame function to preview cut boundaries before firing

For detailed configuration instructions and advanced features, refer to the [LightBurn documentation](https://lightburnsoftware.github.io/NewDocs/) and the [Laser Cutter Guide](/laser-cutter-guide) on this site.
