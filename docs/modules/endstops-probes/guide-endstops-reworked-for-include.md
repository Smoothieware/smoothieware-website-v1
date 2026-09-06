{::nomarkdown}
<a href="/images/recovered/limit-switch.png">
  <img src="/images/recovered/limit-switch.png" alt="A mechanical limit switch" style="width: 200px; height: 200px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

# Endstops

<!-- learning-diagram:25-guide-endstops -->
{::nomarkdown}
<figure id="learning-diagram-25-guide-endstops" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/25-guide-endstops.svg">
    <img src="/images/learning-diagrams/25-guide-endstops.svg" alt="Place the endstop at the homing end: home_to_min uses the minimum endstop. home_to_max uses the maximum endstop." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Place the endstop at the homing end <a href="#learning-diagram-25-guide-endstops" aria-label="Permanent link to Place the endstop at the homing end" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
</figure>
{:/nomarkdown}

*It's essentially just a switch*

End-stops are small interrupters that you put at the end of each of your axes.

When you boot your machine up, Smoothie has no way of knowing the position of each axis.

When it starts a print, Smoothie moves the axis until it touches that interrupter, and when it is hit, it declares that that is position **0** for that axis. And does so for all axes.

More precisely, it declares the position configured for that endstop, which is usually 0. You can change that position when the machine's origin is somewhere else.

This allows Smoothie to then precisely know where everything is relative to that initial position.

It is quite convenient as it saves you the hassle of actually moving the machine into that position when you want to start a print. Automation is great.

However, end-stops are not necessary, you could do without them. They are just so convenient that most machines use them.

End-stops can also be used as limit switches which prevent the machine from attempting to move beyond the physical limits of the axis by pausing or stopping movement when triggered.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>To make things as simple as possible:</strong> In Smoothie, endstops do three things:<br><br>
  • Homing (move til endstop is hit)<br>
  • Hard endstops (stop when endstop is hit, which is optional)<br>
  • Soft endstop (once homed, do not go further than a set position, which is also optional)
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Smoothie does not allow you to use a Z probe as an endstop. An endstop must be dedicated to being an endstop and cannot be used as a Z probe and vice versa.<br><br>
  This does not mean <em>ANY</em> kind of feature is missing, you can still do everything you expect, this is just a subtility in vocabulary and in how configuration is organized, that new users are generally fine with, <em>except</em> if they come from another system which has a different paradigm. See the <a href="zprobe">Z probe page</a> for probe configuration.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/limit-switch.png">
    <img src="/images/recovered/limit-switch.png" alt="Six endstops" style="width: min(100%, 430px); height: auto;"/>
  </a>
  <p><em>There are 6 of them, two for each axis</em></p>
</div>
{:/nomarkdown}

## Mechanical endstop wiring

This will concentrate on the most common type of end-stops: the mechanical ones.

Other types exist like optical or Hall-effect sensors.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>About Fancy Endstop Types</strong><br><br>
  There are plenty of fun and futuristic endstop types around: optical, laser, magnetic, force-sensitive, infrared, inductive, etc...<br><br>
  However, please note that the general feedback from the community, is that most of those are either less precise, less repeatable, or much more difficult to get to "work right", compared to the classical "mechanical" endstop.<br><br>
  The mechanical endstop is actually likely the most precise, repeatable and easy to get to work option you have at your disposal. Just because these other options exist and have been explored by the community, does not mean they are better.<br><br>
  You might happen to have a good reason to use a fancy endstop, but if you don't, it's likely a good idea to stick with a mechanical one.
</sl-alert>
{:/nomarkdown}

[Mechanical end-stops](https://reprap.org/wiki/Mechanical_Endstop) are simple interrupters. Most have three connection points, to which you have to attach your wires:

- **C**: Common
- **NO**: Normally Open, meaning it is not connected to **C** when the interrupter is not pressed, and connected to **C** when the interrupter is pressed.
- **NC**: Normally Closed, meaning it is connected to **C** when the interrupter is not pressed, and not connected to **C** when the interrupter is pressed.

Use **C** and **NC** for the usual wiring.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/end-stops.png">
    <img src="/images/recovered/end-stops.png" alt="Endstop wiring diagram" style="display: block; width: min(100%, 720px); height: auto; margin: 0 auto;"/>
  </a>
  <p><em>You want to connect the <strong>Signal</strong> (green in the schematic) and <strong>Ground</strong> (blue in the schematic) pins for the end-stop on the Smoothieboard, to the <strong>C</strong> and <strong>NC</strong> connection points on the end-stop.</em></p>
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Why C to Signal and NC to Ground?</strong><br><br>
  For each endstop, we connect C to Signal and NC to Ground because this means the digital input pin (endstop connector) will be connected to Ground in its normal state and cut from Ground when the button is pressed. This approach is less prone to noise than the reverse. See <a href="http://wot.lv/combating-endstop-noise-on-a-reprap.html">here</a> for more information.<br><br>
  Another positive effect of this approach is, that if a wire breaks for some reason you get the same signal as if the endstop is pressed. That makes sure that even with a damaged wire you are not able to overrun the endstop.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Do NOT Connect VCC and GND!</strong><br><br>
  Make absolutely sure that you do not connect VCC (red) and GND (blue) to a mechanical (microswitch) endstop! Depending on your wiring this may fry your Smoothieboard instantly or when the switch gets pressed. There is certain wiring where this won't happen when you switch the signal between VCC and GND, but if you're not careful enough you will damage your board.
</sl-alert>
{:/nomarkdown}

For a machine which homes at the minimum end, connect X to X min, Y to Y min, and Z to Z min. If an axis homes at the other end, use its max connector and configure `home_to_max` instead.

### Pin names

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

On a Smoothieboard V1, the six endstop inputs map like this:

| Endstop | X MIN | X MAX | Y MIN | Y MAX | Z MIN | Z MAX |
| --- | --- | --- | --- | --- | --- | --- |
| Config value | `alpha_min` | `alpha_max` | `beta_min` | `beta_max` | `gamma_min` | `gamma_max` |
| Pin name | {::nomarkdown}<pin>1.24</pin>{:/nomarkdown} | {::nomarkdown}<pin>1.25</pin>{:/nomarkdown} | {::nomarkdown}<pin>1.26</pin>{:/nomarkdown} | {::nomarkdown}<pin>1.27</pin>{:/nomarkdown} | {::nomarkdown}<pin>1.28</pin>{:/nomarkdown} | {::nomarkdown}<pin>1.29</pin>{:/nomarkdown} |

See the [Smoothieboard V1 pinout](pinout) for the connectors themselves.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

V2 uses these configuration names:

| Endstop | X MIN | X MAX | Y MIN | Y MAX | Z MIN | Z MAX |
| --- | --- | --- | --- | --- | --- | --- |
| Config value | `minx` | `maxx` | `miny` | `maxy` | `minz` | `maxz` |
| Processor pin | Board-specific | Board-specific | Board-specific | Board-specific | Board-specific | Board-specific |

The bundled Smoothieboard V2 configurations currently use `PD0`, `PI1`, and `PI0` for X min, Y min, and Z min respectively; check the configuration supplied with your board rather than treating that set as universal.

An older version of this guide showed `PG10`, `PG9`, `PG11`, `PG12`, `PG13`, and `PG14` as if they were the V2 equivalent of the six V1 inputs. That was not safe as a general V2 pin table. Use the [Smoothieboard V2 Prime board page](smoothieboard-v2-prime) and [STM32H7 pin-use reference](stm32h7-pin-usage) for the board in front of you.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

<span id="testing"></span>
<span id="reading"></span>

## Test the endstop before moving the axis

The default configuration most probably already has everything you need: the pins are already correct and the default speeds are reasonable. Still, test the electrical input before asking the machine to move.

Reset your Smoothieboard, then connect to it using host software like [Pronterface](pronterface) or the [web interface](network). For this first electrical test, keep motor power off.

Use the {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} command once with the switch released, then once while pressing it by hand.

Depending on the firmware version, Smoothie answers in one of these forms:

```
X min:1 Y min:0 Z min:0
```

```
min_x:0 min_y:0 min_z:0 max_x:0 max_y:0 max_z:0
ok
```

The first example means the X endstop is pressed, while Y and Z are not. An input configured as `nc` (meaning "not connected") will not be reported.

Use a combination of this command, and manually pressing the end-stop, to determine what is going on.

- If an end-stop is read as always pressed, or never pressed, even when you press or release it, then you probably have a wiring problem. Check everything.
- If an endstop is read as pressed when it is not, and not pressed when it is, then your end-stop is inverted.
- If an input does not appear, configure its pin instead of `nc`, restart the board, and repeat the test.

You can reverse a pin in the configuration file by adding or removing a `!` character after the pin number. For example, if the V1 X min endstop is inverted, change:

```
alpha_min_endstop   1.24^
```

to:

```
alpha_min_endstop   1.24^!
```

See [Pin Configuration](/pin-configuration) for the meaning of `^`, `v`, and `!`.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not home an axis until its <mcode>M119</mcode> value changes every time you press and release the switch. If Smoothie cannot see the input here, it cannot stop on that switch during homing.
</sl-alert>
{:/nomarkdown}
