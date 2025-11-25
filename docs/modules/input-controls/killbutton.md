---
permalink: /killbutton
---


# Smoothie Kill Button

There are two solutions for implementing a kill button on the Smoothieboard:

## LED Tactile Button

Solder an [LED Tactile Button](https://www.sparkfun.com/products/10442) on the Smoothieboard.

{::nomarkdown}
<a href="/images/recovered/led-tactile-button.png">
  <img src="/images/recovered/led-tactile-button.png" alt="Led Tactile Button" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

## Simple Button

Wire a simple button on two pins.

{::nomarkdown}
<a href="/images/recovered/simple-button.png">
  <img src="/images/recovered/simple-button.png" alt="Simple Button" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<review id="killbutton:config">
<proposal>
{:/nomarkdown}

The button may be configured as a kill switch, which will halt all operations, turn off heaters, and pause the host. It can be cleared with a {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown} command or by resetting the board. To enable a kill button, the following configuration is added:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```plaintext
kill_button_enable                        true             # set to true to enable a kill button
kill_button_pin                           2.12             # kill button pin. default is same as pause button 2.12 (Add ^ for external buttons)
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[kill button]
enable = true                # set to true to enable a kill button
pin = 2.12                   # kill button pin (Add ^ for external buttons)
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

When in the halted state (after the kill button is pressed), the play LED will flash rapidly. The kill state can be cleared by holding down the kill button for 2 seconds or more.

Alternatively, a latching E-Stop button can be hooked up to the kill button header (usually normally open). Then use this config:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```plaintext
kill_button_toggle_enable        true                # allows for latching estop button
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[kill button]
toggle_enable = true         # allows for latching estop button
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

When the E-Stop button is hit and latched on, it will halt the system. When it is unlatched and released, the system will exit the halt condition.

If you do not want the halt to exit when it is released, then set this:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```plaintext
unkill_enable     false                # do not unkill when button held or released
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[kill button]
unkill_enable = false        # do not unkill when button held or released
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

The button may be configured as a kill switch, which will halt all operations, turn off heaters, and pause the host. It can be cleared with a {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown} command or by resetting the board. To enable a kill button, the following configuration is added:

```plaintext
kill_button_enable                        true             # set to true to enable a kill button
kill_button_pin                           2.12             # kill button pin. default is same as pause button 2.12 (Add ^ for external buttons)
```

When in the halted state (after the kill button is pressed), the play LED will flash rapidly. The kill state can be cleared by holding down the kill button for 2 seconds or more.

Alternatively, a latching E-Stop button can be hooked up to the kill button header (usually normally open). Then use this config:

```plaintext
kill_button_toggle_enable        true                # allows for latching estop button
```

When the E-Stop button is hit and latched on, it will halt the system. When it is unlatched and released, the system will exit the halt condition.

If you do not want the halt to exit when it is released, then set this:

```plaintext
unkill_enable     false                # do not unkill when button held or released
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Normally Closed (NC) Kill Button Warning:</strong> If your kill button is "Normally Closed" (NC), it will be pressed at boot time. By default, the bootloader reads the <pin>2.12</pin> pin at boot time and if it is closed, will enter DFU mode. This means that you cannot use pin <pin>2.12</pin> for a normally closed kill button as it will prevent the board from booting normally. The solution is very simple: just use any other pin and edit the configuration accordingly.
</sl-alert>

{% include troubleshooting/stopping-smoothie-for-include.md %}
