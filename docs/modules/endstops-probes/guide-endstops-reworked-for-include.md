<span id="mechanical-endstop-wiring"></span>

## Wire and prove one mechanical endstop

Start with one axis. Finish its wiring and input test before adding another switch.

**You need:** a mechanical endstop, two wires, the pinout for your board, access to the configuration file, and a serial or web console.

**You are done when:** {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} reports one state with the switch released and the opposite state with it pressed. Prove that before asking the machine to move.

<!-- learning-diagram:25-guide-endstops -->
{::nomarkdown}
<figure id="learning-diagram-25-guide-endstops" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/25-guide-endstops.svg">
    <img src="/images/learning-diagrams/25-guide-endstops.svg" alt="Place the endstop at the homing end: home_to_min uses the minimum endstop. home_to_max uses the maximum endstop." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Place the endstop at the end where this axis will home. <a href="#learning-diagram-25-guide-endstops" aria-label="Permanent link to Place the endstop at the homing end" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
</figure>
{:/nomarkdown}

### Choose the connector and switch contacts

An endstop gives Smoothie a repeatable reference position. A homing switch is not automatically a hard limit: homing, hard limits, and software travel limits are separate jobs that you enable separately.

Choose the minimum or maximum connector to match the end where the axis will home. The configuration names are:

| Axis | V1 minimum / maximum | V2 minimum / maximum |
| --- | --- | --- |
| X | `alpha_min` / `alpha_max` | `minx` / `maxx` |
| Y | `beta_min` / `beta_max` | `miny` / `maxy` |
| Z | `gamma_min` / `gamma_max` | `minz` / `maxz` |

Most microswitches have three contacts:

- **C**, common
- **NO**, connected to C only while the switch is pressed
- **NC**, connected to C while the switch is released

Use **C and NC** for the usual fail-safe wiring. A broken wire then looks like a triggered switch instead of silently removing the stop signal. NC wiring is also less susceptible to electrical noise.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Remove power before wiring.</strong><br><br>
  A bare microswitch uses only Signal and Ground. Do not wire VCC directly through it: the switch can short VCC to Ground and damage the board.
</sl-alert>
{:/nomarkdown}

### Connect Signal and Ground

Connect the board connector's **Signal** pin to **C** on the switch. Connect the board connector's **Ground** pin to **NC**.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/end-stops.png">
    <img src="/images/recovered/end-stops.png" alt="Signal and Ground wired to the common and normally closed contacts of a mechanical endstop" style="display: block; width: min(100%, 720px); height: auto; margin: 0 auto;"/>
  </a>
  <p><em>Signal goes to C. Ground goes to NC. Leave VCC unused for a bare switch.</em></p>
</div>
{:/nomarkdown}

Use the pinout for the board in front of you. V2 board variants do not share one universal set of connector pin names.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

See the [Smoothieboard V1 pinout](pinout) for physical connector pins.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

See the [Smoothieboard V2 Prime board page](smoothieboard-v2-prime) and the [STM32H7 pin-use reference](stm32h7-pin-usage), then use the bundled configuration that matches your board as the starting point.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

<span id="testing"></span>
<span id="reading"></span>

## Test the input before motion

Restore power and connect with host software such as Pronterface or the [web interface](network). Keep motor power off for this electrical test.

1. Release the switch and send {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown}.
2. Hold the switch down and send {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} again.
3. Compare the value for the connector you wired.

Existing Smoothie firmware output examples use either of these label forms:

```
X min:1 Y min:0 Z min:0
```

```
min_x:0 min_y:0 min_z:0 max_x:0 max_y:0 max_z:0
ok
```

An input configured as `nc` (not connected) does not appear in the response.

| Result | Meaning | Next action |
| --- | --- | --- |
| The value changes once | The input works | Continue to the controlled homing test |
| The value never changes | Wrong contacts, connector, or pin | Check C/NC, the cable, and the configured pin |
| The value changes in the wrong direction | The input polarity is inverted | Add or remove `!` after the pin name |
| The input does not appear | It is configured as `nc` | [Configure the pin](endstops-reworked#configuration), restart, then repeat this test |

For example, the V1 X-min pin on a Smoothieboard changes from pull-up to pull-up and inverted like this:

```
alpha_min_endstop   1.24^
```

```
alpha_min_endstop   1.24^!
```

See [Pin Configuration](/pin-configuration) for the meaning of `^`, `v`, and `!`.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not home an axis until its <mcode>M119</mcode> value changes when you press and release the switch. If the machine cannot see the input here, it cannot stop on that switch during homing.
</sl-alert>
{:/nomarkdown}

The wiring stage passes when the input changes reliably in both directions. If the input is absent, configure its pin first and return to this test. Configure the homing direction and travel before enabling motor power or sending a homing command.
